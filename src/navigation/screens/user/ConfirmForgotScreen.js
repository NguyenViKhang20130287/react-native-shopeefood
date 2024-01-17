import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, Modal, TextInput } from 'react-native';
import {SafeAreaView} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import userStyle from './UserStyle'
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const CELL_COUNT = 6;

export default ConfirmForgot = ({navigation}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [textModal, setTextModal] = useState('');
    const [iconModal, setIconModal] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    
    const showModal = (text, icon) => {
        setTextModal(text)
        setIconModal(icon)
        setModalVisible(true)
        setTimeout(() => {
            setModalVisible(false)
            setTextModal('')
        }, 1500)
    }

    useEffect( ()=> {
      const getEmailForgot = async () => {      
        setEmail(await AsyncStorage.getItem('email'))
      }
      getEmailForgot()
    }, [email])
    const confirmForgotAPI = () => {
      if (value === '' || password === '' || rePassword === '') {
        showModal('Vui lòng nhập đầy đủ thông tin!', 'warning-outline')
      } else if (password !== rePassword) {
        showModal('Mật khẩu không trùng khớp!', 'warning-outline')
      } else if (password.length !== 6) {
        showModal('Mật khẩu phải trên 6 kí tự!', 'warning-outline')
      } else {
        const apiUrl = 'http://localhost:8080/api/user/forgot-password/reset-password'
        const requestData = {
          email : email,
          otp: value,
          newPassword: password
        }
        axios.post(apiUrl, requestData, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(async response => {
          if (response.data.statusCodeValue===200) {
            await AsyncStorage.removeItem('email')
            showModal('Đổi mật khẩu thành công', 'checkmark-circle-outline')
            navigation.navigate('Login')
          } else {
            showModal('Sai mã xác minh!', 'warning-outline')
          }
        })
        .catch(error => {
          console.log('Error: ', error)
        })
      }
    }

  return (
    <SafeAreaView style={userStyle.main}>
      <Text style={userStyle.title}>Mã xác thực đã được gửi đến số Email</Text>
      <Text style={userStyle.titleEmail}>{email}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={userStyle.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[userStyle.cellRoot, isFocused && userStyle.focusCell]}>
            <Text style={userStyle.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}/>
      <View style={[userStyle.boxInput, {marginTop: 40}]}>
        <Ionicons name='lock-closed-outline' style={userStyle.icon} />
        <TextInput style={userStyle.input} placeholder='Mật khẩu mới' onChangeText={text => setPassword(text)} />
      </View>
      <View style={userStyle.boxInput}>
        <Ionicons name='lock-closed-outline' style={userStyle.icon} />
        <TextInput style={userStyle.input} placeholder='Nhập lại mật khẩu' onChangeText={text => setRePassword(text)} />
      </View>
        <TouchableOpacity style={userStyle.button} onPress={confirmForgotAPI}>
            <Text style={userStyle.buttonText}>Tiếp theo</Text>
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
            <Ionicons name={iconModal} size={50} color={'white'} />
            <Text style={userStyle.modalText}>{textModal}</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
