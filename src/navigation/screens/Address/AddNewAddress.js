import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function AddNewAddress({ route, navigation }) {
    const source = route.params.source;
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [labelProvince, setLabelProvince] = useState('');
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [labelDistrict, setLabelDistrict] = useState('');
    const [wards, setWards] = useState([]);
    const [selectedWard, setSelectedWard] = useState('');
    const [labelWard, setLabelWard] = useState('');
    const [isProvinceOpen, setIsProvinceOpen] = useState(false);
    const [isDistrictOpen, setIsDistrictOpen] = useState(false);
    const [isWardOpen, setIsWardOpen] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://provinces.open-api.vn/api/?depth=1`);
                const data = response.data;
                const items = data.map(province => ({
                    label: province.name,
                    value: province.code
                }));
                setProvinces(items);
                console.log("Province", provinces);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [isProvinceOpen]);
    const fetchDistricts = async (selectedProvince) => {
        console.log(selectedProvince);

        if (selectedProvince) {
            try {
                const response = await axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`);
                const data = response.data;
                console.log(data);
                const items = data.districts.map(district => ({
                    label: district.name,
                    value: district.code
                }));
                setDistricts(items)
                console.log("District", districts);
            } catch (error) {
                console.error('Error fetching data:', error);
            };
        }
    };
    const fetchWards = async (selectedDistrict) => {
        if (selectedDistrict) {
            try {
                const response = await axios.get(`https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`);
                const data = response.data;
                console.log(data);
                const items = data.wards.map(ward => ({
                    label: ward.name,
                    value: ward.code
                }));
                setWards(items)
                console.log("Ward", wards);
            } catch (error) {
                console.error('Error fetching data:', error);
            };
        }
    };
    const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);
    const [user, setUser] = useState({});
    const checkSaveButton = () => {
        setSaveButtonEnabled(input2 !== '');
    };

    const getUser = async () => {
        const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
        setUser(userStorage);
    }

    useEffect(() => {
        getUser();
    }, []);


    useEffect(() => {
        checkSaveButton();
    }, [input2]);

    const handleAddAddress = async () => {
        try {
            if (user) {
                const user_id = user.id;
                console.log(user_id);
                const requestData = {
                    user: {
                        id: user_id
                    },
                    building_flnum: input1,
                    hnum_sname: input2,
                    ward_commune: labelWard,
                    county_district: labelDistrict,
                    province_city: labelProvince
                };
                const response = await axios.post(`http://localhost:8080/api/addresses/add`,
                    requestData,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log('Địa chỉ mới đã được thêm:', response.data);
                navigation.navigate(source, { refresh: new Date().getTime() });
            }
        } catch (error) {
            console.error('Lỗi khi thêm địa chỉ mới:', error);
        }
    }
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0
            }}>
                <View style={{ backgroundColor: 'white', marginTop: 3, marginBottom: 10 }}>
                    <View style={styles.action}>
                        <Text>{user ? user.full_name : "N/A"}</Text>
                    </View>
                    <View style={styles.action}>
                        <Text>{user ? user.phone_number : "N/A"}</Text>
                    </View>
                </View>
                <DropDownPicker
                    dropDownContainerStyle={{ borderWidth: 0, borderRadius: 0 }}
                    style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 0, zIndex: 3 }}
                    items={provinces}
                    open={isProvinceOpen}
                    listMode='SCROLLVIEW'
                    setOpen={() => {
                        setIsProvinceOpen(!isProvinceOpen);
                        setIsDistrictOpen(false);
                        setIsWardOpen(false);
                    }}
                    placeholder="Tỉnh, Thành phố"
                    defaultValue={selectedProvince}
                    value={selectedProvince}
                    onSelectItem={(item) => {
                        setSelectedProvince(item.value);
                        fetchDistricts(item.value);
                        setLabelProvince(item.label);
                    }}
                    maxHeight={300}
                    selectedItemLabelStyle={{ color: 'orangered', fontWeight: 500 }}
                    tickIconStyle={{ tintColor: 'orangered' }}
                    listItemContainerStyle={{ borderBottomWidth: 0.5, borderBottomColor: '#ECECEE', height: 50, }}
                />
                <DropDownPicker
                    dropDownContainerStyle={{ borderWidth: 0, borderRadius: 0 }}
                    style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 0, zIndex: 2 }}
                    items={districts}
                    open={isDistrictOpen}
                    listMode='SCROLLVIEW'
                    setOpen={() => {
                        setIsDistrictOpen(!isDistrictOpen);
                        setIsProvinceOpen(false);
                        setIsWardOpen(false);
                    }}
                    placeholder="Quận, Huyện"
                    defaultValue={selectedDistrict}
                    value={selectedDistrict}
                    onSelectItem={(item) => {
                        setSelectedDistrict(item.value);
                        fetchWards(item.value);
                        setLabelDistrict(item.label);
                    }}
                    maxHeight={300}
                    selectedItemLabelStyle={{ color: 'orangered', fontWeight: 500 }}
                    tickIconStyle={{ tintColor: 'orangered' }}
                    listItemContainerStyle={{ borderBottomWidth: 0.5, borderBottomColor: '#ECECEE', height: 50, }}
                />
                <DropDownPicker
                    dropDownContainerStyle={{ borderWidth: 0, borderRadius: 0 }}
                    style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 0, zIndex: 1 }}
                    items={wards}
                    open={isWardOpen}
                    listMode='SCROLLVIEW'
                    setOpen={() => {
                        setIsWardOpen(!isWardOpen);
                        setIsProvinceOpen(false);
                        setIsDistrictOpen(false);
                    }}
                    placeholder="Xã, Phường"
                    defaultValue={selectedWard}
                    value={selectedWard}
                    onSelectItem={(item) => {
                        setSelectedWard(item.value);
                        setLabelWard(item.label);
                    }}
                    maxHeight={300}
                    selectedItemLabelStyle={{ color: 'orangered', fontWeight: 500 }}
                    tickIconStyle={{ tintColor: 'orangered' }}
                    listItemContainerStyle={{ borderBottomWidth: 0.5, borderBottomColor: '#ECECEE', height: 50, }}
                />
                <View style={{ backgroundColor: 'white' }}>
                    <View style={styles.action}>
                        <TextInput
                            placeholder='Số nhà, Tên đường'
                            placeholderTextColor='#BCBCBC'
                            value={input2}
                            onChangeText={(text) => {
                                setInput2(text);
                                checkSaveButton();
                            }} />
                    </View>
                    <View style={styles.action}>
                        <TextInput
                            placeholder='Tòa nhà, Số tầng (Không bắt buộc)'
                            placeholderTextColor='#BCBCBC'
                            value={input1}
                            onChangeText={(text) => {
                                setInput1(text);
                                checkSaveButton();
                            }} />
                    </View>
                </View>


                <View style={{ backgroundColor: 'white', marginTop: 10 }}>
                    <View style={styles.action}>
                        <TextInput style={{ textAlignVertical: 'top' }} placeholder='Ghi chú cho tài xế (Không bắt buộc)' placeholderTextColor='#666666' multiline={true} numberOfLines={8} />
                    </View>
                </View>
            </View>
            <View style={{
                backgroundColor: 'white', padding: 10, position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0
            }}>
                <Pressable backgroundColor={saveButtonEnabled ? '#ED4D2D' : '#E8E8E8'}
                    onPress={handleAddAddress} disabled={!saveButtonEnabled}
                    style={{ padding: 13, alignItems: 'center', borderRadius: 3, }}>
                    <Text style={{ fontSize: 15, color: saveButtonEnabled ? 'white' : '#ACACAC' }}>Lưu</Text>
                </Pressable>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderBottomColor: 'whitesmoke',
        padding: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15
    },
});