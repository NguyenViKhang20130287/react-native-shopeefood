import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Image, ScrollView, Button, KeyboardAvoidingView, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import userStyle from './UserStyle'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const changeHidePassword = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const showModal = () => {
        setModalVisible(true)
        setTimeout(() => {
            setModalVisible(false)
        }, 1500)
    }
    const loginAPI = () => {
        if (email === '' || password === '') {
            showModal()
        }
        const apiUrl = "http://localhost:8080/api/user/login";  
        const requestData = {
            email: email,
            password: password
        };
        
        axios.post(apiUrl, requestData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async response => {
            if (response.data.statusCodeValue === 200) {
                if (response.data.body.body.id) {
                    await AsyncStorage.setItem("user_id", JSON.stringify(response.data.body.body.id))
                    navigation.navigate('Tôi')
                } else {
                    showModal()
                }
                
            } else {
                showModal()
            }
        })
        .catch(error => {
            console.log(error)
        });
    }
    return (
        <View style={userStyle.container}>
            <View style={userStyle.main}>
                <View style={{alignItems: 'center'}}>
                    <Ionicons name='basket' size={100} color={'orangered'}/>
                </View>
                <View style={userStyle.boxInput}>
                    <Ionicons name='person-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Email/Số điện thoại'
                            onChangeText={text => setEmail(text)}
                    
                    />
                </View>
                <View style={userStyle.boxInput}>
                    <Ionicons name='lock-closed-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Mật khẩu' secureTextEntry={secureTextEntry}
                        onChangeText={text => setPassword(text)}/>
                    <Ionicons 
                        name={secureTextEntry ? 'eye-off-outline': 'eye-outline'} 
                        style={userStyle.icon}
                        onPress={changeHidePassword}/>
                    <Text style={userStyle.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>Quên?</Text>
                </View>
                <TouchableOpacity style={userStyle.button} onPress={loginAPI}>
                        <Text style={userStyle.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={userStyle.other}>Đăng nhập bằng SMS</Text>
            </View>
            <View style={userStyle.footer}>
                <Text style={{fontSize: 16}}>Bạn chưa có tài khoản?
                    <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Register')}> Đăng ký ngay</Text>
                </Text>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={() => {
                //     Alert.alert('Modal has been closed.');
                //     setModalVisible(!modalVisible);
                // }}
                >
                <View style={userStyle.centeredView}> 
                    <View style={userStyle.modalView}>
                        <Ionicons name='warning-outline' size={50} color={'white'}/>
                        <Text style={userStyle.modalText}>Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại!</Text>
                    </View>
                </View>
            </Modal>
        </View>
    
    );

    

}