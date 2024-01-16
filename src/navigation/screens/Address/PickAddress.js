import * as React from 'react';
import { Pressable, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ScrollView } from 'react-native';

export default function PickAddress({ route, navigation }) {
    const source = route.params.source;
    console.log(source);
    const [defaultAddress, setDefaultAddress] = useState({});
    const [nonDefaultAddress, setNonDefaultAddress] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const pullToRefresh = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false);
        }, 500)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
                if (userStorage) {
                    const user_id = userStorage.id;
                    const response = await axios.get(`http://localhost:8080/api/addresses/user/${user_id}`);
                    const data = response.data;

                    const defaultAddress = data.find(address => address.is_default === 1);
                    setDefaultAddress(defaultAddress);

                    const nonDefaultAddress = data.filter(address => address.is_default === 0);
                    setNonDefaultAddress(nonDefaultAddress);
                } else {
                    setDefaultAddress(null);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [route.params?.refresh, refresh]);
    const handleSetDefaulAddress = async (address_id) => {
        try {
            const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
            if (userStorage) {
                const user_id = userStorage.id;
                const response = await axios.put(`http://localhost:8080/api/addresses/default_update?address_id=${address_id}`);

                const updatedResponse = await axios.get(`http://localhost:8080/api/addresses/user/${user_id}`);
                const updatedData = updatedResponse.data;

                // Cập nhật lại nonDefaultAddress và defaultAddress
                const updatedNonDefaultAddress = updatedData.filter(address => address.is_default === 0);
                setNonDefaultAddress(updatedNonDefaultAddress);

                const updatedDefaultAddress = updatedData.find(address => address.is_default === 1);
                setDefaultAddress(updatedDefaultAddress);
                navigation.navigate(source, { refresh: new Date().getTime() })
            }
        } catch (error) {
            console.error('Error updating address:', error);
        }
    }
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pullToRefresh()} />} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0
            }}>
                {defaultAddress && (<View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10, marginTop: 5 }} key={defaultAddress.id}>
                    <View style={styles.action}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='map-marker' size={18} color='orangered' />
                        </View>
                        <View style={{ flexDirection: 'column', width: 315 }}>
                            <Text style={{ fontWeight: 'bold' }}>Nhà</Text>
                            <Text style={{ color: '#999999', marginVertical: 15, paddingRight: 20, textAlign: 'justify' }}>{defaultAddress.building_flnum ? `[${defaultAddress.building_flnum}] ` : ""}{defaultAddress.hnum_sname}, {defaultAddress.ward_commune}, {defaultAddress.county_district}, {defaultAddress.province_city}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#595959', marginRight: 10 }}>{defaultAddress.user ? defaultAddress.user.full_name : "N/A"}</Text>
                                <Text style={{ color: '#595959' }}>{defaultAddress.user ? defaultAddress.user.phone_number : 'N/A'}</Text>
                            </View>
                        </View>
                        <View style={{ width: 100 }}>
                            <Pressable onPress={() => navigation.navigate('UpdateAddress', { source: 'PickAddress', addressInfo: defaultAddress })}><Text style={{ color: '#1084EB' }}>Sửa</Text></Pressable>
                        </View>
                    </View>
                </View>)}
                <View>
                    <Text style={{ color: '#707070', padding: 15 }}>Địa chỉ đã lưu</Text>
                </View>
                {nonDefaultAddress && nonDefaultAddress.map((item, index) => (<Pressable key={index} onPress={() => handleSetDefaulAddress(item.id)}><View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10 }}>
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
                            <Pressable onPress={() => navigation.navigate('UpdateAddress', { source: 'PickAddress', addressInfo: item })}><Text style={{ color: '#1084EB' }}>Sửa</Text></Pressable>
                        </View>
                    </View>
                </View></Pressable>))}
            </ScrollView>
            <View style={{
                backgroundColor: 'white', padding: 10, position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0
            }}>
                <Pressable onPress={() => navigation.navigate('AddAddress', { source: 'PickAddress' })} style={{ backgroundColor: '#ED4D2D', padding: 13, alignItems: 'center', borderRadius: 3 }}><Text style={{ color: 'white', fontSize: 15 }}>Thêm địa chỉ mới</Text></Pressable>
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
        paddingBottom: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        marginRight: 10,
    },
});