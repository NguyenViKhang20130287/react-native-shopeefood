import styles from "./FoodManager.style.";

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image,Modal,Switch} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons'

const AddProductPopup = ({isVisible,onClose}) => {
    const [isSale, setIsSale] = useState(true);

    const handleSwitchChange = () => {
      setIsSale(!isSale);
    };    
    return (
      <Modal visible={isVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Thêm sản phẩm</Text>

            <Text style={styles.inputLabel}>Tên sản phẩm</Text>
            <TextInput
              style={styles.input}
              placeholder="Điền tên sản phẩm"
              value={'sản phẩm'}
            />
            
            <TouchableOpacity  style={styles.imagePickerButton}>
                <Image  style={styles.imagePreview} source={require("../../../../../assets/product/prod_1.jpeg")} />
                <Text style={styles.imagePickerText}>Chọn ảnh</Text>
            </TouchableOpacity>
            
            <Text style={styles.inputLabel}>Giá</Text>
            <TextInput
              style={styles.input}
              placeholder="Điền giá"
              keyboardType="numeric"
              value={"100.000d"} />
            
            <Text style={styles.inputLabel}>Mô tả</Text>
            <TextInput
              style={styles.input}
              placeholder="Điền mô tả"
              multiline
              numberOfLines={3}
              value={""}/>

            <Text style={styles.inputLabel}>Số lượng</Text> 
            <TextInput
              style={styles.input}
              placeholder="Điền số lượng"
              keyboardType="numeric"
              value={'100tr'} />

            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Giảm giá</Text>
              <Switch
                value={isSale}
                onValueChange={handleSwitchChange}
                />
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Text style={{color:'white',fontWeight:'500'}}>Thêm sản phẩm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={{fontWeight:'500'}}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  export default AddProductPopup;