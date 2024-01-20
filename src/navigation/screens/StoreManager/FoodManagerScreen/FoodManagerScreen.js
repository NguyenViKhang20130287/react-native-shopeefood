import styles from "./FoodManager.style.";

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Pressable,Modal,Switch} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import AddProductPopup from "./AddProductPopup";
import EditProducPopup from "./EditProducPopup";


export default function FoodManagerScreen({}){
    const [isAddVisible, setIsAddVisible] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false);

    const handleAddPopup = () => {
        setIsAddVisible(!isAddVisible);
    };
    const handleEditnPopup = () => {
        setIsEditVisible(!isEditVisible);
    };
     
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

        <AddProductPopup
        isVisible={isAddVisible}
        onClose={handleAddPopup}
      />
    {/*  food */}
        <View style={styles.food_container}>
            <View style={{flexDirection:'row', width:"100%"}}>
                <View style={styles.popularTextCont}>
                    <Text style={styles.popularText}>71 Sản phẩm</Text>
                </View>
                <View style= {styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonAdd} onPress={handleAddPopup}> 
                        <Text style={styles.buttonText}>Thêm sản phẩm</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.prodContainer}>
                {/* produc status */}
                <TouchableOpacity style={styles.prodStatusContainer} onPress={handleEditnPopup}>
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
                <EditProducPopup
                  isVisible={isEditVisible}
                  onClose={handleEditnPopup}
                />
            </View>
        </View>
    </ScrollView>
    )
}