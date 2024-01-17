import * as React from 'react';
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function OrderConfirmation({ route, navigation }) {
    const [defaultAddress, setDefaultAddress] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const [firstItem, setFirstItem] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const store_id = 2;
    const CurrencyFormatter = ({ style, amount }) => {
        const formattedAmount = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount);

        return <Text style={style}>{formattedAmount}</Text>;
    };
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.product.current_price * item.quantity, 0);
    };
    const subTotal = calculateTotal();
    const deliveryFee = 21000;
    const totalAmount = subTotal + deliveryFee;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
                if (userStorage) {
                    const user_id = userStorage.id;
                    const response = await axios.get(`http://localhost:8080/api/addresses/default/user/${user_id}`);
                    const data = response.data;
                    setDefaultAddress(data);
                    // console.log(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [route.params?.refresh]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
                if (userStorage) {
                    const user_id = userStorage.id;
                    const response = await axios.get(`http://localhost:8080/api/cart/cart_items?user_id=${user_id}&&store_id=${store_id}`);
                    const data = response.data;
                    setCartItems(data);
                    setFirstItem(data[0])
                    console.log(data[0]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    const handleAddOrder = async () => {
        try {
            if (defaultAddress) {
                const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
                if (userStorage) {
                    const user_id = userStorage.id;
                    console.log(user_id);
                    const requestData = {
                        user: {
                            id: user_id
                        },
                        shipping_address: {
                            id: defaultAddress.id
                        },
                        store: {
                            id: store_id
                        },
                        status: {
                            id: 1
                        },
                        order_total: subTotal,
                        shipping_cost: deliveryFee
                    };
                    const response = await axios.post(`http://localhost:8080/api/user/${user_id}/orders/add`,
                        requestData,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }
                    );
                    console.log('Đơn hàng đã đặt thành công', response.data);
                    navigation.navigate('Home', { refresh: new Date().getTime() });
                }
            } else {
                setModalVisible(true);
            }
        } catch (error) {
            console.error('Lỗi khi đặt hàng:', error);
        }
    }
    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView style={{ marginBottom: 65 }}>
                {defaultAddress ? (<View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10, marginBottom: 10 }}>
                    <View style={styles.action}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='map-marker' size={18} color='orangered' />
                        </View>
                        <View style={{ flexDirection: 'column', width: 315 }}>
                            <Text>Địa chỉ giao hàng</Text>
                            <Text style={{ color: '#999999', marginVertical: 15, paddingRight: 20, textAlign: 'justify' }}>{defaultAddress.building_flnum ? `[${defaultAddress.building_flnum}] ` : ""}{defaultAddress.hnum_sname}, {defaultAddress.ward_commune}, {defaultAddress.county_district}, {defaultAddress.province_city}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#595959', marginRight: 10 }}>{defaultAddress.user ? defaultAddress.user.full_name : "N/A"}</Text>
                                <Text style={{ color: '#595959' }}>{defaultAddress.user ? defaultAddress.user.phone_number : 'N/A'}</Text>
                            </View>
                        </View>
                        <View style={{ width: 100, justifyContent: 'center' }}>
                            <Pressable onPress={() => navigation.navigate('PickAddress', { source: 'OrderConfirmation' })}><Ionicons size={20} name={'chevron-forward'} color={'gray'} /></Pressable>
                        </View>
                    </View>
                </View>) : (
                    <View style={{ backgroundColor: 'white', padding: 10, marginVertical: 10 }}>
                        <Pressable onPress={() => navigation.navigate('PickAddress', { source: 'OrderConfirmation' })}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ fontSize: 15 }}>Vui lòng chọn địa chỉ</Text>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <Ionicons size={20} name={'chevron-forward'} color={'gray'} />
                                </View>
                            </View>
                        </Pressable>
                    </View>
                )}
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10, marginBottom: 10 }}>
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={{ fontWeight: 'bold' }}>{firstItem ? firstItem.product.storeCategory.store.name : ""}</Text>
                    </View>
                    {cartItems && cartItems.map((item, index) => (<View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10 }}>
                        <Image
                            source={{ uri: item.product.image }}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <View style={{ flexDirection: 'row', width: 250 }}>
                            <Text style={{ fontWeight: 'bold' }}>{item.quantity} x </Text>
                            <Text style={{ flex: 1 }}>{item.product.title}</Text>
                        </View>
                        <CurrencyFormatter style={{ fontWeight: 'bold' }} amount={item.product.current_price} />
                    </View>))}
                </View>
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10, marginBottom: 10 }}>
                    <View style={styles.moneyContainer}>
                        <Text style={styles.textMoney}>Tổng cộng ({cartItems.length} món)</Text>
                        <CurrencyFormatter style={styles.textMoney} amount={subTotal} />
                    </View>
                    <View style={styles.moneyContainer}>
                        <Text style={styles.textMoney}>Phí giao hàng (4.3 km)</Text>
                        <CurrencyFormatter style={styles.textMoney} amount={deliveryFee} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, paddingBottom: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Tổng cộng</Text>
                        <CurrencyFormatter style={{ color: 'orangered', fontSize: 17, fontWeight: 'bold' }} amount={totalAmount} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white', marginBottom: 10 }}>
                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row', paddingVertical: 20 }}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='file-text-o' size={18} color='orange' />
                        </View>
                        <View style={{ marginRight: 10 }}>
                            <Text>Bằng việc nhấn "Đặt đơn", bạn đồng ý tuân theo Điều khoản dịch vụ và Quy chế của chúng tôi.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{
                backgroundColor: 'white', padding: 10, position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0
            }}>
                <Pressable onPress={() => handleAddOrder()} style={{ backgroundColor: '#ED4D2D', padding: 13, alignItems: 'center', borderRadius: 3 }}><Text style={{ color: 'white', fontSize: 15 }}>Đặt đơn</Text></Pressable>
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    onRequestClose={closeModal}
                >
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', borderRadius: 12 }}>
                            <View style={{ paddingVertical: 25, paddingHorizontal: 40, borderBottomWidth: 0.5, borderBottomColor: '#E8E8E8' }}>
                                <Text>Bạn chưa chọn địa chỉ!</Text>
                            </View>
                            <View style={{ paddingVertical: 10 }}>
                                <Text onPress={closeModal} style={{ color: '#007ACC', textAlign: 'center', fontSize: 15 }}>Đóng</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View >
        </View >

    );
}
const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: 10
    },
    iconContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingRight: 15
    },
    moneyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingVertical: 10,
        borderBottomColor: '#ECECEE'
    },
    textMoney: {
        fontSize: 12,
        color: '#666666'
    }
});