import styles from "./FoodManager.style.";
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Pressable } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


// popular food lấy 3 sản phẩm chỉ hiện ảnh với tên
// const PopularFood = () =>{
//     return(

//         <View style={{width:'100%', flex: 1, flexDirection: 'row', marginVertical: 5,justifyContent: 'space-evenly'}}>
//            <View style={styles.food}>
//                 <View style={styles.image}>
//                     <Image
//                         style={styles.foods_image}
//                         source={require("../../../../../assets/product/prod_1.jpeg")}/>
//                 </View>
//                 <View style={styles.details}>
//                     <View style={styles.food_name}>
//                         <Text style={styles.food_tilte}> Cơm tấm Phúc Lộc Thọ - TPHCM  </Text>
//                     </View>
//                     <View style={styles.info}>
//                         <View style={styles.rating}>
//                             <Text style={styles.rating_text}>
//                                 <Ionicons style={styles.icons}name="star" color={"orange"}></Ionicons>{" "}4.6  </Text>
//                             </View>
//                         <View style={styles.rating}>
//                            <Text style={styles.order_text}>15 đơn</Text>
//                         </View>
//                     </View>
//                 </View>
//            </View>
//            <View style={styles.food}>
//                 <View style={styles.image}>
//                     <Image
//                         style={styles.foods_image}
//                         source={require("../../../../../assets/product/prod_1.jpeg")}/>
//                 </View>
//                 <View style={styles.details}>
//                     <View style={styles.food_name}>
//                         <Text style={styles.food_tilte}> Cơm tấm Phúc Lộc Thọ - TPHCM  </Text>
//                     </View>
//                     <View style={styles.info}>
//                         <View style={styles.rating}>
//                             <Text style={styles.rating_text}>
//                                 <Ionicons style={styles.icons}name="star" color={"orange"}></Ionicons>{" "}4.6  </Text>
//                             </View>
//                         <View style={styles.rating}>
//                            <Text style={styles.order_text}>15 đơn</Text>
//                         </View>
//                     </View>
//                 </View>
//            </View>
//            <View style={styles.food}>
//                 <View style={styles.image}>
//                     <Image
//                         style={styles.foods_image}
//                         source={require("../../../../../assets/product/prod_1.jpeg")}/>
//                 </View>
//                 <View style={styles.details}>
//                     <View style={styles.food_name}>
//                         <Text style={styles.food_tilte}> Cơm tấm Phúc Lộc Thọ - TPHCM  </Text>
//                     </View>
//                     <View style={styles.info}>
//                         <View style={styles.rating}>
//                             <Text style={styles.rating_text}>
//                                 <Ionicons style={styles.icons}name="star" color={"orange"}></Ionicons>{" "}4.6  </Text>
//                             </View>
//                         <View style={styles.rating}>
//                            <Text style={styles.order_text}>15 đơn</Text>
//                         </View>
//                     </View>
//                 </View>
//            </View>
//         </View>
//     );
// }
export default function FoodManagerScreen({}){
    return(
    <ScrollView>
        <View style={styles.storeContainer}>
            <Pressable>
                <View style={styles.searchContainer}>
                    <View style={styles.search}>
                        <EvilIcon name='search' size={25} color={'#757587'} />
                        <TextInput editable={true} style={styles.searchInput} placeholder='Tìm kiếm sản phẩm' />
                    </View>
                </View>
            </Pressable>
        </View>
      
    {/*  food */}
        <View style={styles.food_container}>
            <View style={{flexDirection:'row', width:"100%"}}>
                <View style={styles.popularTextCont}>
                    <Text style={styles.popularText}>71 Sản phẩm</Text>
                </View>
                <View style= {styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonAdd}> 
                        <Text style={styles.buttonText}>Thêm sản phẩm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
            <View style={styles.prodContainer}>
                {/* produc status */}
                <TouchableOpacity style={styles.prodStatusContainer}>
                    <View style={styles.prodImg}>
                        <Image  style={styles.storeImage} source={require("../../../../../assets/product/prod_1.jpeg")}/>
                    </View>
                    <View style={styles.statusContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.prodSText}>Tên sản phẩm:</Text>
                            <Text style={styles.prodSName}>Cơm gà</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.prodSText}>Giá:</Text>
                            <Text style={styles.prodSPrice}>100.000đ</Text>
                        </View>
                        <View  style={styles.textContainer}>
                            <Text style={styles.prodSText} 
                            numberOfLines={1} ellipsizeMode="tail">
                                Đã bán: </Text>
                                <Text style={styles.prodSold}>15</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.prodSText}>Số lượng: </Text>
                            <Text style={styles.prodQuantity}>15</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.prodStatusContainer}>
                    <View style={styles.prodImg}>
                        <Image  style={styles.storeImage} source={require("../../../../../assets/product/prod_1.jpeg")}/>
                    </View>
                    <View style={styles.statusContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.prodSText}>Tên sản phẩm:</Text>
                            <Text style={styles.prodSName}>Cơm gà</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.prodSText}>Giá:</Text>
                            <Text style={styles.prodSPrice}>100.000đ</Text>
                        </View>
                        <View  style={styles.textContainer}>
                            <Text style={styles.prodSText} 
                            numberOfLines={1} ellipsizeMode="tail">
                                Đã bán: </Text>
                                <Text style={styles.prodSold}>15</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.prodSText}>Số lượng: </Text>
                            <Text style={styles.prodQuantity}>15</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.prodStatusContainer}>
                    <View style={styles.prodImg}>
                        <Image  style={styles.storeImage} source={require("../../../../../assets/product/prod_1.jpeg")}/>
                    </View>
                    <View style={styles.statusContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.prodSText}>Tên sản phẩm:</Text>
                            <Text style={styles.prodSName}>Cơm gà</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.prodSText}>Giá:</Text>
                            <Text style={styles.prodSPrice}>100.000đ</Text>
                        </View>
                        <View  style={styles.textContainer}>
                            <Text style={styles.prodSText} 
                            numberOfLines={1} ellipsizeMode="tail">
                                Đã bán: </Text>
                                <Text style={styles.prodSold}>15</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.prodSText}>Số lượng: </Text>
                            <Text style={styles.prodQuantity}>15</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    )
}