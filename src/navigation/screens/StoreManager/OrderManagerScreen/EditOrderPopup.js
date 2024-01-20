import React from 'react';
import { View, Text, Modal, TouchableOpacity, Switch } from 'react-native';
import styles from "./OrderManagement.style";


const EditOrderPopup = ({ isVisible, onClose }) => {

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Chi tiết đơn hàng</Text>

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Mã đơn hàng:</Text>
            <Text style={styles.value}>Đơn 123</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.rowContainer}>
            <Text style={styles.label}>User:</Text>
            <Text style={styles.value}>Hieudeptrai</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Họ tên:</Text>
            <Text style={styles.value}>Nguyễn Minh Hiếu</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Shipping Address:</Text>
            <Text style={styles.value}>6969 khu phố 3 phường Đẹptraivcl tp của sự đỉnh cao tỉnh suy</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>meail21123@gmail.com</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Số điện thoại:</Text>
            <Text style={styles.value}>0912345678</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Tổng đơn hàng:</Text>
            <Text style={styles.value}>1.000.000đ</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Hình thức thanh toán:</Text>
            <Text style={styles.value}>Tiền mặt</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Giảm giá:</Text>
            <Text style={styles.value}>15%</Text>
          </View>
          <View style={styles.separator} />

          <View style={styles.rowContainer}>
            <Text style={styles.label}>Trạng thái đơn hàng:</Text>
            <Text style={styles.value}>Chưa xác nhận</Text>
          </View>
          <View style={styles.separator} />

          <TouchableOpacity style={styles.confirmButton} >
            <Text style={{ color: 'white', fontWeight: '500' }}>Xác nhận đơn hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} >
            <Text style={{ color: 'white', fontWeight: '500' }}>Hủy đơn hàng</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={{ fontWeight: '500' }}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditOrderPopup;
