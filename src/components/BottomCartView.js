import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, ScrollView, Image, TextInput } from 'react-native';

const BottomCartView = ({ store_id, data, handleInc, handleDesc }) => {
    const navigation = useNavigation()
    const [cartVisible, setCartVisible] = useState(false);
    // const [cartData, setCartData] = useState(data)

    const handleCartPress = () => {
        setCartVisible(!cartVisible);
    };

    const CurrencyFormatter = ({ style, amount }) => {
        const formattedAmount = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount);

        return <Text style={style}>{formattedAmount}</Text>;
    };
    const calculateTotal = () => {
        return data.reduce((total, item) => total + item.product.current_price * item.quantity, 0);
    };
    const calculateTotalQuantity = () => {
        return data.reduce((total, item) => total + item.quantity, 0);
    };
    const subTotal = calculateTotal();
    const totalQuantity = calculateTotalQuantity();

    const handleDeleteAll = async (store_id) => {
        try {
            const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
            if (userStorage) {
                const user_id = userStorage.id;
                const response = await axios.delete(`http://localhost:8080/api/cart/remove_all?user_id=${user_id}&&store_id=${store_id}`);
                console.log('Đã xóa tất cả các sản phẩm trong giỏ hàng:', response.data);
                setCartVisible(false);
                // setCartData([]);
                navigation.navigate('Store', { id: store_id, refresh: new Date().getTime() })
            }

        } catch (error) {
            console.error('Lỗi khi xóa tất cả:', error);
        }
    }
    return (
        <>
            {cartVisible ? (<TouchableOpacity
                style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}
                activeOpacity={1}
                onPress={() => setCartVisible(false)}
            >
            </TouchableOpacity>) : null}
            {cartVisible ? (<View style={{ backgroundColor: 'white', zIndex: 4, position: 'absolute', bottom: 0, top: 150, right: 0, left: 0, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "white", borderBottomWidth: 0.55, borderBottomColor: '#E8E8E8', padding: 10 }}>
                    <Pressable onPress={() => handleDeleteAll(store_id)}><Text style={{ color: '#ED4D2D', fontSize: 13 }}>Xóa tất cả</Text></Pressable>
                    <Text style={{ textAlign: 'center', fontWeight: "500", fontSize: 17 }}>Giỏ hàng</Text>
                    <Ionicons onPress={() => setCartVisible(false)} name='close' color={'#757575'} size={30} />
                </View>
                <ScrollView style={{ paddingHorizontal: 13 }}>
                    {data && data.map((item) => (<View key={item.id} style={styles.productContent}>
                        <Image style={styles.productImage} source={{ uri: item.product.image }} />
                        <View style={styles.producContentContainer}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.producName}>{item.product.title}</Text>
                            <View style={{ paddingVertical: 10 }}></View>
                            <View style={styles.contentWrapper}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    {item.product.old_price > 0 ? (<CurrencyFormatter style={styles.oldPrice} amount={item.product.old_price} />) : null}
                                    <CurrencyFormatter style={styles.pProdPrice} amount={item.product.current_price} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Pressable onPress={() => handleDesc(item)}><FontAwesome name="minus-square-o" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
                                    <TextInput style={{ paddingHorizontal: 6, textAlign: "center" }}
                                        keyboardType="numeric"
                                        value={item.quantity.toString()}
                                    />
                                    <Pressable onPress={() => handleInc(item.product)}><FontAwesome name="plus-square" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
                                </View>
                            </View>
                        </View>
                    </View>))}
                </ScrollView>
            </View>) : null}
            {data && data.length > 0 ? (<View style={{
                backgroundColor: 'white', position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 5
            }}>

                <View style={{ backgroundColor: "white", zIndex: 5, height: 55, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: "#F7F7F7", borderBottomColor: "#F7F7F7" }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, flex: 1 }}>
                        <Pressable onPress={() => handleCartPress()}>
                            <View style={styles.iconContainer}>
                                <FontAwesome name={"shopping-cart"} size={35} color={'#EF4C2D'} />

                                <View style={styles.badge}>
                                    <Text style={styles.countText}>{totalQuantity}</Text>
                                </View>

                            </View>
                        </Pressable>
                        <CurrencyFormatter style={styles.pProdPrice} amount={subTotal} />
                    </View>
                    <View style={{ width: 150, backgroundColor: "#ED4D2D", alignItems: 'center', justifyContent: 'center' }}>
                        <Pressable onPress={() => navigation.navigate('OrderConfirmation', { store_id: store_id })}>
                            <Text style={{ fontSize: 16, textAlign: 'center', color: "white" }}>Giao hàng</Text>
                        </Pressable>
                    </View>

                </View>

            </View>) : null}

        </>
    );
};

const styles = StyleSheet.create({
    pProdPrice: {
        fontSize: 15,
        fontWeight: '400',
        color: "#ED4D2D"
    },
    productContent: {
        paddingVertical: 13,
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 0.55,
        borderBottomColor: '#E8E8E8'
    },
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    imageContainer: {
    },
    productImage: {
        width: 50,
        height: 50,
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        fontSize: 12,
        color: "#737373"
    },
    producContentContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: 15,
        flex: 1,
    },
    iconContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -15,
        backgroundColor: '#EF4C2D',
        borderRadius: 10,
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    countText: {
        color: 'white',
        alignSelf: 'center',
        textAlignVertical: 'center',
        fontSize: 11,
    },
});

export default BottomCartView;