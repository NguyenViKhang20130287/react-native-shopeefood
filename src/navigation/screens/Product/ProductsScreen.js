import React, { useState } from 'react';
import { View, Text,TouchableOpacity, Modal, TextInput, Image, ScrollView } from 'react-native';
import styles from './Product.style'
import ProductDetail from './ProductDetail';

import ProductFilter from './ProducFilter';
import IconEntypo from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons'

const ProductsScreen = ({navigation }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const toggleFilters = () => {
      setShowFilters(!showFilters);
    };

    return (
        <ScrollView style={styles.container}>
            <View>
            {/* Top */}
            <View style={styles.topzone}>
                    <View style={styles.addressContainer}>
                        <View style={styles.address}>
                            <IconEntypo name='shopping-bag' size={30} color={'#F95030'} style={{ fontSize: 18, marginRight: 10}} />
                            <Text style={{ fontSize: 18, marginBottom: 8 }}>Sản Phẩm</Text>
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.search}>
                            <EvilIcon name='search' size={25} color={'#757587'} />
                            <TextInput style={styles.searchInput} placeholder='Ăn vặt thoả thích, Freeship 0Đ' />
                        </View>
                    </View>
                </View>
            </View>
            {/* Filter*/}
            <TouchableOpacity style={styles.filterButton} onPress={toggleFilters}>
               <Text style={styles.filterButtonText}>Lọc</Text>
            </TouchableOpacity>
            <Modal
                visible={showFilters}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setShowFilters(false)}
            >
                <ProductFilter
                setShowFilters={setShowFilters}
                />
            </Modal>
          {/* Top rating */}
            <View style={styles.flashSaleContainer}>
                <View style={styles.flashSale_header}>
                    <View style={styles.flashSale_header_left}>
                        <Text style={styles.flashSale_textBold}>
                            Đồ ăn
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.productContainer}>
                        {/* product */}
                        <View style={styles.productContent}>
                            <View style={styles.contentWrapper}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.productImage}
                                        source={require('../../../../assets/product/prod_1.jpeg')} />
                                </View>
                                <View style={styles.producContentContainer}>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.producName}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                    <Text style={styles.productPrice}>100.000đ</Text>
                                    <View style={styles.product_wrapperTitle}>
                                        <Text style={styles.productDiscount}>Mã giảm 15%</Text>
                                    </View>
                                    <View style={styles.detailLink}>
                                        <Text style={styles.detailLinkText} onPress={() => navigation.navigate('ProductDetail')}>Xem thêm</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* product */}
                        <View style={styles.productContent}>
                            <View style={styles.contentWrapper}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.productImage}
                                        source={require('../../../../assets/product/prod_1.jpeg')} />
                                </View>
                                <View style={styles.producContentContainer}>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.producName}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                    <Text style={styles.productPrice}>100.000đ</Text>
                                    <View style={styles.product_wrapperTitle}>
                                        <Text style={styles.productDiscount}>Mã giảm 15%</Text>
                                    </View>
                                    <View style={styles.detailLink}>
                                        <Text style={styles.detailLinkText}>Xem thêm</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                         {/* product */}
                         <View style={styles.productContent}>
                            <View style={styles.contentWrapper}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.productImage}
                                        source={require('../../../../assets/product/prod_1.jpeg')} />
                                </View>
                                <View style={styles.producContentContainer}>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.producName}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                    <Text style={styles.productPrice}>100.000đ</Text>
                                    <View style={styles.product_wrapperTitle}>
                                        <Text style={styles.productDiscount}>Mã giảm 15%</Text>
                                    </View>
                                    <View style={styles.detailLink}>
                                        <Text style={styles.detailLinkText}>Xem thêm</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                         {/* product */}
                         <View style={styles.productContent}>
                            <View style={styles.contentWrapper}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.productImage}
                                        source={require('../../../../assets/product/prod_1.jpeg')} />
                                </View>
                                <View style={styles.producContentContainer}>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.producName}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                    <Text style={styles.productPrice}>100.000đ</Text>
                                    <View style={styles.product_wrapperTitle}>
                                        <Text style={styles.productDiscount}>Mã giảm 15%</Text>
                                    </View>
                                    <View style={styles.detailLink}>
                                        <Text style={styles.detailLinkText}>Xem thêm</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}
export default ProductsScreen;
