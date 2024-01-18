import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dropCapContainer}>
        <Text style={styles.dropCap}>Y</Text>
      </View>
      <View style={styles.storeInfoContainer}>
        <Text style={styles.storeName}>
          êu thích - Tên cửa hàng dài xuống dòng dfgsg fsdf dfsd dfsdgf dgsdg dgfsdgsd ds 
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
  },
  dropCapContainer: {
    marginRight: 8,
  },
  dropCap: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
  },
  storeInfoContainer: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    // Các thuộc tính kiểu dáng khác tùy thuộc vào thiết kế của bạn
  },
});

export default StoreItem;