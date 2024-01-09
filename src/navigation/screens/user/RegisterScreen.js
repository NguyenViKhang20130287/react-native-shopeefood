import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import userStyle from './UserStyle'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default RegisterScreen = ({navigation}) => {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const changeHidePassword = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const showModal = (text) => {
        setTextModal(text)
        setModalVisible(true)
        setTimeout(() => {
            setModalVisible(false)
            setTextModal('')
        }, 1500)
    }
    const registerAPI = () => {
        if (email === '' || password === '' || rePassword === '') {
            showModal('Vui lòng nhập đầy đủ thông tin!')
        } else if (password !== rePassword) {
            showModal('Mật khẩu không trùng khớp!')
        } else if (password.length < 6) {
            showModal('Mật khẩu phải trên 6 kí tự!')
        } else {
            const apiUrl = 'http://localhost:8080/api/user/register'
            const requestData = {
                email : email,
                password : password,
            }
            axios.post(apiUrl, requestData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(async response => {
                if (response.data.statusCodeValue === 200) {
                    const registerData = {email, password}
                    await AsyncStorage.setItem("register", JSON.stringify(registerData))
                    navigation.navigate('ConfirmRegister')
                } else if (response.data.statusCodeValue === 400){
                    showModal('Email đã tồn tại!')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })
        }
       
    }
    return (
        <View style={userStyle.container}>
            <View style={userStyle.main}>
                <View style={{alignItems: 'center'}}>
                    <Ionicons name='basket' size={100} color={'orangered'}/>
                </View>
                <View style={userStyle.boxInput}>
                    <Ionicons name='mail-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Email' onChangeText={text => setEmail(text)}/>
                </View>
                {/* <View style={userStyle.boxInput}>
                    <Ionicons name='phone-portrait-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Số điện thoại'/>
                </View> */}
                <View style={userStyle.boxInput}>
                    <Ionicons name='lock-closed-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Mật khẩu' secureTextEntry={secureTextEntry}
                        onChangeText={text => setPassword(text)}/>
                    <Ionicons 
                        name={secureTextEntry ? 'eye-off-outline': 'eye-outline'} 
                        style={userStyle.icon}
                        onPress={changeHidePassword}/>
                </View>
                <View style={userStyle.boxInput}>
                    <Ionicons name='lock-closed-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Nhập lại mật khẩu' secureTextEntry={secureTextEntry}
                        onChangeText={text => setRePassword(text)}/>
                </View>
                <TouchableOpacity style={userStyle.button} onPress={registerAPI}>
                        <Text style={userStyle.buttonText}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            <View style={userStyle.footer}>
                <Text style={{fontSize: 16}}>Bạn đã có tài khoản?
                    <Text style={{color: 'blue'}} onPress={() => navigation.navigate('Login')}> Đăng nhập ngay</Text>
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
                        <Text style={userStyle.modalText}>{textModal}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}