import { FontAwesome, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
export default function FavoriteItem({ id, storeName, imageURL, address }) {
    const [isClose, setIsClose] = useState(false);
    const [isLike, setIsLike] = useState(true);
    const handleToggleFavorite = async (item_id) => {
        const userStorage = JSON.parse(await AsyncStorage.getItem('user'));
        const user_id = userStorage.id;
        if (!isLike) {
            try {
                if (user_id) {
                    const requestData = {
                        store: {
                            id: item_id
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
                    console.log('Cửa hàng đã được thêm vào yêu thích:', response.data);
                    setIsLike(true);
                }
            } catch (error) {
                console.error('Lỗi khi thêm của hàng yêu thích:', error);
            }
        } else {
            try {
                if (user_id) {
                    const response = await axios.delete(`http://localhost:8080/api/user/favorite-stores/remove?store_id=${item_id}&user_id=${user_id}`);
                    console.log('Cửa hàng đã được xóa khỏi yêu thích:', response.data);
                    setIsLike(false);
                }

            } catch (error) {
                console.error('Lỗi khi xóa cửa hàng yêu thích:', error);
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: imageURL }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    {isClose && (<View>
                        <Text style={{ fontSize: 12 }}>
                            <Text style={{ color: 'red' }}>Đóng cửa. </Text>
                            <Text style={{ color: '#757575' }}>Hẹn giao vào 10:00 Hôm nay</Text>
                        </Text>
                    </View>)}
                    <Text style={styles.foodName}><Ionicons
                        style={{ fontSize: 16 }}
                        name="shield-checkmark"
                        color={"orange"}
                    ></Ionicons>{" "}{storeName}</Text>
                    <View style={styles.infoContainer}>
                        <View>
                            <Text numberOfLines={1} style={{ color: "#989898" }}>{address}</Text>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.heartContainer}>
                <Pressable onPress={() => handleToggleFavorite(id)}><FontAwesome name={isLike ? "heart" : "heart-o"} size={18} color={isLike ? '#EF4C2D' : '#757575'} /></Pressable>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    topContainer: {
        flexDirection: 'row',

    },
    image: {
        width: 100,
        height: 100,
        aspectRatio: 1,
    },
    detailsContainer: {
        flex: 2,
        marginLeft: 10
    },
    foodName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    infoContainer: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    infoText: {
        fontSize: 13,
        color: '#757575',
        borderColor: '#E8E8E8',
    },
    heartContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
        borderBottomColor: '#E8E8E8'
    }
});