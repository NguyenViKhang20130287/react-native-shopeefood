import * as React from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import styles from './Home.style'

import IconEntypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            {/* Top */}
            <View style={styles.topzone}>
                <View style={styles.addressContainer}>
                    <Text style={{ fontSize: 16, marginBottom: 8 }}>Giao đến:</Text>
                    <View style={styles.address}>
                        <IconEntypo name='location-pin' size={25} color={'#F95030'} />
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.addressText}>
                            2/7c, Đường Số 106 Phường Tăng Nhơn Phú A, Thành Phố Thủ Đức, TP. Hồ Chí Minh
                        </Text>
                        <MaterialIcons name='navigate-next' size={25} />
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <View style={styles.search}>
                        <EvilIcon name='search' size={25} color={'#757587'} />
                        <TextInput style={styles.searchInput} placeholder='Ăn vặt thoả thích, Freeship 0Đ' />
                    </View>
                </View>
            </View>

            {/* Center */}
            <View style={styles.centerzone}>
                {/* Slider */}
                <View style={styles.sliderContainer}>
                    <Image style={styles.SlideImage} source={require('../../../../assets/Slider/slide_1.png')} />
                </View>

                {/* category */}
                <View style={styles.categoryContainer}>
                    <View style={styles.cateIcon}>
                        <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-beer-50.png')} />
                        <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-boba-96.png')} />
                        <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-cart-64.png')} />
                        <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-flower-64.png')} />
                    </View>
                    <View style={styles.cateIcon}>
                        <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-guacamole-50.png')} />
                        <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-medicine-50.png')} />
                        <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-pet-50.png')} />
                        <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-rice-50.png')} />
                    </View>
                </View>

                {/* Flash sale */}
                <View style={styles.flashSaleContainer}>
                    <View style={styles.flashSale_header}>
                        <View style={styles.flashSale_header_left}>
                            <Image style={styles.flashSale_header_left_icon}
                                source={require('../../../../assets/logo/iconLogo.png')} />
                            <Text style={styles.flashSale_textBold}>
                                F<MaterialCommunityIcons name='lightning-bolt' size={20} />ASH SALE</Text>
                        </View>
                        <View style={styles.flashSale_header_right}>
                            <Text>Xem tất cả</Text>
                            <MaterialIcons name='navigate-next' size={25} />
                        </View>
                    </View>

                    <ScrollView horizontal style={styles.flashSale_content}>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <Text style={styles.flashSale_price}>90,000đ</Text>
                                <View style={styles.flashSale_wrapperTitle}>
                                    <Text style={styles.flashSale_title}>Đang bán chạy</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <Text style={styles.flashSale_price}>90,000đ</Text>
                                <View style={styles.flashSale_wrapperTitle}>
                                    <Text style={styles.flashSale_title}>Đang bán chạy</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <Text style={styles.flashSale_price}>90,000đ</Text>
                                <View style={styles.flashSale_wrapperTitle}>
                                    <Text style={styles.flashSale_title}>Đang bán chạy</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <Text style={styles.flashSale_price}>90,000đ</Text>
                                <View style={styles.flashSale_wrapperTitle}>
                                    <Text style={styles.flashSale_title}>Đang bán chạy</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                </View>

                {/* Top rating */}
                <View style={styles.flashSaleContainer}>
                    <View style={styles.flashSale_header}>
                        <View style={styles.flashSale_header_left}>
                            <Text style={styles.flashSale_textBold}>
                                Top quán rating 5*</Text>
                        </View>
                        <View style={styles.flashSale_header_right}>
                            <Text>Xem tất cả</Text>
                            <MaterialIcons name='navigate-next' size={25} />
                        </View>
                    </View>

                    <ScrollView horizontal style={styles.flashSale_content}>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                </View>

                 {/* Best seller */}
                 <View style={styles.flashSaleContainer}>
                    <View style={styles.flashSale_header}>
                        <View style={styles.flashSale_header_left}>
                            <Text style={styles.flashSale_textBold}>
                                Top món bán chạy</Text>
                        </View>
                        <View style={styles.flashSale_header_right}>
                            <Text>Xem tất cả</Text>
                            <MaterialIcons name='navigate-next' size={25} />
                        </View>
                    </View>

                    <ScrollView horizontal style={styles.flashSale_content}>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                </View>

                {/* Food top rating */}
                <View style={styles.flashSaleContainer}>
                    <View style={styles.flashSale_header}>
                        <View style={styles.flashSale_header_left}>
                            <Text style={styles.flashSale_textBold}>
                                Món ăn được đánh giá tốt</Text>
                        </View>
                        <View style={styles.flashSale_header_right}>
                            <Text>Xem tất cả</Text>
                            <MaterialIcons name='navigate-next' size={25} />
                        </View>
                    </View>

                    <ScrollView horizontal style={styles.flashSale_content}>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                </View>

                {/* Quán ngon lâu đời */}
                <View style={styles.flashSaleContainer}>
                    <View style={styles.flashSale_header}>
                        <View style={styles.flashSale_header_left}>
                            <Text style={styles.flashSale_textBold}>
                                Quán ngon lâu đời</Text>
                        </View>
                        <View style={styles.flashSale_header_right}>
                            <Text>Xem tất cả</Text>
                            <MaterialIcons name='navigate-next' size={25} />
                        </View>
                    </View>

                    <ScrollView horizontal style={styles.flashSale_content}>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                        {/* product */}
                        <View style={styles.flashSale_product}>
                            <View style={styles.flashSale_imageContainer}>
                                <Image style={styles.flashSale_image}
                                    source={require('../../../../assets/product/prod_1.jpeg')} />
                            </View>
                            <View style={styles.flashSale_contentContainer}>
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.flashSale_name}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                                <View style={styles.topRating_wrapperTitle}>
                                    <Text style={styles.topRating_title}>Mã giảm 15%</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                </View>

            </View>
        </ScrollView>
    );
}