import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './Search.style';
import { Button } from 'react-native';

export default function SearchScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.searchInputContainer}>
                <TextInput style={styles.searchInput} placeholder='Tìm kiếm...' />
                <TouchableOpacity style={styles.searchCancel}>
                    <Text style={styles.searchCancelText}>Huỷ</Text>
                </TouchableOpacity>
            </View>

            {/*  */}
            <View style={styles.historyInputContainer}>
                <View style={styles.historyInput}>
                    <Text style={styles.historyInputText}>Bún bò</Text>
                </View>
                <View style={styles.historyInput}>
                    <Text style={styles.historyInputText}>Bún bò</Text>
                </View>
                <View style={styles.historyInput}>
                    <Text style={styles.historyInputText}>Bún bò</Text>
                </View>
            </View>

            <View style={styles.popularContainer}>
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
            </View>
        </View>
    );
}