import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './Product.style'


const ProductFilter = ({ applyFilters, setShowFilters }) => {
  
//test data
const categories = [
  {
      name: 'Đồ Ăn',
      subcategories: ['Cơm', 'Canh', 'Cá'],
  },{
      name: 'Nước Uống',
      subcategories: ['Bia', 'Coca', 'Nước Lọc'],
  },{
    name: 'Trấng Miệng',
    subcategories: ['Bia', 'Bánh Kem', 'Kẹo'],
},
];

// const [priceValue, setPriceValue] = useState([0, 1000000]);
const [selectedCategory, setSelectedCategory] = useState(null);
const [selectedSubCategory, setSelectedSubCategory] = useState(null);

const handleCategorySelect = (category) => {
  setSelectedCategory(category);
  setSelectedSubCategory(null);
};

const handleSubCategorySelect = (subCategory) => {
  setSelectedSubCategory(subCategory);
};

  return (
    <View style={styles.modalContainer}>
      <View style= {styles.filtersContainer}>
        <Text style={styles.title}>Lọc sản phẩm</Text>
        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Lọc theo danh mục</Text>
          {categories.map((category, index) => (
            <View key={index}>
               <TouchableOpacity style={[styles.cateOption, selectedCategory === category.name && styles.selectedCateOption]}
              onPress={() => handleCategorySelect(category.name)}>
            <Text style= {[styles.cateOptionText,selectedCategory === category.name && styles.selectedCateOptionText]}>
              {category.name}</Text>
          </TouchableOpacity>
          {selectedCategory === category.name && (
            <View style={styles.subCateContainer}>
              <View style={styles.subTextContainer}><Text style={styles.subFilterTitle}>Lọc theo danh mục con</Text></View>
              {category.subcategories.map((subCategory, subIndex) => (
                <TouchableOpacity
                  key={subIndex}
                  style={[
                    styles.subCateOption,
                    selectedSubCategory === subCategory && styles.selectedCateOption,
                  ]}
                  onPress={() => handleSubCategorySelect(subCategory)}>
                  <Text style={[styles.subCateOptionText, selectedSubCategory === subCategory && styles.selectedCateOptionText]}>
                    {subCategory}
                  </Text>
                </TouchableOpacity>
                  ))}
              </View>
            )}
            </View>
          ))}
        </View>
        <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>Khoảng giá: 0đ - 1000000đ</Text>
              <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1000000}
              step={1000}
              value={0}
              // onValueChange={(values) => setPriceValue(values)}
              // onSlidingComplete={applyPriceFilter}
              />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
            <Text style={styles.buttonText}>Áp dụng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetButton} onPress={() => setShowFilters(false)}>
            <Text style={styles.buttonText}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
  

export default ProductFilter;