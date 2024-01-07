import * as React from 'react';
import styles from './Setting.style';
import { Pressable, Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function DeleteAccount() {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                padding: 15
            }}>
                <View style={styles.warningIcon}>
                    <Ionicons size={70} name={'warning'} color={'red'} />
                </View>
                <View style={styles.content}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                         Chúng tôi rất tiếc khi bạn muốn rời đi. Nếu tạm thời bạn không muốn dùng tài khoản này, bạn có thể chọn đăng xuất tài khoản (Vào mục tôi > Đăng xuất) và đăng nhập lại bất cứ khi nào. Sau khi xóa tài khoản, bạn sẽ không thể:
                    </Text>
                    <View style={styles.info}>
                        <View style={styles.textContainer}>
                            <FontAwesome name={'circle'} size={8} style={{ marginRight: 10, color: '#595959' }} />
                            <Text style={styles.text}>Đăng nhập vào ứng dụng bằng tài khoản hiện tại.</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <FontAwesome name={'circle'} size={8} style={{ marginRight: 10, color: '#595959' }} />
                            <Text style={styles.text}>Truy cập lịch sử đơn hàng trước đó.</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.text}>Hãy chắc chắn tất cả các đơn hàng của bạn đều đã hoàn thành cho đến thời điểm hiện tại. Nếu còn đơn chưa hoàn thành, bạn không thể xóa tài khoản.</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={{ backgroundColor: '#ED4D2D', padding: 13, alignItems: 'center', borderRadius: 3 }}><Text style={{ color: 'white', fontSize: 15 }}>Xoá tài khoản</Text></Pressable>
            </View>
        </View>
    );
}