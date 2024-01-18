import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Image, ScrollView, Pressable } from 'react-native';
import styles from './Product.style'

import IconEntypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import ProductTopTab from './ProductTabCate';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const ProductsScreen = ({ navigation }) => {
    const [isLike, setIsLike] = useState(false);
    // const [selectedCategory, setSelectedCategory] = useState(null);
    return (
        <ScrollView style={styles.container}>
            {/* Top */}
            <View style={styles.shopContainer}>
                <ScrollView horizontal style={styles.sImageContainer}
                    stickyHeaderIndices={[0]}
                    showsVerticalScrollIndicator={false}>
                    <Image style={styles.shopImage} source={{ uri: "https://images.foody.vn/res/g2/11349/prof/s280x175/image-3111762a-200910114155.jpeg" }} />
                </ScrollView>
                <View style={styles.mainSContainer}>
                    <View style={styles.sTopContent}>
                        <Text style={styles.shopName}><Ionicons
                            size={20}
                            name="shield-checkmark"
                            color={"orange"}
                        ></Ionicons>{' '}Hương kí 6 - Cơm chiên 18 món cơm chiên 18 món</Text>
                    </View>
                    <View style={styles.sBotContent}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome name='map-marker' size={22} color='orangered' />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15 }}>142 Ba Đình, P. 10, Quận 8, TP. HCM</Text>
                            </View>
                        </View>
                        <FontAwesome name={isLike ? "heart" : "heart-o"} size={22} color={'#757575'} />
                    </View>
                </View>
                {/* popular products */}
                <View horizontal style={styles.pProdsContainer}>
                    <View><Text style={styles.textTitle}>Món phổ biến</Text></View>
                    <ScrollView horizontal style={styles.pProds}>
                        <Pressable style={styles.pProdContent}>
                            <View style={styles.pProdImage}>
                                <Image style={styles.pProdPic} source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.pProdTextCont}>
                                <Text style={styles.pProdName} numberOfLines={1} ellipsizeMode="tail">Cơm chiên Trứng Hộp Lớn Lớn</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.oldPrice}>20.000đ</Text>
                                        <Text style={styles.pProdPrice}>36.000đ</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Pressable><FontAwesome name="minus-square-o" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
                                        <TextInput style={{ paddingHorizontal: 6, textAlign: "center" }}>1</TextInput>
                                        <Pressable><FontAwesome name="plus-square" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable style={styles.pProdContent}>
                            <View style={styles.pProdImage}>
                                <Image style={styles.pProdPic} source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.pProdTextCont}>
                                <Text style={styles.pProdName} numberOfLines={1} ellipsizeMode="tail">Cơm chiên Trứng Hộp Lớn Lớn</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.oldPrice}>20.000đ</Text>
                                        <Text style={styles.pProdPrice}>36.000đ</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Pressable><FontAwesome name="minus-square-o" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
                                        <TextInput keyboardType='numeric' style={{ paddingHorizontal: 6, textAlign: "center" }}>1</TextInput>
                                        <Pressable><FontAwesome name="plus-square" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
                                    </View>
                                </View>
                            </View>
                        </Pressable>

                    </ScrollView>
                </View>
            </View>
            <View style={styles.horizontalDivider1} />
            {/* <ProductTopTab/> */}
            <View style={{ marginTop: 15 }}>
                <ProductTopTab />
            </View>
        </ScrollView>
    );
}
export default ProductsScreen;
