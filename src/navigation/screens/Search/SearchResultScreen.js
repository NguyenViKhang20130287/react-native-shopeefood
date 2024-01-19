import React from 'react';
import { useState, useRef,useEffect} from "react";

import {Text, View, ScrollView, Image, TouchableOpacity, TextInput,Modal } from 'react-native';

import IconEntypo from 'react-native-vector-icons/Entypo';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import styles from './Search.style'
import { useRoute } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import axios from 'axios';

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

const SearchResultScreen = ({navigation}) => {
  const [searchFilter, setSearchFilter] = useState(false);
  const route = useRoute()
  const [searchResult, setSearchResult] = useState(route?.params.search)
  const [listSearch, setListSearch]= useState([])
  const [text, setText] = useState('')

  const toggleShowFilter = () => {
    console.log("Toggling showFilter");
    setSearchFilter(!searchFilter);
  };
  const searchAPI = () => {
    const apiUrl = 'http://localhost:8080/api/stores/search'
    axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        keyword: searchResult
      }
    })
    .then(response=> {
      setListSearch(response.data)
    })
    .catch(error=> {
      console.log('Error:', error);
    })
  }
  const search = () => {
    setSearchResult(text)
  }
  useEffect(()=> {
    searchAPI()
  }, [searchResult])
  return (
    <ScrollView style={styles.searchRContainer}>
        {/* Top */}
        <View style={styles.topzone}>
            <View style={styles.searchContainer}>
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('Home')}>
                    <MaterialIcons  style={styles.arrowBack} name="arrow-back" size={25} color="black" />
                </TouchableWithoutFeedback>
                <View style={styles.search}>
                    {/* <EvilIcon name='search' size={25} color={'#757587'} /> */}
                    <TextInput onSubmitEditing={search} onChangeText={(text)=> setText(text)}
                      style={styles.searchInput} placeholder='Ăn vặt thoả thích, Freeship 0Đ'/>
                    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Search')}>
                      <Ionicons name='close' size={20}/>
                    </TouchableWithoutFeedback>
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
        {listSearch.map((item, index) =>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Store', {id: item.id})}>
            <View key={index} style={styles.food}>
              <View style={styles.image}>
                <Image
                  style={styles.foods_image}
                  source={{ uri: item.image }}
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
                    {item.name}
                  </Text>
                </View>
                <View style={styles.info}>
                  <View style={styles.distance}>
                    <Text style={styles.distance_text} numberOfLines={null}>{item.address}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        
        {/* <View style={styles.food}>
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
        </View> */}
      </ScrollView>
    </ScrollView>
  );
};

export default SearchResultScreen;
