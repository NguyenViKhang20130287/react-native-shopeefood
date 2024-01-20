import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff'
    },
    searchInputContainer: {
        // paddingTop: 30,
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
        width: '90%',
        fontSize: 16,
        marginRight: 10,

    },
    searchCancel: {
        padding: 10,
    },
    searchCancelText: {
        color: '#F95030',
        fontWeight: '500',

    },
    //
    historyInputContainer: {
        backgroundColor: '#fff'
    },
    historyInput: {
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    historyInputText: {
        paddingVertical: 10,
    },

    // 
    popularContainer: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    popularTitle: {
        fontWeight: '500'
    },

    popularListFood: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    popularListFoodLeft: {
        flex: 1,
    },
    popularListFoodRight: {
        flex: 1
    },
    popularItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    popularItemName: {
    },
    popularItemNameText: {

    },
    popularItemWrapper: {

    },
    popularItemImage: {
        width: 60,
        height: 60
    },
    //Search Result
    searchRContainer: {
        backgroundColor: 'white',
    },
    topzone: {
        paddingHorizontal: 2,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    // search box
    searchContainer: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search: {
        width: 330,
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 4,
        backgroundColor: '#ffffff',
        borderRadius: 3,
        alignItems: 'center',
    },
    arrowBack: {
        // paddingTop : 6,
        paddingRight: 5
    },
    //search filter 
    searchFilterContainer: {
        flexDirection: 'row',
    },
    orderBy: {
        flexDirection: 'row',
        margin: 5,
        borderColor: 'white',
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: '#f2f2f2'
    },
    filterSearch: {
        margin: 5,
        borderColor: 'white',
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor: '#f2f2f2'
    },
    filterText: {
        padding: 5,
        fontSize: 16
    },
    //OrderByFilter
    filterOrderBy: {
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'white',
        marginTop: 90
    },
    orderSelection: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
    orderSelected: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        backgroundColor: '#f2f2f2'
    },
    orderTextSelect: {
        padding: 5,
        fontSize: 16
    },
    // 
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
})

export default styles