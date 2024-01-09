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
        paddingTop: 20,
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
    }

});
export default styles;