import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
export default function FavoriteItem({ foodName, imageURL, rating, distance, deliveryTime, hashtags }) {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {/* Hình vuông chứa hình ảnh */}
                <Image
                    source={{ uri: imageURL }}
                    style={styles.image}
                />
            </View>
            <View style={styles.detailsContainer}>
                {/* Tên món ăn */}
                <Text style={styles.foodName}>{foodName}</Text>
                <View style={styles.infoContainer}>
                    {/* Dòng thông tin: số sao đánh giá, khoảng cách, thời gian giao hàng ước lượng */}
                    <Text style={styles.infoText}>⭐ {rating} 4.7</Text>
                    <Text style={styles.infoText}>{distance} 3.5 km</Text>
                    <Text style={styles.infoText}>{deliveryTime} 22 phút</Text>
                </View>
                {/* Dòng hashtags */}
                <View style={styles.hashtagsContainer}>
                    {/* {hashtags.map((tag, index) => ( */}
                    <Text style={styles.hashtag}>#{hashtags}</Text>
                    {/* ))} */}
                </View>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 1, // Hình vuông
    },
    detailsContainer: {
        flex: 2,
        padding: 10,
    },
    foodName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    infoContainer: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    infoText: {
        fontSize: 14,
        // marginBottom: 3,
        borderRightWidth: 1,
        // borderRightColor: '#F0F0F0',
        paddingHorizontal: 6
    },
    hashtagsContainer: {
        flexDirection: 'row',
    },
    hashtag: {
        marginRight: 5,
        color: 'blue',
    },
});