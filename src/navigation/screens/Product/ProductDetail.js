import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './ProductDetail.style'

const FlashSaleTimer = () => {
  return (
    <View style={styles.timerContainer}>
      <View style={styles.timerBox}>
        <Text style={styles.timerText}>02</Text>
      </View>
      <Text style={styles.timerDivider}>:</Text>
      <View style={styles.timerBox}>
        <Text style={styles.timerText}>40</Text>
      </View>
      <Text style={styles.timerDivider}>:</Text>
      <View style={styles.timerBox}>
        <Text style={styles.timerText}>45</Text>
      </View>
    </View>
  );
};

const ProductDetail = () => {
  return (
    <ScrollView style={styles.prodDContainer}>
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
        <View style={styles.productDWrapperTitle}>
            <View style={styles.flashSale_header}>
                <View style={styles.flashSale_header_left}>
                    <Text style={styles.flashSale_textBold}>
                        <MaterialCommunityIcons name='lightning-bolt' size={15} color={'white'} />
                    FLASH SALE</Text>
                </View>
                <View style={styles.flashSale_header_right}>
                  <Text style={styles.flashSale_text}>Đã bán : 8</Text>
                </View>
            </View>
            <View style={styles.flashSale_header}>
                <View style={styles.flashSale_header_left}>
                  <Text style={styles.productDPrice}>100.000đ</Text>
                </View>
                <View style={styles.flashSale_header_right}>
                  <Text style={styles.flashSale_text1}>KẾT THÚC TRONG
                  <FlashSaleTimer/>
                  </Text>
                </View>
            </View>
        </View>
        <View style={styles.productDetails}>
            <Text style={styles.productDName}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
            <Text style={styles.productDDescription}>Mô tả Mô tả Mô tả Mô tả Mô tả Mô tả Mô tả Mô tả Mô tả
         Mô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tảMô tả Mô tả
         Mô tảMô tảMô tảMô tảMô tảMô tảvv Mô tả Mô tả Mô tả Mô tả Mô tảvMô tả v Mô tả Mô tảMô tảMô tả Mô tảMô tảMô tả
         Mô tảMô tảv Mô tả
            </Text> 
            <View style={styles.detailTextWrapper}>
              <Text style={styles.productDSold}>100 đã bán</Text>
              <View style={styles.verticalDivider} />
              <Text style={styles.productDLikes}>106 lượt thích</Text>
              <View style={styles.verticalDivider} />
              <Text style={styles.productDQuantity}>Còn 1 phần</Text>
            </View>
            {/* Thêm giỏ hàng */}
            <View style={styles.buttonDContainer}></View>
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.addToCartButtonText}>Mua Ngay</Text>
              </TouchableOpacity>
        </View>
      </View>
      <View style={styles.horizontalDivider}/>
      {/* Reviews*/}
      <View style={styles.reviewContainer}>
         <Text style={styles.reviewTitle}>Đánh giá</Text>
           {/* Reviews content*/}
         <View style={styles.reviewContent}>
          <View style={styles.userInfo}>
            <Image style={styles.reviewAvatar} source={require('../../../../assets/product/prod_1.jpeg')} />
            <Text style={styles.reviewUser} >User 69</Text>
          </View>
          <View style={styles.reviewTextWrapper}>
              <Text style={styles.reviewText} >Cơm khá ngon nhưng phần canh hơi ngấy, còn lại thì thịt và cơm rất ngon</Text>
              <Text style={styles.reviewTime} >12:30 24/12</Text>
          </View>
         </View>
         <View style={styles.reviewContent}>
          <View style={styles.userInfo}>
            <Image style={styles.reviewAvatar} source={require('../../../../assets/product/prod_1.jpeg')} />
            <Text style={styles.reviewUser} >User 69</Text>
          </View>
          <View style={styles.reviewTextWrapper}>
              <Text style={styles.reviewText} >Cơm khá ngon nhưng phần canh hơi ngấy, còn lại thì thịt và cơm rất ngon</Text>
              <Text style={styles.reviewTime} >12:30 24/12</Text>
          </View>
         </View>
         <View style={styles.reviewContent}>
          <View style={styles.userInfo}>
            <Image style={styles.reviewAvatar} source={require('../../../../assets/product/prod_1.jpeg')} />
            <Text style={styles.reviewUser} >User 69</Text>
          </View>
          <View style={styles.reviewTextWrapper}>
              <Text style={styles.reviewText} >Cơm khá ngon nhưng phần canh hơi ngấy, còn lại thì thịt và cơm rất ngon</Text>
              <Text style={styles.reviewTime} >12:30 24/12</Text>
          </View>
         </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
