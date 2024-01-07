import * as React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function OrderConfirmation({ navigation }) {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView style={{ marginBottom: 65 }}>
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10, marginBottom: 10 }}>
                    <View style={styles.action}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='map-marker' size={18} color='orangered' />
                        </View>
                        <View style={{ flexDirection: 'column', width: 315 }}>
                            <Text>Địa chỉ giao hàng</Text>
                            <Text style={{ color: '#999999', marginVertical: 15, paddingRight: 20, textAlign: 'justify' }}>[Rào đối diện cà phê Giangnam, KTX Đại Học Quốc Gia TPHCM - Khu B] Tô Vĩnh Diện, P.Đông Hòa, Dĩ An, Bình Dương</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#595959', marginRight: 10 }}>Đăng Khoa</Text>
                                <Text style={{ color: '#595959' }}>08397179739</Text>
                            </View>
                        </View>
                        <View style={{ width: 100, justifyContent: 'center' }}>
                            <Pressable onPress={() => navigation.navigate('UpdateAddress')}><Ionicons size={20} name={'chevron-forward'} color={'gray'} /></Pressable>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10, marginBottom: 10 }}>
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={{ fontWeight: 'bold' }}>Steack Bin & Pizza - Dĩ An</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10 }}>
                        <Image
                            source={require('../../../assets/product/az.jpg')}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <View style={{ flexDirection: 'row', width: 250 }}>
                            <Text style={{ fontWeight: 'bold' }}>1 x </Text>
                            <Text>Trà quýt hoa tứ quý</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>30,000đ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10 }}>
                        <Image
                            source={require('../../../assets/product/az.jpg')}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <View style={{ flexDirection: 'row', width: 250 }}>
                            <Text style={{ fontWeight: 'bold' }}>1 x </Text>
                            <Text>Trà quýt hoa tứ quý</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>30,000đ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10 }}>
                        <Image
                            source={require('../../../assets/product/az.jpg')}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                        <View style={{ flexDirection: 'row', width: 250 }}>
                            <Text style={{ fontWeight: 'bold' }}>1 x </Text>
                            <Text>Trà quýt hoa tứ quý</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold' }}>30,000đ</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10, marginBottom: 10 }}>
                    <View style={styles.moneyContainer}>
                        <Text style={styles.textMoney}>Tổng cộng (3 món)</Text>
                        <Text style={styles.textMoney}>90,000đ</Text>
                    </View>
                    <View style={styles.moneyContainer}>
                        <Text style={styles.textMoney}>Phí giao hàng (4.3 km)</Text>
                        <Text style={styles.textMoney}>21,000đ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, paddingBottom: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Tổng cộng</Text>
                        <Text style={{ color: 'orangered', fontSize: 17, fontWeight: 'bold' }}>111,000đ</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white', marginBottom: 10 }}>
                    <View style={{ justifyContent: 'flex-start', flexDirection: 'row', paddingVertical: 20 }}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='file-text-o' size={18} color='orange' />
                        </View>
                        <View style={{ marginRight: 10 }}>
                            <Text>Bằng việc nhấn "Đặt đơn", bạn đồng ý tuân theo Điều khoản dịch vụ và Quy chế của chúng tôi.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{
                backgroundColor: 'white', padding: 10, position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0
            }}>
                <Pressable onPress={() => navigation.navigate('AddAddress')} style={{ backgroundColor: '#ED4D2D', padding: 13, alignItems: 'center', borderRadius: 3 }}><Text style={{ color: 'white', fontSize: 15 }}>Đặt đơn</Text></Pressable>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: 10
    },
    iconContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingRight: 15
    },
    moneyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingVertical: 10,
        borderBottomColor: '#ECECEE'
    },
    textMoney: {
        fontSize: 12,
        color: '#666666'
    }
});