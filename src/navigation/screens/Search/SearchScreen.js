import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import styles from './Search.style';
import { Button } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function SearchScreen({ navigation }) {
    const focus = useIsFocused()
    const [text, setText] = useState('')
    const [listSearched, setListSearched] = useState([])
    const getListSearch = async () => {
        try {
            const list = await AsyncStorage.getItem('listSearched')
            if (list) {
                setListSearched(JSON.parse(list))
            }
        } catch (error) {
            console.log('Error', error);
        }
    }
    const search = async () => {
        console.log(text)
        if (text === '') {
            return;
        } else {
            try {
                const updateListSearched = [...listSearched, text]
                setListSearched(updateListSearched)
                await AsyncStorage.setItem('listSearched', JSON.stringify(updateListSearched))
                navigation.navigate('SearchResult', { search: text })
            } catch (error) {
                console.log('Error:', error);
            }
        }

    }
    const deleleteHistorySearch = async () => {
        await AsyncStorage.removeItem('listSearched')
        setListSearched([])
    }
    useEffect(() => {
        getListSearch()
    }, [focus, listSearched, text])
    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchInputContainer}>
                <TextInput style={styles.searchInput} placeholder='Tìm kiếm...' onSubmitEditing={search}
                    onChangeText={(text) => setText(text)} />
                <TouchableOpacity style={styles.searchCancel} onPress={() => navigation.pop()}>
                    <Text style={styles.searchCancelText}>Huỷ</Text>
                </TouchableOpacity>
            </View>

            {/*  */}
            <View style={styles.historyInputContainer}>
                {listSearched.map((item, index) =>
                    <TouchableWithoutFeedback key={index} onPress={() => { setText(item); search() }}>
                        <View style={styles.historyInput}>
                            <Text style={styles.historyInputText}>{item}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
                {(listSearched.length > 0) ?
                    <TouchableWithoutFeedback onPress={deleleteHistorySearch}>
                        <View style={styles.historyInput}>
                            <Text style={[styles.historyInputText, { textAlign: 'center' }]}>Xóa lịch sử tìm kiếm</Text>
                        </View>
                    </TouchableWithoutFeedback> : null}
            </View>

            {/* <View style={styles.popularContainer}>
                <Text style={styles.popularTitle}>Phổ biến</Text>
                <View style={styles.popularListFood}>
                    <View style={styles.popularListFoodLeft}>
                        <View style={styles.popularItem}>
                            <View style={styles.popularItemName}>
                                <Text style={styles.popularItemNameText}>Trà sữa</Text>
                            </View>
                            <View style={styles.popularItemWrapper}>
                                <Image style={styles.popularItemImage} source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                        </View>
                        <View style={styles.popularItem}>
                            <Text style={styles.popularItemName}>Trà sữa</Text>
                            <Image style={styles.popularItemImage} source={require('../../../../assets/product/prod_1.jpeg')} />
                        </View>
                        <View style={styles.popularItem}>
                            <Text style={styles.popularItemName}>Trà sữa</Text>
                            <Image style={styles.popularItemImage} source={require('../../../../assets/product/prod_1.jpeg')} />
                        </View>
                    </View>
                    <View style={styles.popularListFoodRight}>
                        <View style={styles.popularItem}>
                            <Text style={styles.popularItemName}>Trà sữa</Text>
                            <Image style={styles.popularItemImage} source={require('../../../../assets/product/prod_1.jpeg')} />
                        </View>
                        <View style={styles.popularItem}>
                            <Text style={styles.popularItemName}>Trà sữa</Text>
                            <Image style={styles.popularItemImage} source={require('../../../../assets/product/prod_1.jpeg')} />
                        </View>
                        <View style={styles.popularItem}>
                            <Text style={styles.popularItemName}>Trà sữa</Text>
                            <Image style={styles.popularItemImage} source={require('../../../../assets/product/prod_1.jpeg')} />
                        </View>
                    </View>
                </View>
            </View> */}
        </ScrollView>
    );
}