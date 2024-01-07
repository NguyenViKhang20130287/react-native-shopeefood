import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Image, ScrollView, Button, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import userStyle from './UserStyle'

export default function LoginScreen({ navigation }) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const changeHidePassword = () => {
        setSecureTextEntry(!secureTextEntry);
      };
    return (
        <View style={userStyle.container}>
            {/* <View style={userStyle.header}>
                <TouchableOpacity style={userStyle.backButton} >
                    <Ionicons name='arrow-back-outline' size={30} color={'orangered'}/>
                </TouchableOpacity>
                <Text style={userStyle.titleHeader}>Đăng Nhập</Text>
                <View style={userStyle.headerEmpty}></View>
            </View> */}
            <View style={userStyle.main}>
                <View style={{alignItems: 'center'}}>
                    <Ionicons name='basket' size={100} color={'orangered'}/>
                </View>
                <View style={userStyle.boxInput}>
                    <Ionicons name='person-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Email/Số điện thoại'/>
                </View>
                <View style={userStyle.boxInput}>
                    <Ionicons name='lock-closed-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Mật khẩu' secureTextEntry={secureTextEntry}/>
                    <Ionicons 
                        name={secureTextEntry ? 'eye-off-outline': 'eye-outline'} 
                        style={userStyle.icon}
                        onPress={changeHidePassword}/>
                    <Text style={userStyle.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>Quên?</Text>
                </View>
                <TouchableOpacity style={userStyle.button}>
                        <Text style={userStyle.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={userStyle.other}>Đăng nhập bằng SMS</Text>
            </View>
            <View style={userStyle.footer}>
                <Text style={{fontSize: 16}}>Bạn chưa có tài khoản?
                    <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Register')}> Đăng ký ngay</Text>
                </Text>
            </View>
        </View>
    );
}