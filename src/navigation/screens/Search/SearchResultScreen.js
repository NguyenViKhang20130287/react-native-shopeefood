import React from 'react';
import { useState, useRef,useEffect} from "react";

import {Text, View, ScrollView, Image, TouchableOpacity, TextInput,Modal } from 'react-native';

import IconEntypo from 'react-native-vector-icons/Entypo';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import styles from './Search.style'

const SearchFilter = ({ hideSearchFilter }) => {
  const hideFilter = () => {
    hideSearchFilter(false);
  };
  return(
    <View style={styles.filterOrderBy}>
        <TouchableOpacity style={styles.orderSelected} onPress={hideFilter}>
          <Text style={styles.orderTextSelect}> Đúng nhất</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderSelection} onPress={hideFilter}>
          <Text style={styles.orderTextSelect}> Gần tôi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderSelection} onPress={hideFilter}>
          <Text style={styles.orderTextSelect}> Đánh gía</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderSelection} onPress={hideFilter}>
          <Text style={styles.orderTextSelect}> Bán chạy</Text>
        </TouchableOpacity>
      </View>
  );
}

const SearchResultScreen = () => {
  const [searchFilter, setSearchFilter] = useState(false);

  const toggleShowFilter = () => {
    console.log("Toggling showFilter");
    setSearchFilter(!searchFilter);
  };

  return (
    <ScrollView style={styles.searchRContainer}>
        {/* Top */}
        <View style={styles.topzone}>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <MaterialIcons  style={styles.arrowBack} name="arrow-back" size={25} color="black" />
                </TouchableOpacity>
                <View style={styles.search}>
                    <EvilIcon name='search' size={25} color={'#757587'} />
                    <TextInput style={styles.searchInput} placeholder='Ăn vặt thoả thích, Freeship 0Đ' />
                </View> 
            </View>
        </View>
      <View >
      </View>
      {/* Filter */}
      <ScrollView horizontal>
        <View style={styles.searchFilterContainer}>
          <TouchableOpacity style={styles.orderBy} onPress={(toggleShowFilter)} >
            <Text  style= {styles.filterText}>Sắp xếp theo</Text>
            <FontAwesome  name="chevron-down" size={15} color={'black'} style={{display:'flex',marginTop: 10,paddingRight:5}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterSearch }>
            <Text style= {styles.filterText}>Yêu thích </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterSearch }>
            <Text style= {styles.filterText}>FreeShip Extra</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterSearch }>
            <Text style= {styles.filterText}>Đối tác </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
      visible={searchFilter}
      animationType="none"
      transparent={true}
      onRequestClose={() => setSearchFilter(false)}>
        <SearchFilter hideSearchFilter={setSearchFilter} />
      </Modal>
      
      {/* search result  */}
      <ScrollView style={styles.food_container}>
        {/* search result content */}
        <View style={styles.food}>
            <View style={styles.image}>
              <Image
                style={styles.foods_image}
                source={require("../../../../assets/product/prod_1.jpeg")}
              />
            </View>
            <View style={styles.details}>
              <View style={styles.food_name}>
                <Text style={styles.food_tilte}>
                  <Ionicons
                    style={styles.icons}
                    name="shield-checkmark"
                    color={"orange"}
                  ></Ionicons>{" "}
                  Cơm tấm Phúc Lộc Thọ - TPHCM
                </Text>
              </View>
              <View style={styles.info}>
                <View style={styles.rating}>
                  <Text style={styles.rating_text}>
                    <Ionicons style={styles.icons}name="star" color={"orange"}></Ionicons>{" "}4.6  </Text>
                </View>
                <View style={styles.distance}>
                  <Text style={styles.distance_text}>0.2km</Text>
                </View>
                <View style={styles.times}>
                  <Text style={styles.times_text}>15 phút</Text>
                </View>
              </View>
            </View>
        </View>
        <View style={styles.food}>
            <View style={styles.image}>
              <Image
                style={styles.foods_image}
                source={require("../../../../assets/product/prod_1.jpeg")}
              />
            </View>
            <View style={styles.details}>
              <View style={styles.food_name}>
                <Text style={styles.food_tilte}>
                  <Ionicons
                    style={styles.icons}
                    name="shield-checkmark"
                    color={"orange"}
                  ></Ionicons>{" "}
                  Cơm tấm Phúc Lộc Thọ - TPHCM
                </Text>
              </View>
              <View style={styles.info}>
                <View style={styles.rating}>
                  <Text style={styles.rating_text}>
                    <Ionicons style={styles.icons}name="star" color={"orange"}></Ionicons>{" "}4.6  </Text>
                </View>
                <View style={styles.distance}>
                  <Text style={styles.distance_text}>0.2km</Text>
                </View>
                <View style={styles.times}>
                  <Text style={styles.times_text}>15 phút</Text>
                </View>
              </View>
            </View>
        </View>
        <View style={styles.food}>
            <View style={styles.image}>
              <Image
                style={styles.foods_image}
                source={require("../../../../assets/product/prod_1.jpeg")}
              />
            </View>
            <View style={styles.details}>
              <View style={styles.food_name}>
                <Text style={styles.food_tilte}>
                  <Ionicons
                    style={styles.icons}
                    name="shield-checkmark"
                    color={"orange"}
                  ></Ionicons>{" "}
                  Cơm tấm Phúc Lộc Thọ - TPHCM
                </Text>
              </View>
              <View style={styles.info}>
                <View style={styles.rating}>
                  <Text style={styles.rating_text}>
                    <Ionicons style={styles.icons}name="star" color={"orange"}></Ionicons>{" "}4.6  </Text>
                </View>
                <View style={styles.distance}>
                  <Text style={styles.distance_text}>0.2km</Text>
                </View>
                <View style={styles.times}>
                  <Text style={styles.times_text}>15 phút</Text>
                </View>
              </View>
            </View>
        </View>
        <View style={styles.food}>
            <View style={styles.image}>
              <Image
                style={styles.foods_image}
                source={require("../../../../assets/product/prod_1.jpeg")}
              />
            </View>
            <View style={styles.details}>
              <View style={styles.food_name}>
                <Text style={styles.food_tilte}>
                  <Ionicons
                    style={styles.icons}
                    name="shield-checkmark"
                    color={"orange"}
                  ></Ionicons>{" "}
                  Cơm tấm Phúc Lộc Thọ - TPHCM
                </Text>
              </View>
              <View style={styles.info}>
                <View style={styles.rating}>
                  <Text style={styles.rating_text}>
                    <Ionicons style={styles.icons}name="star" color={"orange"}></Ionicons>{" "}4.6  </Text>
                </View>
                <View style={styles.distance}>
                  <Text style={styles.distance_text}>0.2km</Text>
                </View>
                <View style={styles.times}>
                  <Text style={styles.times_text}>15 phút</Text>
                </View>
              </View>
            </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default SearchResultScreen;
