import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Modal, TextInput, Image, ScrollView } from 'react-native';
import styles from './Product.style'

import IconEntypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import ProductTopTab from './ProductTabCate';

const ProductsScreen = ({navigation }) => {
    // const [selectedCategory, setSelectedCategory] = useState(null);
    return (
        <ScrollView style={styles.container}>
            {/* Top */}
            <View style={styles.topzone}>
                <View style={styles.searchContainer}>
                    <TouchableOpacity>
                        <MaterialIcons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={styles.search}>
                        <EvilIcon name='search' size={25} color={'#757587'} />
                        <TextInput style={styles.searchInput} placeholder='Ăn vặt thoả thích, Freeship 0Đ' />
                    </View>
                </View>
            </View>
            <View style={styles.shopContainer}>
                <ScrollView horizontal style={styles.sImageContainer} 
                stickyHeaderIndices={[0]} 
                showsVerticalScrollIndicator={false}>
                    <Image style={styles.shopImage} source={require('../../../../assets/product/prod_1.jpeg')} />
                </ScrollView>
                <View style={styles.mainSContainer}>
                    <View style={styles.sTopContent}>
                        <View style={styles.favorBox}>
                            <Text style={styles.favorText}>Yêu thích</Text>
                        </View>
                        <Text style={styles.shopName}>Hương kí 6 - Cơm chiên 18 món</Text>
                    </View>
                    <View style={styles.sBotContent}>
                        <Text style={styles.reviewScore}>4.7</Text>
                        <View style={styles.verticalDivider} />
                        <Text style={styles.numComments}>9999+ bình luận</Text>
                        <View style={styles.verticalDivider} />
                        <Text style={styles.timer}>17 phút</Text>
                    </View>
                </View>
                <View style={styles.horizontalDivider}/>
                <View style={styles.deliveryContent}>
                    <View style={styles.deliver}>
                        <Image style={styles.deliverPic} source={require('../../../../assets/product/prod_1.jpeg')} />
                        <View style={styles.dTextContainer}>
                            <Text style={styles.deliverText} >Giao hàng tiêu chuẩn</Text>
                            <Text style={styles.timeTextExpect} >Dự kiến giao hàng lúc 10:45</Text>
                        </View>
                        <View style={styles.changeAddress}><Text style={styles.changeText}>Thay đổi</Text></View>
                    </View>
                    <View style={styles.horizontalDivider}/>
                    <View style={styles.saleContainer}>
                        <View style={styles.saleTextContent}>
                            <Text style={styles.saleCodeText}> Nhập 'Hieudeptrai': Giảm 15% trên giá món</Text>
                            <Text style={styles.saleCodeText}> Nhập 'Hieudeptrai': Giảm 15% trên giá món</Text>
                        </View>
                        <View style={styles.seeAllCode}><Text style={styles.seeAllText}>Xem thêm</Text></View>
                    </View>
                </View>
                <View style={styles.horizontalDivider1}/>
                {/* popular products */}
                <View horizontal style={styles.pProdsContainer}>
                    <View style={{width:'100%',marginBottom:8}}><Text style={styles.textTitle}>Món phổ biến</Text></View>
                    <ScrollView horizontal style={styles.pProds}>
                        <TouchableOpacity style={styles.pProdContent}>
                            <View style={styles.pProdImage}>
                                <Image style={styles.pProdPic} source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.pProdTextCont}>
                                <Text style={styles.pProdName} numberOfLines={1} ellipsizeMode="tail">Cơm chiên Trứng Hộp Lớn</Text>
                                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 15}}>
                                    <Text style={styles.pProdPrice}>20.000đ</Text>
                                    <IconEntypo name="squared-plus" size={25} color={'#F95030'}></IconEntypo>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pProdContent}>
                            <View style={styles.pProdImage}>
                                <Image style={styles.pProdPic} source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.pProdTextCont}>
                                <Text style={styles.pProdName}>Cơm chiên Trứng Hộp Lớn</Text>
                                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 15}}>
                                    <Text style={styles.pProdPrice}>20.000đ</Text>
                                    <IconEntypo name="squared-plus" size={25} color={'#F95030'}></IconEntypo>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pProdContent}>
                            <View style={styles.pProdImage}>
                                <Image style={styles.pProdPic} source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.pProdTextCont}>
                                <Text style={styles.pProdName}>Cơm chiên Trứng Hộp Lớn</Text>
                                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 15}}>
                                    <Text style={styles.pProdPrice}>20.000đ</Text>
                                    <IconEntypo name="squared-plus" size={25} color={'#F95030'}></IconEntypo>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
              </View>
            {/* <ProductTopTab/> */}
            <View style={{marginTop:15}}>
                <ProductTopTab/>
            </View>
        </ScrollView>
    );
}
export default ProductsScreen;
