import * as React from 'react';
import { StyleSheet, TabView, TouchableOpacity, View, useWindowDimensions, Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { useState } from 'react';
import { Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './OrderScreen.style';


export default function ContentOrder({ navigation }) {
 

    return (
        <View style={styles.container}>

            {/* <View style={styles.menubar}>
                <View style={styles.element}>
                    <Text style={{ padding: 10 }}></Text>
                </View>
                <View style={styles.element}>
                    <Text style={{ padding: 10 }}></Text>
                </View>
                <View style={styles.element}>
                    <Text style={{ padding: 10 }}></Text>
                </View>
                <View style={styles.element}>
                    <Text style={{ padding: 10 }}></Text>
                </View>
            </View> */}
            <View style={styles.blank}>
                <View style={styles.blank_image}>
                    <Image></Image>
                </View>
                <View style={styles.blank_heading}>
                    <Text>Quên chưa đặt món rồi nè bạn ơi?</Text>
                </View>
                <View style={styles.blank_info}>
                    <Text>Bạn sẽ nhìn thấy các món ăn đang được chuẩn bị hoặc giao đi tại đây để kiểm tra đơn hàng nhanh hơn!</Text>
                </View>
            </View>
            <View style={styles.suggestion}>
                <View style={styles.title_top}>
                    <Text>Có thể bạn cũng thích</Text>
                </View>
                <View style={styles.food}>
                    <View style={styles.image}>
                    <Image style={styles.foods_image}
                                    source={require('../../../assets/product/prod_1.jpeg')} />
                    </View>
                    <View style={styles.details}>
                        <View style={styles.food_name}>
                            <Text>Cơm tấm</Text>
                        </View >
                        <View style={styles.info}>
                            <View style={styles.rating}>
                                <Text style={{ padding: 6 }}>4.6</Text>
                            </View>
                            <View style={styles.distance}>
                                <Text style={{ padding: 6 }}>0.2km</Text>
                            </View>
                            <View style={styles.times}>
                                <Text style={{ padding: 6 }}>15 phút</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    );
}