import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Pressable, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './ProductDetail.style'
import { useRoute } from '@react-navigation/core';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

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
  const route = useRoute();
  const id = route.params?.product_id;
  const [product, setProduct] = useState(null);
  const CurrencyFormatter = ({ style, amount }) => {
    const formattedAmount = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);

    return <Text style={style}>{formattedAmount}</Text>;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${id}`);
        const data = response.data;
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [id]);
  return (
    <ScrollView style={styles.prodDContainer}>
      {product && (<View style={styles.detailsContainer}>
        {/* Product Images */}
        <View style={styles.imageContainer}>
          <Image style={styles.productDImage} source={{ uri: product.image }} />
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productDName}>{product.title}</Text>
          {product.description !== "" ? (<Text style={styles.productDDescription}>{product.description} </Text>) : null}
          <View style={styles.detailTextWrapper}>
            <Text style={styles.productDSold}>100 đã bán</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: "#EBEBEB" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {product.old_price > 0 ? (<CurrencyFormatter style={styles.oldPrice} amount={product.old_price} />) : null}
              <CurrencyFormatter style={styles.pProdPrice} amount={product.current_price} />
            </View>
            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Pressable><FontAwesome name="minus-square-o" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
              <TextInput keyboardType='numeric' style={{ paddingHorizontal: 6, textAlign: "center" }}>1</TextInput>
              <Pressable><FontAwesome name="plus-square" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
            </View> */}
          </View>
        </View>

      </View>)}
      < View style={styles.reviewContainer}>
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
            <Text style={{ color: "#999999", fontWeight: '500', fontSize: 17 }}>Đặt món ngay</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView >
  );
};

export default ProductDetail;
