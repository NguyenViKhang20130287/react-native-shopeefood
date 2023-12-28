import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useState } from 'react';
import { Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Image } from 'react-native';
import FavoriteItem from '../../components/FavoriteItem';

export default function LikesScreen({ navigation }) {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'latest', title: 'Mới nhất' },
        { key: 'near', title: 'Gần tôi' },
    ]);

    const [hasData, setHasData] = useState(false);

    const renderTabBar = props => {
        const [isOpen, setIsOpen] = useState(false);
        const [currentValue, setCurrentValue] = useState('dichvu');

        const items = [
            { label: 'Dịch vụ', value: 'dichvu' },
            { label: 'Đồ ăn', value: 'doan' },
            { label: 'Thực phẩm', value: 'thucpham' },
            { label: 'Bia', value: 'bia' },
            { label: 'Hoa', value: 'hoa' },
            { label: 'Siêu thị', value: 'sieuthi' },
            { label: 'Thuốc', value: 'thuoc' },
            { label: 'Thú cưng', value: 'thucung' },
        ];

        const handleItemChange = (item) => {
            if (item && item.value) {
                setCurrentValue(item.value);
                // Không cần set currentValue, chỉ kiểm tra giá trị của item
                if (item.value === 'doan') {
                    // Thực hiện hành động khi chọn 'Đồ ăn'
                    setHasData(true);
                } else {
                    setHasData(false);
                }
            }
        };

        // console.log(hasData);
        console.log(isOpen);

        return (
            <View style={{ position: 'absolute', top: 0, bottom: isOpen ? 0 : 600, left: 0, right: 0, zIndex: 1 }}>
                <TabBar
                    {...props}
                    renderLabel={({ focused, route }) => {
                        return (
                            <Text style={{ color: focused ? 'orangered' : 'black' }}>
                                {route.title}
                            </Text>
                        );
                    }}
                    indicatorStyle={styles.indicatorStyle}
                    style={styles.tabBar}

                />
                <View>
                    <DropDownPicker
                        dropDownContainerStyle={{ borderWidth: 0, borderRadius: 0, }}
                        style={{ backgroundColor: '#F0F0F0', borderWidth: 0, borderRadius: 0, }}
                        items={items}
                        open={isOpen}
                        setOpen={() => setIsOpen(!isOpen)}
                        defaultValue={currentValue}
                        value={currentValue}
                        onSelectItem={(item) => handleItemChange(item)}
                        maxHeight={300}
                        selectedItemLabelStyle={{ color: 'orangered', fontWeight: 500 }}
                        tickIconStyle={{ tintColor: 'orangered' }}
                        listItemContainerStyle={{ borderBottomWidth: 0.5, borderBottomColor: '#ECECEE', height: 50, paddingHorizontal: -20, marginHorizontal: 20 }}
                        disabledStyle={{ opacity: 1 }}
                    />
                </View>
                {isOpen && (<TouchableOpacity
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                    onPress={() => setIsOpen(false)}
                    activeOpacity={1}
                >
                </TouchableOpacity>)}
            </View >
        );
    };

    const LatestRoute = () => {
        if (hasData) {
            return (<ScrollView style={{ position: 'absolute', top: 98, bottom: 0, left: 0, right: 0, zIndex: 1 }}>
                <FavoriteItem
                    foodName={'Steak Bin & Pizza - Dĩ An'}
                    imageURL={require('../../../assets/product/az.jpg')}
                    hashtags={['MãGiảmGiá15%', 'FlashSale']}
                />
                <FavoriteItem
                    foodName={'AZ - Trà sữa & Chè Khúc Bạch - KTX Khu B'}
                    imageURL={require('../../../assets/product/az.jpg')}
                    hashtags={['MãGiảmGiá15%', 'FlashSale']}
                />
                <FavoriteItem
                    foodName={'AZ - Trà sữa & Chè Khúc Bạch - KTX Khu B'}
                    imageURL={require('../../../assets/product/az.jpg')}
                    hashtags={['MãGiảmGiá15%', 'FlashSale']}
                />
                <FavoriteItem
                    foodName={'AZ - Trà sữa & Chè Khúc Bạch - KTX Khu B'}
                    imageURL={require('../../../assets/product/az.jpg')}
                    hashtags={['MãGiảmGiá15%', 'FlashSale']}
                />
               
                <View style={{ paddingVertical: 25, alignItems: 'center', backgroundColor: '#FAFAFA' }}>
                    <Text style={{ color: '#737373' }}>Đã hiển thị tất cả kết quả</Text>
                </View>
            </ScrollView>
            );
        } else {
            return (
                <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                        <Image
                            source={require('../../../assets/food_stall.png')}
                            style={{ width: 120, height: 120, tintColor: 'orange' }}
                        />
                        <Text style={{ marginTop: 10, fontSize: 17, color: '#595959', fontWeight: 500 }}>Yêu Quán từ món đầu tiên</Text>
                        <Text style={{ marginTop: 10, margin: 40, textAlign: 'center', color: '#757575' }}>Món ngon hấp dẫn chiếm trọn trái tim! Thả tim ngay để lưu quán bạn yêu nhé.</Text>
                    </View>
                </View>
            );
        }
    }


    const NearMeRoute = () => {
        return (
            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                    <Image
                        source={require('../../../assets/food_stall.png')}
                        style={{ width: 120, height: 120, tintColor: 'orange' }}
                    />
                    <Text style={{ marginTop: 10, fontSize: 17, color: '#595959', fontWeight: 500 }}>Yêu Quán từ món đầu tiên</Text>
                    <Text style={{ marginTop: 10, margin: 40, textAlign: 'center', color: '#757575' }}>Món ngon hấp dẫn chiếm trọn trái tim! Thả tim ngay để lưu quán bạn yêu nhé.</Text>
                </View>
            </View>
        );
    }

    const renderScene = SceneMap({
        latest: LatestRoute,
        near: NearMeRoute,
    });

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ padding: 10, fontSize: 20, paddingLeft: 25 }}>Yêu thích</Text>
            </View>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { width: '100%', height: '100%', backgroundColor: 'white', flex: 1 },
    tabBar: {
        backgroundColor: 'white',
    },
    indicatorStyle: {
        backgroundColor: 'orangered',
    },
});

