import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

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
                <Text style={styles.actionTitle}>{title}</Text>
            </View>
            <Ionicons size={20} name={'chevron-forward'} color={'gray'} />
        </View>

    );
}

export default function MeScreen({ navigation }) {
    const [showContent, setShowContent] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='orangered'></StatusBar>
            <View>
                <View style={styles.headerContainer}>
                    <View style={styles.userInfo}>
                        <View style={styles.userIcon}>
                            <Ionicons name='person' style={styles.icon} />
                        </View>
                        {showContent && (<Text style={{ color: 'white', marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}>nndangkhoa</Text>)}
                    </View>
                    <View style={styles.loginRegister}>
                        {!showContent && (<Pressable style={styles.button} onPress={() => setShowContent(!showContent)}>
                            <Text style={styles.text}>Đăng nhập / Đăng ký</Text>
                        </Pressable>)}
                    </View>
                </View>
            </View>
            <View>
                <View style={{ borderBottomWidth: 10, borderBottomColor: '#F5F6F8' }}>
                    <Action icon={'gift'} title={'Ví Voucher'} color={'orange'}></Action>
                    <Action icon={'credit-card'} title={'Thanh toán'} color={'orange'}></Action>
                    <Action icon={'map-marker'} title={'Địa chỉ'} color={'green'}></Action>
                </View>
                <View style={{ borderBottomWidth: 10, borderBottomColor: '#F5F6F8' }}>
                    <Action icon={'envelope-o'} title={'Mời bạn bè'} color={'blue'}></Action>
                    <Action icon={'question-circle-o'} title={'Trung tâm Trợ giúp'} color={'green'}></Action>
                </View>
                <View style={{ borderBottomWidth: 10, borderBottomColor: '#F5F6F8' }}>
                    <Action icon={'file-text-o'} title={'Chính sách quy định'} color={'green'}></Action>
                    <Action icon={'gear'} title={'Cài đặt'} color={'blue'}></Action>
                    <Action icon={'info'} title={'Về ShopeeFood'} color={'orange'}></Action>
                </View>
            </View>
            <View style={styles.logoutContainer}>
                {showContent && (<Pressable style={styles.logoutBtn}>
                    <Text style={{ color: 'white', fontSize: 16 }} onPress={() => setShowContent(!showContent)}>Đăng xuất</Text>
                </Pressable>)}
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: 'orangered',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 120,
        padding: 15,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginRegister: {
        height: '50%',
    },
    userIcon: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    button: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 2,
    },
    text: {
        color: 'orangered',
        fontSize: 15,
    },
    icon: {
        fontSize: 40,
        color: 'orangered',
    },
    logoutContainer: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    logoutBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orangered',
        padding: 12,
        borderRadius: 2.
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderBottomColor: 'whitesmoke',
        paddingRight: 8,
    },
    iconContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});