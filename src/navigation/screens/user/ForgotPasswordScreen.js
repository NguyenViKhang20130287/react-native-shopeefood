import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import userStyle from './UserStyle'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ForgotPassword({ navigation }) {
    const [email, setEmail] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState('');
    
    const showModal = (text) => {
        setTextModal(text)
        setModalVisible(true)
        setTimeout(() => {
            setModalVisible(false)
            setTextModal('')
        }, 1500)
    }
    const forgotPasswordAPI = () => {
        if (email === '') {
            showModal('Vui lòng không bỏ trống!')
            return;
        }
        const apiUrl = 'http://localhost:8080/api/user/forgot-password'
        axios.post(apiUrl, null, {
            headers: {
                "Content-Type": "application/json"
            },
            params : {
                email
            }
        })
        .then(async response => {
            console.log(response.data)
            if(response.data.statusCodeValue === 200) {
                await AsyncStorage.setItem('email', email)
                navigation.navigate('ConfirmForgot')
            } else {
                showModal('Email không tồn tại!')
            }
        })
        .catch(error => {
            console.log("Error: ", error)
        })
    }

    return (
        <View style={userStyle.container}>
            <View style={userStyle.main}>
                <View style={userStyle.boxInput}>
                    <Ionicons name='person-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Email/Số điện thoại' onChangeText={text => setEmail(text)}/>
                </View>
                <TouchableOpacity style={userStyle.button} onPress={forgotPasswordAPI}>
                        <Text style={userStyle.buttonText}>Tiếp</Text>
                </TouchableOpacity>
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