import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, ScrollView, Image, TextInput } from 'react-native';

const BottomCartView = ({ data }) => {
    const [cartVisible, setCartVisible] = useState(false);

    const handleCartPress = () => {
        setCartVisible(!cartVisible)
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
                    <Text style={{ color: '#ED4D2D', fontSize: 12 }}>Xóa tất cả</Text>
                    <Text style={{ textAlign: 'center', fontWeight: "500", fontSize: 17 }}>Giỏ hàng</Text>
                    <Ionicons onPress={() => setCartVisible(false)} name='close' color={'#757575'} size={30} />
                </View>
                <ScrollView style={{ padding: 13 }}>
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
                                    <Pressable><FontAwesome name="minus-square-o" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
                                    <TextInput keyboardType="numeric" style={{ paddingHorizontal: 6, textAlign: "center" }}>{item.quantity}</TextInput>
                                    <Pressable><FontAwesome name="plus-square" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
                                </View>
                            </View>
                        </View>
                    </View>))}
                </ScrollView>
            </View>) : null}
            <View style={{
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
                        <Pressable>
                            <Text style={{ fontSize: 16, textAlign: 'center', color: "white" }}>Giao hàng</Text>
                        </Pressable>
                    </View>

                </View>

            </View>

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
        paddingBottom: 10,
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
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    countText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 11
    },
});

export default BottomCartView;