import * as React from 'react';
import styles from './Setting.style';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Setting({ navigation }) {
    return (
        <Pressable onPress={() => navigation.navigate("DeleteAccount")}>
            <View>
                <View>
                    <Text style={{ color: '#707070', padding: 11, fontSize: 13 }}>Hỗ trợ</Text>
                </View>
                <View style={styles.action}>
                    <Text style={{ paddingHorizontal: 12, paddingVertical: 16 }}>Yêu cầu xóa tài khoản</Text>
                    <Ionicons size={20} name={'chevron-forward'} color={'gray'} />
                </View>
            </View>
        </Pressable>
    );
}