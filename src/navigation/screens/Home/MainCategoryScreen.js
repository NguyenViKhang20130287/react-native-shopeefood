import React from 'react';
import { useState, useRef,useEffect} from "react";

import {Text, View, ScrollView, Image, TouchableOpacity, TextInput,Modal } from 'react-native';

import IconEntypo from 'react-native-vector-icons/Entypo';
import { Ionicons } from "@expo/vector-icons";
import styles from './Home.style'
import { useRoute } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import axios from 'axios';

export default MainCategory = ({navigation}) => {
    const route = useRoute()
    const id = route?.params.id
    const [listStore, setListStore] = useState([])
    const api = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/stores/main_category/${id}`)
            setListStore(response.data)
        } catch (error) {
            console.log('Error:', error);
        }
    }
    useEffect(()=> {
        api()
    }, [])
    return (
        <View>
            <ScrollView style={styles.food_container}>
                {/* search result content */}
                {listStore.map((item, index) =>
                    <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('Store', { id: item.id })}>
                        <View  style={styles.food}>
                            <View style={styles.image}>
                                <Image
                                    style={styles.foods_image}
                                    source={{ uri: item.image }}
                                />
                            </View>
                            <View style={styles.details}>
                                <View style={styles.food_name}>
                                    <Text style={styles.food_tilte}>
                                        <Ionicons
                                            style={styles.icons}
                                            name="shield-checkmark"
                                            color={"orange"}
                                        ></Ionicons>{" "}
                                        {item.name}
                                    </Text>
                                </View>
                                <View style={styles.info}>
                                    <View style={styles.distance}>
                                        <Text style={styles.distance_text} numberOfLines={null}>{item.address}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                )}
        
            </ScrollView>
        </View>
    )
}