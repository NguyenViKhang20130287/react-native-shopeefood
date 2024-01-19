import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Pressable, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
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
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
        <View />
      </View> */}
      <View style={styles.detailsContainer}>
        {/* Product Images */}
        <View style={styles.imageContainer}>
          <Image style={styles.productDImage} source={{ uri: "https://images.foody.vn/res/g2/11349/s120x120/c6627974-95d3-4fce-94dd-171e7cf9-db02b6e2-231105100733.jpeg" }} />
        </View>
        {/* Product Details */}
        {/* <View style={styles.productDWrapperTitle}>
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
        </View> */}
        <View style={styles.productDetails}>
          <Text style={styles.productDName}>Cơm gà mắm tỏi + 1 Mirinda Cơm gà mắm tỏi + 1 Mirinda</Text>
          <Text style={styles.productDDescription}>Giảm 25K khi đặt combo Mirinda từ 50K. Số lượng có hạn mỗi ngày.
          </Text>
          <View style={styles.detailTextWrapper}>
            <Text style={styles.productDSold}>100 đã bán</Text>
            {/* <View style={styles.verticalDivider} />
            <Text style={styles.productDLikes}>106 lượt thích</Text>
            <View style={styles.verticalDivider} />
            <Text style={styles.productDQuantity}>Còn 1 phần</Text> */}
          </View>

          {/* Thêm giỏ hàng */}
          {/* <View style={styles.buttonDContainer}></View> */}
          {/* <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.addToCartButtonText}>Mua Ngay</Text>
          </TouchableOpacity> */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#EBEBEB" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.oldPrice}>20.000đ</Text>
              <Text style={styles.pProdPrice}> 36.000đ</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable><FontAwesome name="minus-square-o" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
              <TextInput keyboardType='numeric' style={{ paddingHorizontal: 6, textAlign: "center" }}>1</TextInput>
              <Pressable><FontAwesome name="plus-square" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
            </View>
          </View>
        </View>

      </View>
      {/* <View style={styles.horizontalDivider} /> */}
      {/* Reviews*/}
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewTitle}>Bình luận</Text>
        {/* Reviews content*/}
        <View style={styles.history_blank}>
          <View style={styles.blank_image}>
            <Image style={styles.noOrderImage} source={require('../../../../assets/dinner.png')}></Image>
          </View>
          <View>
            <Text style={styles.blank_info}>Chưa có đánh giá</Text>
          </View>
          <View>
            <Text style={styles.blank_info}>Cùng chia sẻ trải nghiệm đặt hàng của bạn với mọi người nhé!</Text>
          </View>
          <Pressable style={styles.orderButton}>
            <Text style={{color: "#999999", fontWeight: '500', fontSize: 17}}>Đặt món ngay</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
