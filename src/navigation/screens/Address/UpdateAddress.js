import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export default function UpdateAddress({ route, navigation }) {
    const addressInfo = route.params.addressInfo;
    const source = route.params.source;
    console.log(addressInfo);
    console.log(source);
    const [input1, setInput1] = useState(addressInfo.building_flnum);
    const [input2, setInput2] = useState(addressInfo.hnum_sname);
    const [input3, setInput3] = useState(addressInfo.ward_commune);
    const [input4, setInput4] = useState(addressInfo.county_district);
    const [input5, setInput5] = useState(addressInfo.province_city);
    const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);

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

    const checkSaveButton = () => {
        setSaveButtonEnabled(input2 !== '' && input3 !== '' && input4 !== '' && input5 !== '');
    };

    // Sử dụng useEffect để theo dõi sự thay đổi của input2, input3, input4, input5
    useEffect(() => {
        checkSaveButton();
    }, [input2, input3, input4, input5]);



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
                    ward_commune: input3,
                    county_district: input4,
                    province_city: input5
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
                <View style={{ backgroundColor: 'white', marginTop: 3 }}>
                    <View style={styles.action}>
                        <Text>{addressInfo.user.full_name}</Text>
                    </View>
                    <View style={styles.action}>
                        <Text>{addressInfo.user.phone_number}</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', marginTop: 10 }}>
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
                            placeholder='Xã, Phường'
                            placeholderTextColor='#BCBCBC'
                            value={input3}
                            onChangeText={(text) => {
                                setInput3(text);
                                checkSaveButton();
                            }} />
                    </View>
                    <View style={styles.action}>
                        <TextInput
                            placeholder='Quận, Huyện'
                            placeholderTextColor='#BCBCBC'
                            value={input4}
                            onChangeText={(text) => {
                                setInput4(text);
                                checkSaveButton();
                            }} />
                    </View>
                    <View style={styles.action}>
                        <TextInput
                            placeholder='Tỉnh, Thành phố'
                            placeholderTextColor='#BCBCBC'
                            value={input5}
                            onChangeText={(text) => {
                                setInput5(text);
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
        padding: 15
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
