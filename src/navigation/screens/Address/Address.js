import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';

export default function Address({ route, navigation }) {
    const [addressList, setAddressList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user_id = await AsyncStorage.getItem('user_id');
                if (user_id) {
                    console.log('User id: ', user_id);
                    const response = await axios.get(`http://localhost:8080/api/addresses/user/${user_id}`);
                    const data = response.data;
                    setAddressList(data);
                    console.log(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [route.params?.refresh]);
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 70
            }}>
                <View>
                    <Text style={{ color: '#707070', padding: 15 }}>Địa chỉ đã lưu</Text>
                </View>
                {addressList && addressList.map((item, index) => (<View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10 }} key={index}>
                    <View style={styles.action}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='home' size={18} color='black' />
                        </View>
                        <View style={{ flexDirection: 'column', width: 315 }}>
                            <Text style={{ fontWeight: 'bold' }}>Nhà</Text>
                            <Text style={{ color: '#999999', marginVertical: 15, paddingRight: 20, textAlign: 'justify' }}>{item.building_flnum ? `[${item.building_flnum}] ` : ""}{item.hnum_sname}, {item.ward_commune}, {item.county_district}, {item.province_city}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#595959', marginRight: 10 }}>{item.user.full_name}</Text>
                                <Text style={{ color: '#595959' }}>{item.user.phone_number}</Text>
                            </View>
                        </View>
                        <View style={{ width: 100 }}>
                            <Pressable onPress={() => navigation.navigate('UpdateAddress', { addressInfo: item })}><Text style={{ color: '#1084EB' }}>Sửa</Text></Pressable>
                        </View>
                    </View>
                </View>))}
            </ScrollView>
            <View style={{
                backgroundColor: 'white', padding: 10, position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0
            }}>
                <Pressable onPress={() => navigation.navigate('AddAddress')} style={{ backgroundColor: '#ED4D2D', padding: 13, alignItems: 'center', borderRadius: 3 }}><Text style={{ color: 'white', fontSize: 15 }}>Thêm địa chỉ mới</Text></Pressable>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1.5,
        backgroundColor: 'white',
        borderBottomColor: 'whitesmoke',
        paddingBottom: 15
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15
    },
});
