import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './ProductDetail.style'

const ProductDetail = () => {
  return (
    <ScrollView style={styles.detailContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
        <View />
      </View>
      <View style={styles.detailsContainer}>
        {/* Product Images */}
        <ScrollView horizontal style={styles.imageContainer}>
            <Image style={styles.productDImage} source={require('../../../../assets/product/prod_1.jpeg')} />
        </ScrollView>
        {/* Product Details */}
        <View style={styles.productDetails}>
            <Text style={styles.productDName}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
            <View style={styles.productDWrapperTitle}>
                <Text style={styles.producDSale} >SALE: Giảm giá 15%</Text>
            </View>
            <Text style={styles.productDPrice}>Price: 100.000đ</Text>
            <Text style={styles.productDStatus}>Trạng thái: Còn hàng</Text>
            <Text style={styles.productDQuantity}>Số lượng : 10</Text>
            {/* Thêm giỏ hàng */}
            <View style={styles.buttonDContainer}></View>
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.addToCartButtonText}>Mua Ngay</Text>
              </TouchableOpacity>
        </View>
      </View>
      {/* Mô tả */}
      <View style={styles.descContainer}>
         <Text style={styles.descTitle}>Mô tả sản phẩm</Text>
         <Text style={styles.productDDescription}>Mô tả Mô tả Mô tả Mô tả Mô tả Mô tả Mô tả Mô tả Mô tả
         Mô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tả Mô tả
         Mô tảMô tảMô tảMô tảMô tảMô tảvv Mô tả Mô tả Mô tả Mô tả Mô tảvMô tả v Mô tả Mô tảMô tảMô tả Mô tảMô tảMô tả
         Mô tảMô tảv Mô tả Mô tảMô tảvMô tảv vMô tảv vMô tả Mô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tả Mô tả
         Mô tảMô tảMô tảMô tảMô tảMô tảvv Mô tả Mô tả Mô tả Mô tả Mô tảvMô tả v Mô tả Mô tảMô tảMô tả Mô tảMô tảMô tả
         Mô tảMô tảv Mô tả Mô tảMô tảvMô tảv vMô tảv vMô t
         </Text> 
      </View>
      {/* Reviews*/}
      <View style={styles.reviewContainer}>
         <Text style={styles.reviewTitle}>Đánh giá sản phẩm</Text>
         <View style={styles.reviewContent}>
            <Image style={styles.reviewAvatar} source={require('../../../../assets/product/prod_1.jpeg')} />
            <View style={styles.reviewTextWrapper}>
                <Text style={styles.reviewUser} >User 69</Text>
                <Text style={styles.reviewText} >Cơm khá ngon nhưng phần canh hơi ngấy, còn lại thì thịt và cơm rất ngon</Text>
            </View>
         </View>

         <View style={styles.reviewContent}>
            <Image style={styles.reviewAvatar} source={require('../../../../assets/product/prod_1.jpeg')} />
            <View style={styles.reviewTextWrapper}>
                <Text style={styles.reviewUser} >User 69</Text>
                <Text style={styles.reviewText} >Cơm khá ngon nhưng phần canh hơi ngấy, còn lại thì thịt và cơm rất ngon</Text>
                <Text style={styles.reviewTime} >T6 12h:45</Text>
            </View>
         </View>

         <View style={styles.reviewContent}>
            <Image style={styles.reviewAvatar} source={require('../../../../assets/product/prod_1.jpeg')} />
            <View style={styles.reviewTextWrapper}>
                <Text style={styles.reviewUser} >User 69</Text>
                <Text style={styles.reviewText} >Cơm khá ngon nhưng phần canh hơi ngấy, còn lại thì thịt và cơm rất ngon</Text>
            </View>
         </View>
      </View>
      {/* Sản phẩm liên quan */}
      <View style={styles.flashSaleContainer}>
        <View style={styles.flashSale_header}>
            <View style={styles.flashSale_header_left}>
                <Text style={styles.flashSale_textBold}>
                  <Text/>Sản phẩm liên quan</Text>
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
    </ScrollView>
  );
};

export default ProductDetail;
