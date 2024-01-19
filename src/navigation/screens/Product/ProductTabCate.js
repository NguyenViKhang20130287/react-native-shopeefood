import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { ScrollView, TouchableOpacity, Text, View, FlatList, Image, Pressable, TextInput, Modal, Button, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from './Product.style'
import { useCallback } from "react";
import axios from "axios";

const ViewProductOfStoreCategory = ({idStore, idStoreCate}) => {
  console.log(idStoreCate);
  const [products, setProducts] = useState([])
  const api = async () => {
    const response = await axios.get(`http://localhost:8080/api/stores/${idStore}/categories/${idStoreCate}/products`)
    console.log(response.data)
    setProducts(response.data)
  }
  useEffect(()=> {
    api()
  }, [products.id])

  return (
    <View>
      {products.map((item) =>
        <View key={item.id} style={styles.productContent}>
          <View style={styles.imageContainer}>
            <Image style={styles.productImage} source={{uri: item.image}} />
          </View>
          <View style={styles.producContentContainer}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.producName}>{item.title}</Text>
            <Text style={styles.productDesc} numberOfLines={1} ellipsizeMode="tail" >{item.description}</Text>
            <Text style={styles.productDesc} numberOfLines={1} ellipsizeMode="tail" >40 đã bán</Text>
            <View style={styles.contentWrapper}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.oldPrice}>{item.old_price}</Text>
                <Text style={styles.pProdPrice}> {item.current_price}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable><FontAwesome name="minus-square-o" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
                <TextInput keyboardType="numeric" style={{ paddingHorizontal: 6, textAlign: "center" }}>1</TextInput>
                <Pressable><FontAwesome name="plus-square" size={26} color={'#F95030'} style={{}}></FontAwesome></Pressable>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

const ProductTopTab = ({categories}) => {
  console.log(categories)
  const scrollViewRef = useRef(null);
  const [showCateList, setShowCateList] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const toggleCateList = () => {
    setShowCateList(!showCateList);
  };
  const handleCategorySelect = useCallback((index) => {
    setSelectedTab(index);
    if (scrollViewRef.current) {
      scrollToSection(index);
    }
  }, [setSelectedTab, scrollViewRef, scrollToSection]);

  useEffect(() => {
    scrollToSection(selectedTab);
  }, [selectedTab]);

  const scrollToSection = (index) => {
    if (scrollViewRef.current) {
      const yOffset = index * 500;
      scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
    }
  };
  const renderCategoryTab = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => handleCategorySelect(index)}
      style={{
        padding: 10,
        backgroundColor: "white",
        borderBottomWidth: 2,
        borderBottomColor: selectedTab === index ? "#F95030" : "transparent",
      }}
    >
      <Text style={{ color: selectedTab === index ? "#F95030" : "black", fontSize: 15, fontWeight: selectedTab === index ? "500" : "400" }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, }}>
      <View style={{ flexDirection: 'row', backgroundColor: "lightgray" }}>
        <FlatList
          data={categories}
          renderItem={renderCategoryTab}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        {/* <TouchableOpacity onPress={(toggleCateList)} style={{alignContent:'center', backgroundColor:'white', paddingHorizontal: 10}}>
          <FontAwesome  name="chevron-down" size={25} 
                        color={'gray'} style={{display:'flex',marginTop: 10}}/>
        </TouchableOpacity>
        <Modal 
            visible={showCateList}
            animationType="none"
            transparent={true}
            onRequestClose={() => setShowCateList(false)}>
           <CateList
            ref={scrollViewRef}
            setShowCateList={setShowCateList}
            setSelectedTab={setSelectedTab}
            selectedTab = {selectedTab}
            handleCategorySelect={handleCategorySelect}
            />
        </Modal> */}
      </View>
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}>
        {categories.map((category, index) => (
          <View key={index} style={{ backgroundColor: 'white', marginBottom: 2 }}>
            <View style={styles.productContainer}>
              <View style={styles.prodsContainer}>
                <View style={{ backgroundColor: "#ffffff", paddingBottom: 5 }}>
                  <Text style={styles.cateTitle}>{category.name}</Text>
                </View>
                <ViewProductOfStoreCategory idStore={category.store.id} idStoreCate={category.id}/>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductTopTab;
