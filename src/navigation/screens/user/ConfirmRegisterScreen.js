import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, Modal } from 'react-native';
import { SafeAreaView } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import userStyle from './UserStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import axios from 'axios';

const CELL_COUNT = 6;

export default ConfirmRegister = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [email, setEmail] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [textModal, setTextModal] = useState('');

  useEffect(() => {
    const getRegistrationInformation = async () => {
      setEmail(JSON.parse(await AsyncStorage.getItem("register")))
    }
    getRegistrationInformation();
  }, [email.email])
  const showModal = (text) => {
    setTextModal(text)
    setModalVisible(true)
    setTimeout(() => {
        setModalVisible(false)
        setTextModal('')
    }, 1500)
  }
  useEffect(()=> {
    if (value.length === 6) {
      const apiUrl = 'http://localhost:8080/api/user/register/verify-otp';
      const requestData = {
        email: email.email,
        password: email.password,
        otp: value
      }
      axios.post(apiUrl, requestData, {
        headers: {
          "Content-Type": "application/json"
      }
      })
      .then(async response => {
        if (response.data.body.statusCodeValue === 200) {
          await AsyncStorage.removeItem('register')
          showModal('Đăng ký thành công')
          navigation.navigate('Login')
        } else {
          showModal('Sai mã xác minh')
        }
      })
      .catch(error => {
        console.error('Catch:', error);
      })
    }
  },[value])

  return (
    <SafeAreaView style={userStyle.main}>
      <Text style={userStyle.title}>Mã xác thực đã được gửi đến số Email</Text>
      <Text style={userStyle.titleEmail}>{email.email}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={userStyle.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[userStyle.cellRoot, isFocused && userStyle.focusCell]}>
            <Text style={userStyle.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )} />
      {/* <TouchableOpacity style={userStyle.button} onPress={ConfirmCodeRegister}>
        <Text style={userStyle.buttonText}>Tiếp theo</Text>
      </TouchableOpacity> */}
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
            <Ionicons name='warning-outline' size={50} color={'white'} />
            <Text style={userStyle.modalText}>{textModal}</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}