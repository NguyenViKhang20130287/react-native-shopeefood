import * as React from 'react';
import { View, Text, TextInput, Image, ScrollView, Pressable, StatusBar } from 'react-native';
import styles from './Home.style'

import IconEntypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BannerSlider from '../../../components/BannerSlider';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
            <StatusBar barStyle="dark-content" backgroundColor="#F55C32" />
            {/* Top */}
            <View style={styles.topzone}>
                <View style={styles.addressContainer}>
                    <Text style={{ fontSize: 16, marginBottom: 8, color: '#595959' }}>Giao đến:</Text>
                    <View style={styles.address}>
                        <IconEntypo name='location-pin' size={25} color={'#F95030'} />
                        <Text onPress={() => navigation.navigate('PickAddress')} numberOfLines={1} ellipsizeMode="tail" style={styles.addressText}>
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
                <BannerSlider />

                {/* category */}
                <View style={styles.categoryContainer}>
                    <View style={styles.cateIcon}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-rice-50.png')} />
                            <Text style={styles.iconText}>Đồ ăn</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-guacamole-50.png')} />
                            <Text style={styles.iconText}>Thực phẩm</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-beer-50.png')} />
                            <Text style={styles.iconText}>Bia</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-flower-64.png')} />
                            <Text style={styles.iconText}>Hoa</Text>
                        </View>
                    </View>
                    <View style={styles.cateIcon}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-boba-96.png')} />
                            <Text style={styles.iconText}>Trà sữa</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-cart-64.png')} />
                            <Text style={styles.iconText}>Siêu thị</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-medicine-50.png')} />
                            <Text style={styles.iconText}>Thuốc</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Image style={styles.cateImg} source={require('../../../../assets/category-icon/icons8-pet-50.png')} />
                            <Text style={styles.iconText}>Thú cưng</Text>
                        </View>
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
                            <Text style={{ fontSize: 13, color: '#757575' }}>Xem tất cả</Text>
                            <MaterialIcons name='navigate-next' size={25} color={'#757575'} />
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
                                Top Quán Rating 5*</Text>
                        </View>
                        <View style={styles.flashSale_header_right}>
                            <Text style={{ fontSize: 13, color: '#757575' }}>Xem tất cả</Text>
                            <MaterialIcons name='navigate-next' size={25} color={'#757575'} />
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#757575', fontSize: 12 }}>Gợi ý quán được tín đồ ẩm thực đánh giá 5*</Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.flashSale_content}>

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
                                Top Quán Bán Chạy</Text>
                        </View>
                        <View style={styles.flashSale_header_right}>
                            <Text style={{ fontSize: 13, color: '#757575' }}>Xem tất cả</Text>
                            <MaterialIcons name='navigate-next' size={25} color={'#757575'} />
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#757575', fontSize: 12 }}>Gợi ý quán được tín đồ ẩm thực đánh giá 5*</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.flashSale_content}>

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
                                Quán Được Đánh Giá Tốt</Text>
                        </View>
                        <View style={styles.flashSale_header_right}>
                            <Text>Xem tất cả</Text>
                            <MaterialIcons name='navigate-next' size={25} />
                        </View>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.flashSale_content}>

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
                                Quán Ngon Lâu Đời</Text>
                        </View>
                        <View style={styles.flashSale_header_right}>
                            <Text>Xem tất cả</Text>
                            <MaterialIcons name='navigate-next' size={25} />
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#757575', fontSize: 12 }}>Đặt ngay những quán ngon lâu đời</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.flashSale_content}>

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