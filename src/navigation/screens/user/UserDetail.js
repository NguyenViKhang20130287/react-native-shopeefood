import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import userStyle from './UserStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { Keyboard } from 'react-native';

export default UserDetail = ({navigation}) => {
    // const [isFocusedName, setFocusedName] = useState(false);
    const inputName = useRef(null)
    const inputPhone = useRef(null)
    const [modalVisible, setModalVisible] = useState(false);
    const showModal = () => {
        setModalVisible(true)
        setTimeout(() => {
            setModalVisible(false)
        }, 1500)
    }
    const [user , setUser] = useState([])
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)

    const clickVIew =(ref)=>{
        ref.current && ref.current.focus();
    }
    useEffect(()=> {
        const userStorage = async () => {
            setUser(JSON.parse(await AsyncStorage.getItem('user')))
            setName(user.full_name)
            setPhone(user.phone_number)
        }
        userStorage()
    }, [user.id])
    const updateAPI = ()=> {
        const apiUrl = "http://localhost:8080/api/user/update"
        const requestData = {
            id: user.id,
            full_name: name,
            phone_number: phone
        }
        axios.put(apiUrl, requestData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async response => {
            const newUser = JSON.parse(await AsyncStorage.getItem('user'))
            newUser.full_name = name
            newUser.phone_number = phone
            await AsyncStorage.setItem('user', JSON.stringify(newUser))
            setUser(JSON.parse(await AsyncStorage.getItem('user')))
            showModal()
            Keyboard.dismiss()
        })
        .catch(error => {
            console.log('Error:', error)
        })
    }


    return (
        <View style={[userStyle.container, {backgroundColor: '#DCDCDC'}]}>
            <View style={userStyle.imageBox}>
                <Ionicons name='person' size={30} style={userStyle.iconUser}/>
            </View>
            <TouchableWithoutFeedback onPress={() =>clickVIew(inputName)}>
                <View style={userStyle.informationBox}>
                    <Text>Tên</Text>
                    <TextInput ref={inputName} placeholder={user.full_name ? user.full_name : "Nhập..."} 
                        onChangeText={text => setName(text)}/>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() =>clickVIew(inputPhone)}>
                <View style={userStyle.informationBox}>
                    <Text>Điện thoại</Text>
                    <TextInput ref={inputPhone} placeholder={user.phone_number ? user.phone_number : "Nhập..."} 
                        onChangeText={text => setPhone(text)}/>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() =>clickVIew(inputPhone)}>
                <View style={[userStyle.informationBox, {marginTop: 20}]}>
                    <Text>Email</Text>
                    <Text>{user.email}</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity style={[userStyle.button, {marginHorizontal: 15, marginTop: 30}]} onPress={updateAPI}>
                        <Text style={userStyle.buttonText}>Sửa</Text>
            </TouchableOpacity>
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
                        <Ionicons name='checkmark-circle-outline' size={50} color={'white'}/>
                        <Text style={userStyle.modalText}>Thay đổi thông tin thành công</Text>
                    </View>
                </View>
            </Modal>
        </View>
        
    )
}