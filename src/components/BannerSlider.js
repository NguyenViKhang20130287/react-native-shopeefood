import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const BannerSlider = () => {
    const images = [
        'https://i.pinimg.com/originals/49/1e/e9/491ee929be5ce1c3eb05ff30ec6ed247.jpg',
        'https://i.pinimg.com/originals/6c/62/54/6c6254f6a76076df97a104b8027bdadb.jpg',
        'https://i.pinimg.com/736x/49/1e/e9/491ee929be5ce1c3eb05ff30ec6ed247.jpg',
        'https://img.gotit.vn/compress/brand/images/1672389085_WUTYF.png'
    ];

    return (
        <View style={styles.container}>
            <Swiper
                autoplay={true}
                style={styles.swiper}
                activeDotStyle={styles.activeDot}
                removeClippedSubviews={false}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
    },
    swiper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    activeDot: {
        backgroundColor: 'white',
    },
});

export default BannerSlider;