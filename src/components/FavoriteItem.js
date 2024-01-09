import { FontAwesome, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
export default function FavoriteItem({ storeName, imageURL, rating, distance, deliveryTime }) {
    const [isClose, setIsClose] = useState(false);
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
                        <Text style={[styles.infoText, { paddingRight: 6 }]}><Ionicons
                            style={{fontSize: 14}}
                            name="star"
                            color={"orange"}
                        ></Ionicons>{rating} 4.7</Text>
                        <Text style={[styles.infoText, { borderLeftWidth: 1, borderRightWidth: 1, paddingHorizontal: 6 }]}>{distance} 3.5 km</Text>
                        <Text style={[styles.infoText, { paddingLeft: 6 }]}>{deliveryTime} 22 phút</Text>
                    </View>

                </View>
            </View>
            <View style={styles.heartContainer}>
                <FontAwesome name={'heart'} size={18} color={'#EF4C2D'} />
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