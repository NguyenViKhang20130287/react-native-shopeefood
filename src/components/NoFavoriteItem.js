import * as React from 'react';
import { Image, Text, View } from 'react-native';

export default function NoFavoriteItem() {
    return (
        // <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                <Image
                    source={require('../../assets/food_stall.png')}
                    style={{ width: 120, height: 120, tintColor: 'orange' }}
                />
                <Text style={{ marginTop: 10, fontSize: 17, color: '#595959', fontWeight: 500 }}>Yêu Quán từ món đầu tiên</Text>
                <Text style={{ marginTop: 10, marginHorizontal: 40, textAlign: 'center', color: '#757575' }}>Món ngon hấp dẫn chiếm trọn trái tim! Thả tim ngay để lưu quán bạn yêu nhé.</Text>
            </View>
        // </View>
    );
}