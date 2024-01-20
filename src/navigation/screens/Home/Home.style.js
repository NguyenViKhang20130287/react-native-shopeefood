import { StyleSheet } from "react-native";

const colors = {
    primaryColor: '#F95030'
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        borderColor: '#000',
        backgroundColor: '#f0f0f0',
    },

    topzone: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        paddingTop: 15,
        backgroundColor: '#fff',
    },

    centerzone: {
        // flex: 12,
    },

    // address
    addressContainer: {
    },

    address: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    addressText: {
        flexShrink: 1,
        width: '85%',
        fontSize: 15
    },

    // search box
    searchContainer: {
        marginTop: 10,
        paddingHorizontal: 5
    },

    search: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 5,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        borderRadius: 3,
    },
    searchInput: {
        width: '95%',
        paddingHorizontal: 5,
        fontSize: 16
    },

    // slider
    sliderContainer: {

    },

    SlideImage: {
        height: 150,
        width: '100%',
    },

    // category
    categoryContainer: {
        paddingVertical: 15,
        backgroundColor: '#fff',
    },
    cateIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cateImg: {
        height: 35,
        width: 35,
        marginBottom: 10
    },
    iconText: {
        fontSize: 12
    },
    iconContainer: {
        marginBottom: 20,
        flex: 1,
        alignItems: 'center',
    },

    //
    flashSaleContainer: {
        marginTop: 14,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    flashSale_header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    flashSale_header_left: {
        flexDirection: "row"
    },
    flashSale_header_left_icon: {
        width: 25,
        height: 25,
        marginRight: 10
    },
    flashSale_textBold: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F95030'
    },
    flashSale_header_right: {
        flexDirection: "row",
        alignItems: 'center'
    },

    // products
    flashSale_content: {
        // paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    flashSale_product: {
        width: 131,
        overflow: 'hidden',
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: '#E3E3E3',
    },
    flashSale_imageContainer: {

    },
    flashSale_image: {
        width: 130,
        height: 130,
    },

    flashSale_contentContainer: {
        backgroundColor: '#FAFAFA',
        padding: 10
    },
    flashSale_name: {
        fontSize: 14,
        fontWeight: '500',
    },
    flashSale_price: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: '#F95030',
        marginBottom: 7,
        fontWeight: 'bold'
    },
    flashSale_wrapperTitle: {
        backgroundColor: colors.primaryColor,
        borderRadius: 999,
        paddingVertical: 2,

    },
    flashSale_title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase'
    }
    ,
    topRating_wrapperTitle: {
        marginTop: 15,
        flexDirection: 'row',
    },
    topRating_title: {
        borderWidth: 0.5,
        color: colors.primaryColor,
        fontSize: 10,
        borderRadius: 2,
        borderColor: colors.primaryColor,
        paddingHorizontal: 5,
        paddingVertical: 3
    },




    food_container: {
        paddingHorizontal: 10,
        fontWeight: "500",
        backgroundColor: 'white'
    },
    food: {
        marginTop: 15,
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: '#E8E8E8'
    },

    image: {
        marginBottom: 15,
    },

    foods_image: {
        width: 100,
        height: 100,
    },

    details: {
        flex: 1
        // marginLeft: 10,
    },

    food_name: {
        marginLeft: 5,
        // justifyContent: "center",
        // fontSize: 50,
        // fontWeight: "600",
    },
    food_tilte: {
        paddingLeft: 5,
        fontSize: 16,
        fontWeight: "500",
    },

    rating_text: {
        paddingVertical: 3,
        fontWeight: "400",
        color: "gray",
        marginRight: 8,
    },

    distance_text: {
        paddingVertical: 3,
        marginLeft: 8,
        marginRight: 8,
        fontWeight: "400",
        color: "gray",
    },

    times_text: {
        paddingVertical: 3,
        marginLeft: 8,
        fontWeight: "400",
        color: "gray",
    },
    info: {
        display: "flex",
        flexDirection: "row",
        padding: 5,
        marginLeft: 5,
    },

    distance: {
        flex: 1,
        borderLeftWidth: 0.5,
        borderLeftColor: "gray",
    },

    times: {
        borderLeftWidth: 0.5,
        borderLeftColor: "gray",
    },

});
export default styles;