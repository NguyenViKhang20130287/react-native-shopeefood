import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import styles from './MeScreen.style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const Action = ({ icon, title, color, screen }) => {
    return (
        <View style={styles.action}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={styles.iconContainer}>
                    <FontAwesome name={icon} size={22} color={color} />
                </View>
                <Text>{title}</Text>
            </View>
            <Ionicons size={20} name={'chevron-forward'} color={'gray'} />
            
        </View>

    );
}

export default function MeScreen({ navigation }) {
    const isFocused = useIsFocused();
    const [showContent, setShowContent] = useState(false);
    const [userId, setUserId] = useState(null);
    const LogOut = async () => {
        await AsyncStorage.removeItem('user_id');
        setUserId(null) 
        setShowContent(false)
    }
    const getUserId = async () => {
        const storageUserId = await AsyncStorage.getItem('user_id');
        if (storageUserId) {
            setUserId(storageUserId)
            setShowContent(true)
        }
    }
    useEffect(() => {
        getUserId();
    }, [isFocused]);
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <View style={styles.userInfo}>
                        <View style={styles.userIcon}>
                            <Ionicons name='person' style={styles.icon} />
                        </View>
                        {showContent && (<Text style={{ color: 'white', marginLeft: 10, fontSize: 15, fontWeight: 'bold' }}>nndangkhoa</Text>)}
                    </View>
                    {!userId ? 
                    (<View style={styles.loginRegister}>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.text}>Đăng nhập / Đăng ký</Text>
                        </Pressable>
                        {/* <Pressable style={styles.button} onPress={() => navigation.navigate('LoginScreen')}></Pressable> */}
                    </View>) : null}
                    
                </View>
            </View>
            <View>
                <View style={{ borderBottomWidth: 10, borderBottomColor: '#F5F6F8' }}>
                    <Action icon={'gift'} title={'Ví Voucher'} color={'orange'}></Action>
                    <Action icon={'credit-card'} title={'Thanh toán'} color={'orange'}></Action>
                    <Pressable onPress={() => navigation.navigate('Address')}><Action icon={'map-marker'} title={'Địa chỉ'} color={'green'}></Action></Pressable>
                </View>
                <View style={{ borderBottomWidth: 10, borderBottomColor: '#F5F6F8' }}>
                    <Action icon={'envelope-o'} title={'Mời bạn bè'} color={'blue'}></Action>
                    <Action icon={'question-circle-o'} title={'Trung tâm Trợ giúp'} color={'green'}></Action>
                </View>
                <View style={{ borderBottomWidth: 10, borderBottomColor: '#F5F6F8' }}>
                    <Action icon={'file-text-o'} title={'Chính sách quy định'} color={'green'}></Action>
                    <Pressable onPress={() => navigation.navigate("Setting")}><Action icon={'gear'} title={'Cài đặt'} color={'blue'}></Action></Pressable>
                    <Action icon={'info'} title={'Về ShopeeFood'} color={'orange'}></Action>
                </View>
            </View>
            <View style={styles.logoutContainer}>
                {showContent && (<Pressable style={styles.logoutBtn} onPress={LogOut}>
                    <Text style={{ color: 'white', fontSize: 16 }} >Đăng xuất</Text>
                </Pressable>)}
            </View>
        </SafeAreaView>
    );
}