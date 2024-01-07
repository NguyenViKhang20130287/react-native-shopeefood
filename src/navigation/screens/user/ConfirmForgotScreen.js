import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Image, ScrollView, Button, KeyboardAvoidingView } from 'react-native';
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

const CELL_COUNT = 6;

export default ConfirmForgot = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

  return (
    <SafeAreaView style={userStyle.main}>
      <Text style={userStyle.title}>Mã xác thực đã được gửi đến số Email</Text>
      <Text style={userStyle.titleEmail}>example@example.com</Text>
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
        <TouchableOpacity style={userStyle.button}>
            <Text style={userStyle.buttonText}>Tiếp theo</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};
