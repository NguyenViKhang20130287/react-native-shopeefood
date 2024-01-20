import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, Pressable } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons'

import styles from "./OrderManagement.style";

export default function OrderManagerScreen({}){
    return(
    <ScrollView>
        <View style={styles.storeStatus}>
            <View style={styles.statusContainer}>
                <Text style={styles.statusNum}>41</Text>
                <Text style={styles.statusTitle}>
                    Đã giao
                </Text>
                <View style={styles.deliveredBorder}></View>
            </View>
            <View style={styles.statusContainer}>
                <Text style={styles.statusNum}>41</Text>
                <Text style={styles.statusTitle}>
                    Đang giao
                </Text>
                <View style={styles.deliveringBorder}></View>
            </View>
            <View style={styles.statusContainer}>
                <Text style={styles.statusNum}>41</Text>
                <Text style={styles.statusTitle}>
                    Đã hủy
                </Text>
                <View style={styles.cancelBorder}></View>
            </View>
        </View>
        <Pressable>
            <View style={styles.searchContainer}>
                <View style={styles.search}>
                    <EvilIcon name='search' size={25} color={'#757587'} />
                    <TextInput editable={true} style={styles.searchInput} placeholder='Tìm kiếm đơn hàng' />
                </View>
            </View>
        </Pressable>
        <View style={styles.food_container}>
            <TouchableOpacity style={styles.prodStatusContainer}>
                <View style={styles.prodImg}>
                    <Image  style={styles.storeImage} source={require("../../../../../assets/product/prod_1.jpeg")}/>
                </View>
                <View style={styles.orderContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.prodSText}>Mã đơn hàng:</Text>
                        <Text style={styles.prodSName}>Cơm gà</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.prodSText}>Tổng giá:</Text>
                        <Text style={styles.prodSPrice}>100.000đ</Text>
                    </View>
                    <View  style={styles.textContainer}>
                        <Text style={styles.prodSText} >Gửi đến: </Text>
                            <Text style={styles.prodSold} numberOfLines={1} ellipsizeMode="tail">142 Ba Đình, P. 10, Quận 8, TP. HCM</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.prodSText}>Trạng thái: </Text>
                        <Text style={styles.prodIsDeliver}>Đã giao</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.prodStatusContainer}>
                <View style={styles.prodImg}>
                    <Image  style={styles.storeImage} source={require("../../../../../assets/product/prod_1.jpeg")}/>
                </View>
                <View style={styles.orderContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.prodSText}>Mã đơn hàng:</Text>
                        <Text style={styles.prodSName}>Cơm gà</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.prodSText}>Tổng giá:</Text>
                        <Text style={styles.prodSPrice}>100.000đ</Text>
                    </View>
                    <View  style={styles.textContainer}>
                        <Text style={styles.prodSText} >Gửi đến: </Text>
                            <Text style={styles.prodSold} numberOfLines={1} ellipsizeMode="tail">142 Ba Đình, P. 10, Quận 8, TP. HCM</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.prodSText}>Trạng thái: </Text>
                        <Text style={styles.prodIsCancel}>Đã Hủy</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.prodStatusContainer}>
                <View style={styles.prodImg}>
                    <Image  style={styles.storeImage} source={require("../../../../../assets/product/prod_1.jpeg")}/>
                </View>
                <View style={styles.orderContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.prodSText}>Mã đơn hàng:</Text>
                        <Text style={styles.prodSName}>Cơm gà</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.prodSText}>Tổng giá:</Text>
                        <Text style={styles.prodSPrice}>100.000đ</Text>
                    </View>
                    <View  style={styles.textContainer}>
                        <Text style={styles.prodSText} >Gửi đến: </Text>
                            <Text style={styles.prodSold} numberOfLines={1} ellipsizeMode="tail">142 Ba Đình, P. 10, Quận 8, TP. HCM</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.prodSText}>Trạng thái: </Text>
                        <Text style={styles.prodIsDelivering}>Đang giao</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </ScrollView>
    )
}