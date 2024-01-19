import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Image, ScrollView, Pressable } from 'react-native';
import styles from './Product.style'

import IconEntypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import ProductTopTab from './ProductTabCate';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import BottomCartView from '../../../components/BottomCartView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductsScreen = ({ navigation }) => {
    const [isLike, setIsLike] = useState(false);
    // const [selectedCategory, setSelectedCategory] = useState(null);
    const route = useRoute()
    const id = route.params?.id
    const [store, setStore] = useState({})
    const [user, setUser] = useState({})
    const [storeCategory, setStoreCategory] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [quantity, setQuantity] = useState('');
    const [updateData, setUpdatData] = useState(null);
    const [productOfStoreCategory, setProductOfStoreCategory] = useState([])
    const [favoriteStore, setFavoriteStore] = useState([])

    const CurrencyFormatter = ({ style, amount }) => {
        const formattedAmount = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(amount);

        return <Text style={style}>{formattedAmount}</Text>;
    };
    const getUser = async () => {
        const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
        setUser(userStorage);
    }

    useEffect(() => {
        getUser();
    }, []);

    const addCartItem = async (cartItem) => {
        try {
            const requestData = cartItem;
            const response = await axios.post(`http://localhost:8080/api/cart/add`,
                requestData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Sản phẩm đã được thêm:', response.data);
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm:', error);
        }
    }
    const updateCartItem = async (cartItem) => {
        try {
            const requestData = cartItem;
            const response = await axios.put(`http://localhost:8080/api/cart/update`,
                requestData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Số lượng đã được cập nhật:', response.data);
        } catch (error) {
            console.error('Lỗi khi cập nhật số lượng:', error);
        }
    }
    const removeCartItem = async (cart_item_id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/cart/remove?item_id=${cart_item_id}`);
            console.log('Sản phẩm đã được xóa khỏi giỏ hàng:', response.data);

        } catch (error) {
            console.error('Lỗi khi xóa sản phẩm trong giỏ hàng:', error);
        }
    }
    const storeAPI = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/stores/${id}`)
            setStore(response.data)
            const responseStoreCategory = await axios.get(`http://localhost:8080/api/stores/${id}/categories`)
            setStoreCategory(responseStoreCategory.data)
        } catch (error) {
            console.log('Error:', error)
        }
    }
    useEffect(() => {
        storeAPI()
    }, [store.id])
    useEffect(() => {
        setIsLike(favoriteStore.some((favorite) => favorite.id === id));
    }, [favoriteStore.length > 0, store])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
                if (userStorage) {
                    const user_id = userStorage.id;
                    console.log("User", user_id);
                    const response = await axios.get(`http://localhost:8080/api/user/${user_id}/favorite-stores`);
                    const data = response.data;
                    setFavoriteStore(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [store]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
                if (userStorage) {
                    const user_id = userStorage.id;
                    const response = await axios.get(`http://localhost:8080/api/cart/cart_items?user_id=${user_id}&&store_id=${id}`);
                    const data = response.data;
                    setCartItems(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [updateData, route.params?.refresh]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/products/popular?store_id=${id}`);
                const data = response.data;
                setPopularProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    const handleToggleFavorite = async (store_id) => {
        const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
        const user_id = userStorage.id;
        if (!isLike) {
            try {
                if (user_id) {
                    const requestData = {
                        store: {
                            id: store_id
                        },
                        user: {
                            id: user_id
                        },
                    };
                    const response = await axios.post(`http://localhost:8080/api/user/favorite-stores/add`,
                        requestData,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        }
                    );
                    setModalVisible(true);
                    setTimeout(() => {
                        setModalVisible(false);
                    }, 1000);
                    console.log('Cửa hàng đã được thêm vào yêu thích:', response.data);
                    setIsLike(true);

                }
            } catch (error) {
                console.error('Lỗi khi thêm của hàng yêu thích:', error);
            }
        } else {
            try {
                if (user_id) {
                    const response = await axios.delete(`http://localhost:8080/api/user/favorite-stores/remove?store_id=${store_id}&user_id=${user_id}`);
                    console.log('Cửa hàng đã được xóa khỏi yêu thích:', response.data);
                    setIsLike(false);
                }

            } catch (error) {
                console.error('Lỗi khi xóa cửa hàng yêu thích:', error);
            }
        }
    }

    const handleIncrement = async (item) => {
        const updatedCartItems = [...cartItems];
        const index = updatedCartItems.findIndex((cartItem) => cartItem.product.id === item.id);

        if (index != -1) {
            const updatedCartItem = {
                ...updatedCartItems[index],
                quantity: (updatedCartItems[index].quantity || 0) + 1,
            };
            updatedCartItems[index] = updatedCartItem;
            const cartItem = {
                id: updatedCartItem.id,
                product: {
                    id: updatedCartItem.product.id
                },
                user: {
                    id: user.id
                },
                quantity: updatedCartItem.quantity
            }

            await updateCartItem(cartItem);
            setUpdatData(new Date().getTime())

        } else {
            const newCartItem = {
                product: {
                    id: item.id
                },
                user: {
                    id: user.id
                }
            };

            await addCartItem(newCartItem);
            setUpdatData(new Date().getTime())
        }
    };
    const handleDecrement = async (cartItem) => {
        const updatedCartItems = [...cartItems];
        const index = updatedCartItems.findIndex((item) => item.id === cartItem.id);

        if (index !== -1) {
            // Giảm số lượng xuống 1
            const updatedCartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
            updatedCartItems[index] = updatedCartItem;

            const item = {
                id: updatedCartItem.id,
                product: {
                    id: updatedCartItem.product.id
                },
                user: {
                    id: user.id
                },
                quantity: updatedCartItem.quantity
            }
            if (updatedCartItem.quantity === 0) {
                await removeCartItem(updatedCartItem.id);
                setUpdatData(new Date().getTime())
            } else {
                await updateCartItem(item);
                setUpdatData(new Date().getTime())
            }
        }
    };
    return (
        <View style={{ position: 'relative' }}>
            <ScrollView style={styles.container}>
                {/* Top */}
                <View style={styles.shopContainer}>
                    <ScrollView horizontal style={styles.sImageContainer}
                        stickyHeaderIndices={[0]}
                        showsVerticalScrollIndicator={false}>
                        <Image style={styles.shopImage} source={{ uri: store.image }} />
                    </ScrollView>
                    <View style={styles.mainSContainer}>
                        <View style={styles.sTopContent}>
                            <Text style={styles.shopName}><Ionicons
                                size={20}
                                name="shield-checkmark"
                                color={"orange"}
                            ></Ionicons>{' '}{store.name}</Text>
                        </View>
                        <View style={styles.sBotContent}>
                            <View style={{ flexDirection: 'row', flex: 1, marginRight: 20 }}>
                                <FontAwesome name='map-marker' size={22} color='orangered' />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 15, }}>{store.address}</Text>
                                </View>
                            </View>
                            <Pressable onPress={() => handleToggleFavorite(id)}><FontAwesome name={isLike ? "heart" : "heart-o"} size={22} color={isLike ? '#EF4C2D' : '#757575'} /></Pressable>
                        </View>
                    </View>
                    {/* popular products */}
                    <View horizontal style={styles.pProdsContainer}>
                        <View><Text style={styles.textTitle}>Món phổ biến</Text></View>
                        <ScrollView horizontal style={styles.pProds}>
                            {popularProducts && popularProducts.map((item) => (<Pressable key={item.id} style={styles.pProdContent}>
                                <View style={styles.pProdImage}>
                                    <Image style={styles.pProdPic} source={{ uri: item.image }} />
                                    <View style={styles.soldCountContainer}>
                                        <Text style={styles.soldCountText}>40 đã bán</Text>
                                    </View>
                                </View>
                                <View style={styles.pProdTextCont}>
                                    <Text style={styles.pProdName} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            {item.old_price > 0 ? (<CurrencyFormatter style={styles.oldPrice} amount={item.old_price} />) : null}
                                            <CurrencyFormatter style={styles.pProdPrice} amount={item.current_price} />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            {cartItems.map((cartItem) => (<>{cartItem.product.id == item.id && cartItem.quantity > 0 ? (<>
                                                <Pressable key={cartItem.id} onPress={() => handleDecrement(cartItem)}><FontAwesome name="minus-square-o" size={26} color={'#F95030'}></FontAwesome></Pressable>
                                                <TextInput style={{ paddingHorizontal: 6, textAlign: "center" }}
                                                    keyboardType="numeric"
                                                    value={cartItem.quantity.toString()}
                                                /></>) : null}</>))}
                                            <Pressable onPress={() => handleIncrement(item)}><FontAwesome name="plus-square" size={26} color={'#F95030'}></FontAwesome></Pressable>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>))}

                        </ScrollView>
                    </View>
                </View>
                <View style={styles.horizontalDivider1} />
                {/* <ProductTopTab/> */}
                <View style={{ marginTop: 15 }}>
                    {storeCategory ? <ProductTopTab categories={storeCategory} items={cartItems} increment={handleIncrement} descrement={handleDecrement} /> : null}
                </View>

            </ScrollView>
            {cartItems.length > 0 ? (< BottomCartView store_id={id} data={cartItems} handleInc={handleIncrement} handleDesc={handleDecrement} />) : null}
            {isModalVisible && (<Modal isVisible={isModalVisible} transparent animationIn="fadeIn" animationOut="fadeOut">
                <View style={styles.modalLikeContainer}>
                    <Text style={styles.modalText}>Đã thích!</Text>
                </View>
            </Modal>)}
        </View>
    );
}
export default ProductsScreen;
