import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
export default function FavoriteItem({ foodName, imageURL, rating, distance, deliveryTime, hashtags }) {
    const [isClose, setIsClose] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>
                    {/* Hình vuông chứa hình ảnh */}
                    <Image
                        source={imageURL}
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
                    {/* Tên món ăn */}
                    <Text style={styles.foodName}>{foodName}</Text>
                    <View style={styles.infoContainer}>
                        {/* Dòng thông tin: số sao đánh giá, khoảng cách, thời gian giao hàng ước lượng */}
                        <Text style={[styles.infoText, { paddingRight: 6 }]}>⭐{rating} 4.7</Text>
                        <Text style={[styles.infoText, { borderLeftWidth: 1, borderRightWidth: 1, paddingHorizontal: 6 }]}>{distance} 3.5 km</Text>
                        <Text style={[styles.infoText, { paddingLeft: 6 }]}>{deliveryTime} 22 phút</Text>
                    </View>
                    {/* Dòng hashtags */}
                    <View style={styles.hashtagsContainer}>
                        {hashtags.map((tag, index) => (
                            <Text key={index} style={styles.hashtag}>#{tag}</Text>
                        ))}
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
        aspectRatio: 1, // Hình vuông
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
        fontSize: 12,
        color: '#757575',
        borderColor: '#E8E8E8',
    },
    hashtagsContainer: {
        flexDirection: 'row',
    },
    hashtag: {
        marginRight: 5,
        color: 'orangered',
        fontSize: 10,
        borderWidth: 0.5,
        borderColor: 'orangered',
        padding: 3,
        borderRadius: 3
    },
    heartContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
        borderBottomColor: '#E8E8E8'
    }
});