import * as React from "react";
import { useState, useRef,useEffect} from "react";
import { ScrollView, TouchableOpacity, Text, View,FlatList,Image} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from './Product.style'
import { useCallback } from "react";

//Test Data
const categories = [
  {
      name: 'Đồ Ăn',
      subcategories: ['Cơm', 'Canh', 'Cá'],
  },{
      name: 'Nước Uống',
      subcategories: ['Bia', 'Coca', 'Nước Lọc'],
  },{
    name: 'Tráng Miệng',
    subcategories: ['Bia', 'Bánh Kem', 'Kẹo'],
  },{
    name: 'Trà Sữa',
    subcategories: ['Bia', 'Bánh Kem', 'Kẹo'],
  },{
    name: 'Bánh Kem',
    subcategories: ['Bia', 'Bánh Kem', 'Kẹo'],
  }
];
// const CateList =({setShowCateList,selectedTab}) =>{
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const hideCateList = useCallback(() => {
//     setShowCateList(false);
//   }, [setShowCateList]);
//   const handleCategorySelect=(selectedCategory)=>{
//     setSelectedCategory(selectedCategory)
//   };
//   return (
//     <View style={styles.modalContainer}>
//       <View style= {styles.mainCateContainer}>
//         <View style={styles.cateSection}>
//           <TouchableOpacity style={[styles.cateAllOption]}>
//                 <View style={{width:'93%'}}>
//                   <Text style= {[styles.cateAllOptionText]}>Tất cả</Text>
//               </View>
//               <View style={{width:"7%"}} 
//                 onPress={() => {
//                     hideCateList();
//                     handleCategorySelect(null);
//                   }}>
//                 <FontAwesome  name="chevron-up" size={25} 
//                           color={'gray'} style={{marginTop: 1}}/>
//               </View>
//           </TouchableOpacity>
//           {categories.map((category, index) => (
//             <View key={index}>
//               <TouchableOpacity style={[styles.cateOption, selectedCategory === category.name && styles.selectedCateOption]}
//                   onPress={(handleCategorySelect(category.name),
//                   hideCateList)}>
//                   <Text style= {[styles.cateOptionText,selectedCategory === category.name && styles.selectedCateOptionText]}>
//                   {category.name}</Text>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>
//       </View>
//     </View>
//   );}

const ProductTopTab = () => {
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
        padding: 9,
        height: 50,
        backgroundColor: selectedTab === index ? "orangered" : "white",
        borderBottomWidth: 2,
        borderBottomColor: selectedTab === index ? "#4c4c4c" : "transparent",
      }} 
    >
      <Text style={{ color: selectedTab === index ? "white" : "black", fontSize:16,paddingVertical:6,}}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1,}}>
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
          <View key={index} style={{ height: 330, backgroundColor: '#f2f2f2', marginBottom: 10 }}>
            <View style={styles.productContainer}>
              <View style={styles.prodsContainer}>
                <View style={{width:"100%",backgroundColor:"#ffffff"}}>
                  <Text style={styles.textTitle}>{category.name}</Text>
                </View>
                <View style={styles.productContent}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.productImage}source={require('../../../../assets/product/prod_1.jpeg')} />
                    </View>
                    <View style={styles.producContentContainer}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.producName}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                        <Text style={styles.productDesc} numberOfLines={1} ellipsizeMode="tail" >1moo ta moo ta momoa ojoi ho h iaw 12e1edw awdawd 123 da wdawe1231 f fweq  req22e1 fv fwaf awd1 2dqw awaw fa 1 f qafaw 41234 1 f  ag  a3gb     25 31 c1c5235 13v 32513132 m1c 1x1 đ</Text>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.productPrice}>100.000đ</Text>
                            <IconEntypo name="squared-plus" size={25} color={'#F95030'}></IconEntypo>
                        </View>
                    </View>
                </View> 
                <View style={styles.productContent}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.productImage}source={require('../../../../assets/product/prod_1.jpeg')} />
                    </View>
                    <View style={styles.producContentContainer}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.producName}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                        <Text style={styles.productDesc} numberOfLines={1} ellipsizeMode="tail" >1moo ta moo ta momoa ojoi ho h iaw 12e1edw awdawd 123 da wdawe1231 f fweq  req22e1 fv fwaf awd1 2dqw awaw fa 1 f qafaw 41234 1 f  ag  a3gb     25 31 c1c5235 13v 32513132 m1c 1x1 đ</Text>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.productPrice}>100.000đ</Text>
                            <IconEntypo name="squared-plus" size={25} color={'#F95030'}></IconEntypo>
                        </View>
                    </View>
                </View> 
                <View style={styles.productContent}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.productImage}source={require('../../../../assets/product/prod_1.jpeg')} />
                    </View>
                    <View style={styles.producContentContainer}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.producName}>Cơm Ba Ghiên - Nguyễn Văn Trỗi</Text>
                        <Text style={styles.productDesc} numberOfLines={1} ellipsizeMode="tail" >1moo ta moo ta momoa ojoi ho h iaw 12e1edw awdawd 123 da wdawe1231 f fweq  req22e1 fv fwaf awd1 2dqw awaw fa 1 f qafaw 41234 1 f  ag  a3gb     25 31 c1c5235 13v 32513132 m1c 1x1 đ</Text>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.productPrice}>100.000đ</Text>
                            <IconEntypo name="squared-plus" size={25} color={'#F95030'}></IconEntypo>
                        </View>
                    </View>
                </View> 
              </View>
           </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductTopTab;
