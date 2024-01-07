import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Image, ScrollView, Button, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import userStyle from './UserStyle'

export default function ForgotPassword({ navigation }) {
    return (
        <View style={userStyle.container}>
            <View style={userStyle.main}>
                <View style={userStyle.boxInput}>
                    <Ionicons name='person-outline' style={userStyle.icon}/>
                    <TextInput style={userStyle.input} placeholder='Email/Số điện thoại'/>
                </View>
                <TouchableOpacity style={userStyle.button} onPress={() => navigation.navigate('Nhập mã xác minh')}>
                        <Text style={userStyle.buttonText}>Tiếp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}