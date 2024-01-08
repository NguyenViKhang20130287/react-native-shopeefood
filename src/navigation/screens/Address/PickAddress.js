import * as React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PickAddress({ navigation }) {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0
            }}>
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10, marginTop: 5 }}>
                    <View style={styles.action}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='map-marker' size={18} color='orangered' />
                        </View>
                        <View style={{ flexDirection: 'column', width: 315 }}>
                            <Text style={{ fontWeight: 'bold' }}>Nhà</Text>
                            <Text style={{ color: '#999999', marginVertical: 15, paddingRight: 20, textAlign: 'justify' }}>[Rào đối diện cà phê Giangnam, KTX Đại Học Quốc Gia TPHCM - Khu B] Tô Vĩnh Diện, P.Đông Hòa, Dĩ An, Bình Dương</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#595959', marginRight: 10 }}>Đăng Khoa</Text>
                                <Text style={{ color: '#595959' }}>08397179739</Text>
                            </View>
                        </View>
                        <View style={{ width: 100 }}>
                            <Pressable onPress={() => navigation.navigate('UpdateAddress')}><Text style={{ color: '#1084EB' }}>Sửa</Text></Pressable>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ color: '#707070', padding: 15 }}>Địa chỉ đã lưu</Text>
                </View>
                <View style={{ paddingHorizontal: 10, backgroundColor: 'white', paddingTop: 10 }}>
                    <View style={styles.action}>
                        <View style={styles.iconContainer}>
                            <FontAwesome name='home' size={18} color='black' />
                        </View>
                        <View style={{ flexDirection: 'column', width: 315 }}>
                            <Text style={{ fontWeight: 'bold' }}>Nhà</Text>
                            <Text style={{ color: '#999999', marginVertical: 15, paddingRight: 20, textAlign: 'justify' }}>[Rào đối diện cà phê Giangnam, KTX Đại Học Quốc Gia TPHCM - Khu B] Tô Vĩnh Diện, P.Đông Hòa, Dĩ An, Bình Dương</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#595959', marginRight: 10 }}>Đăng Khoa</Text>
                                <Text style={{ color: '#595959' }}>08397179739</Text>
                            </View>
                        </View>
                        <View style={{ width: 100 }}>
                            <Pressable onPress={() => navigation.navigate('UpdateAddress')}><Text style={{ color: '#1084EB' }}>Sửa</Text></Pressable>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                backgroundColor: 'white', padding: 10, position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0
            }}>
                <Pressable onPress={() => navigation.navigate('AddAddress')} style={{ backgroundColor: '#ED4D2D', padding: 13, alignItems: 'center', borderRadius: 3 }}><Text style={{ color: 'white', fontSize: 15 }}>Thêm địa chỉ mới</Text></Pressable>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1.5,
        backgroundColor: 'white',
        borderBottomColor: 'whitesmoke',
        paddingBottom: 10
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        marginRight: 10,
    },
});