import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Image, ScrollView, Button, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import userStyle from './UserStyle'

export default RegisterScreen = ({navigation}) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const changeHidePassword = () => {
        setSecureTextEntry(!secureTextEntry);
      };
    return (
        <View style={userStyle.container}>
            <View style={userStyle.main}>
                <View style={{alignItems: 'center'}}>
                    <Ionicons name='basket' size={100} color={'orangered'}/>
                </View>
                <View style={userStyle.boxInput}>
                    <Ionicons name='mail-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Email'/>
                </View>
                <View style={userStyle.boxInput}>
                    <Ionicons name='phone-portrait-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Số điện thoại'/>
                </View>
                <View style={userStyle.boxInput}>
                    <Ionicons name='lock-closed-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Mật khẩu' secureTextEntry={secureTextEntry}/>
                    <Ionicons 
                        name={secureTextEntry ? 'eye-off-outline': 'eye-outline'} 
                        style={userStyle.icon}
                        onPress={changeHidePassword}/>
                    {/* <Text style={userStyle.forgotPassword}>Quên?</Text> */}
                </View>
                <View style={userStyle.boxInput}>
                    <Ionicons name='lock-closed-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Nhập lại mật khẩu' secureTextEntry={secureTextEntry}/>
                </View>
                <TouchableOpacity style={userStyle.button} onPress={() => navigation.navigate('Nhập Mã Xác Minh')}>
                        <Text style={userStyle.buttonText}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            <View style={userStyle.footer}>
                <Text style={{fontSize: 16}}>Bạn đã có tài khoản?
                    <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Đăng nhập')}> Đăng nhập ngay</Text>
                </Text>
            </View>
        </View>
    );
}