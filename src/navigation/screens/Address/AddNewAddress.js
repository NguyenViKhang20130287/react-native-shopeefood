import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

export default function AddNewAddress({ route, navigation }) {
    const source = route.params.source;
    console.log(source);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);

    const checkSaveButton = () => {
        setSaveButtonEnabled(input2 !== '' && input3 !== '' && input4 !== '' && input5 !== '');
    };

    // Sử dụng useEffect để theo dõi sự thay đổi của input1, input2, input3, input4
    useEffect(() => {
        checkSaveButton();
    }, [input2, input3, input4, input5]);

    const handleAddAddress = async () => {
        try {
            const user_id = await AsyncStorage.getItem('user_id');
            if (user_id) {
                console.log(user_id);
                const requestData = {
                    user: {
                        id: user_id
                    },
                    building_flnum: input1,
                    hnum_sname: input2,
                    ward_commune: input3,
                    county_district: input4,
                    province_city: input5
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
                <View style={{ backgroundColor: 'white', marginTop: 3 }}>
                    <View style={styles.action}>
                        <Text>Đăng Khoa</Text>
                    </View>
                    <View style={styles.action}>
                        <Text>08397179739</Text>
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
        padding: 15
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15
    },
});