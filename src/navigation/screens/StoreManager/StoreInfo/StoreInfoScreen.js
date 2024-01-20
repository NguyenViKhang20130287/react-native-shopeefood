import styles from "./Store.style";
import { useState, useRef,useEffect} from "react";
import {Text, View, ScrollView, Image, TouchableOpacity, TextInput,Modal,Button} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default function StoreInfo({}){
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    return(
    <ScrollView>
        <View style={styles.storeContainer}>
            <View style ={styles.storeInfo}>
                <TouchableOpacity>
                     <Image  style={styles.storeImage} source={require("../../../../../assets/product/prod_1.jpeg")}/>
                    <IconEntypo name='camera' size={25} color={'blue'} style= {styles.camera} />
                </TouchableOpacity>
                <View style= {{alignContent:'center',paddingVertical:5,}}>
                    <Text style={styles.storeName}>Quán cơm VKihang</Text>
                </View>
            </View>
            <View  style= {styles.basicInfo}>
                <View style={styles.infoContainer}>
                    <View style={styles.infoTitle}>
                        <Text style={styles.bigTitle}>Thông tin cơ bản</Text>
                    </View>
                    <View style={styles.infoDetail}>
                        <View style={styles.infoContent}>
                            <Text style = {styles.smallTitle}>Tên cửa hàng</Text>
                            <Text style={styles.smallInfo}>Quán cơm VKihang</Text>
                        </View>
                    </View>
                    {/* Lấy tên user (owner của shop) */}
                    <View style={styles.infoDetail}>
                        <View style={styles.infoContent}>
                            <Text style = {styles.smallTitle}>Chủ sở hữu</Text>
                            <Text style={styles.smallInfo}>Nguyễn Vĩ Khang</Text>
                        </View>
                    </View>
                    <View style={styles.infoDetail}>
                        <View style={styles.infoContent}>
                            <Text style = {styles.smallTitle}>Địa chỉ cửa hàng</Text>
                            <Text style={styles.smallInfo}>142 Ba Đình, P. 10, Quận 8, TP. HCM</Text>
                        </View>
                    </View>
                </View>
                {/* <TouchableOpacity onPress={toggleModal} style={styles.changeInfoButton}>
                    <Text style={{fontSize :17, fontWeight:'500', textAlign: 'center'}}>Thay đổi thông tin</Text>
                </TouchableOpacity>
                <Modal visible={isModalVisible} animationType="slide" transparent>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Đổi thông tin của bạn</Text>
                            <TextInput
                            style={styles.input}
                            placeholder="Shop Name"
                            value={"Quán cơm VKihang"}
                            />
                            <Button title="Lưu" onPress={toggleModal} />
                            <Button title="Hủy" onPress={toggleModal} />
                        </View>
                    </View>
                </Modal> */}
            </View>
        </View>
      
    </ScrollView>
    )
}