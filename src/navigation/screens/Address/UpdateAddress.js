import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function UpdateAddress({ route, navigation }) {
    const addressInfo = route.params.addressInfo;
    const source = route.params.source;
    const refresh = route.params.refresh;
    const [input1, setInput1] = useState(addressInfo.building_flnum);
    const [input2, setInput2] = useState(addressInfo.hnum_sname);
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
    const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);
    const isFocused = useIsFocused();

    const handleDeletePress = () => {
        Alert.alert(
            'Xác nhận',
            'Bạn muốn xóa địa chỉ này?',
            [
                {
                    text: 'Hủy',
                    style: 'cancel',
                },
                {
                    text: 'Xóa',
                    onPress: () => {
                        handleDeleteAddress(addressInfo.id);
                        navigation.navigate(source, { refresh: new Date().getTime() });
                    },
                    style: 'destructive',
                },
            ],
            {
                cancelable: false,
            }
        );
    };

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
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [refresh]);
    const fetchDistricts = async (selectedProvince) => {

        if (selectedProvince) {
            try {
                const response = await axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince}?depth=2`);
                const data = response.data;
                const items = data.districts.map(district => ({
                    label: district.name,
                    value: district.code
                }));
                setDistricts(items)
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
                const items = data.wards.map(ward => ({
                    label: ward.name,
                    value: ward.code
                }));
                setWards(items)
            } catch (error) {
                console.error('Error fetching data:', error);
            };
        }
    };
    console.log(selectedProvince);

    const fetchProvinceFromDatabase = () => {
        console.log(provinces);
        console.log(addressInfo.province_city);
        const provinceToSelect = provinces.find((province) => province.label === addressInfo.province_city);
        console.log("Trùng trùng trùng", provinceToSelect);
        const provinceValue = provinceToSelect ? provinceToSelect.value : '';
        setSelectedProvince(provinceValue);

    };
    const fetchDistrictFromDatabase = () => {
        fetchDistricts(selectedProvince);

        console.log(districts);
        console.log(addressInfo.county_district);
        const districtToSelect = districts.find((district) => district.label === addressInfo.county_district);
        console.log("Trung district", districtToSelect);
        const districtValue = districtToSelect ? districtToSelect.value : '';
        setSelectedDistrict(districtValue);
        console.log("select", selectedDistrict);

    };

    const fetchWardFromDatabase = () => {
        fetchWards(selectedDistrict);

        const wardToSelect = wards.find((ward) => ward.label === addressInfo.ward_commune);
        const wardValue = wardToSelect ? wardToSelect.value : '';
        setSelectedWard(wardValue);
    }

    useEffect(() => {
        fetchProvinceFromDatabase();
    }, [provinces.length > 0]);

    useEffect(() => {
        fetchDistrictFromDatabase();
    }, [selectedProvince, districts.length > 0]);

    useEffect(() => {
        fetchWardFromDatabase();
    }, [selectedDistrict, wards.length > 0])

    const checkSaveButton = () => {
        setSaveButtonEnabled(input2 !== '');
    };

    // Sử dụng useEffect để theo dõi sự thay đổi của input2, input3, input4, input5
    useEffect(() => {
        checkSaveButton();
    }, [input2]);



    const handleUpdateAddress = async () => {
        try {
            const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
            if (userStorage) {
                const user_id = userStorage.id;
                console.log(user_id);
                const requestData = {
                    id: addressInfo.id,
                    user: {
                        id: user_id
                    },
                    building_flnum: input1,
                    hnum_sname: input2,
                    ward_commune: labelWard ? labelWard : addressInfo.ward_commune,
                    county_district: labelDistrict ? labelDistrict : addressInfo.county_district,
                    province_city: labelProvince ? labelProvince : addressInfo.province_city
                };
                const response = await axios.put(`http://localhost:8080/api/addresses/update`,
                    requestData,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log('Địa chỉ đã được cập nhật:', response.data);
                navigation.navigate(source, { refresh: new Date().getTime() });
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật địa chỉ:', error);
        }
    }
    const handleDeleteAddress = async (address_id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/addresses/remove?address_id=${address_id}`);
            console.log('Địa chỉ đã được xóa:', response.data);

        } catch (error) {
            console.error('Lỗi khi xóa địa chỉ:', error);
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
                        <Text>{addressInfo.user.full_name}</Text>
                    </View>
                    <View style={styles.action}>
                        <Text>{addressInfo.user.phone_number}</Text>
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
                <View style={{ backgroundColor: 'white', marginTop: 10 }}>
                    <Pressable onPress={handleDeletePress} style={{ padding: 13, alignItems: 'center', borderRadius: 3, }}>
                        <Text style={{ fontSize: 16, color: '#ED4D2D' }}>Xóa địa chỉ</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{
                backgroundColor: 'white', padding: 10, position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0
            }}>
                <Pressable backgroundColor={saveButtonEnabled ? '#ED4D2D' : '#E8E8E8'}
                    onPress={handleUpdateAddress} disabled={!saveButtonEnabled}
                    style={{ padding: 13, alignItems: 'center', borderRadius: 3, }}>
                    <Text style={{ fontSize: 16, color: saveButtonEnabled ? 'white' : '#ACACAC' }}>Lưu</Text>
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
    alertTitle: {
        color: 'orange',
        fontWeight: 'bold',
    }
});
