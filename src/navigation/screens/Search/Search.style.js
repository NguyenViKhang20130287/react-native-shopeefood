import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff'
    },
    searchInputContainer: {
        paddingTop: 30,
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
        backgroundColor: '#f0f0f0'

    },
    searchCancel: {
        padding: 10
    },
    searchCancelText: {
        color: '#F95030',
        fontWeight: '500'
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
        paddingHorizontal:10,
        paddingVertical:10
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
    }
})

export default styles