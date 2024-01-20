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
    // store in4
    storeInfo:{
        flexDirection:'column',
        backgroundColor: 'white'
    },
    storeImage:{
        width:'100%',
        height: 150
    },
    storeName:{
        paddingVertical:5,
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        color: colors.primaryColor
    },
    // search box
    searchContainer: {
        marginVertical : 10,
        paddingHorizontal: 5
    },

    search: {
        width: '90%',
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 5,
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderRadius: 4,
    },
    searchInput: {
        width: '90%',
        paddingHorizontal: 5,
        fontSize: 16
    },
    //popular food 
    // food_container:{
    //     width:'100%',
    //     marginTop :5,
    //     backgroundColor: 'white',
    // },
    // food: {
    //     alignSelf:'center',
    //     marginTop: 10,
    //     flexDirection: "column",
    //     borderRadius: 5,
    //     borderColor:'#e1e1e1',
    //     borderWidth: 1,
    //     backgroundColor: 'white'
    // },

    // image: {
    //     // marginBottom: 15,
    // },

    // foods_image: {
    //     width: 105 ,
    //     height: 90,
    //     borderRadius: 5,
    // },

    // details: {
    //     maxWidth: 105
    // },

    // food_name: {

    // },
    // food_tilte: {
    //     paddingLeft :4,
    //     fontSize: 12,
    //     fontWeight: "500",
    //     paddingBottom: 4
    // },
    // info: {
    //     display: "none",
    //     flexDirection: "row",
    //     padding: 3,
    //     marginLeft: 5,
    // },
    // rating_text: {
    //     paddingVertical: 2,
    //     fontSize: 14,
    //     marginRight: 2,
    //     fontWeight: "bold",
    // },
    // order_text: {
    //     paddingVertical: 2,
    //     fontSize: 14,
    //     marginRight: 2,
    //     fontWeight: "bold",
    //     color: colors.primaryColor
    // },

    // food container
    food_container:{
        width:'100%',
        backgroundColor: 'white',
    },
    popularTextCont:{
        width: "60%",
        backgroundColor: 'white'
    },
    popularText:{
        paddingTop: 12,
        paddingLeft: 8,
        fontSize: 20,
        color: colors.primaryColor,
        fontWeight :'bold'
    },

    buttonContainer:{
        padding:8,
        width: '40%',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    buttonAdd:{
        borderRadius: 5,
        backgroundColor: colors.primaryColor,
    },
    buttonText:{
        paddingVertical: 5,
        paddingHorizontal: 8,
        fontSize: 16,
        color: 'white',
        fontWeight :'bold'
    },

    //prod containr
    prodContainer: {
        flexDirection: "column",
        width:'100%',
        alignSelf: 'center',
        margin: 5,
        borderWidth: 1,
        borderColor: '#e1e1e1'
    },
    //product status
    prodStatusContainer: {
        width: '95%',
        marginVertical: 7,
        alignSelf:'center',
        flexDirection: "row",
        backgroundColor: 'white',
        shadowColor:'#e1e1e1',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        shadowRadius:5,
        borderRadius : 10
    },
    prodImg:{
        width: '25%',
        padding: 6,
        marginTop:3
    },
    storeImage:{
        alignSelf :'center',
        width: 75,
        height: 75,
        borderRadius :99
    },
    statusContainer: {
        width: '75%',
        padding: 5,
        flexDirection: "column",
        borderLeftWidth: 1,
        borderLeftColor: '#e1e1e1',
    },
    textContainer:{
        flexDirection: 'row'
    },
    prodSText:{
        fontSize: 14,
        paddingVertical: 1,
        paddingRight:3,
        fontWeight:'bold'
    },
    prodSName:{
        fontSize: 15,
        paddingVertical: 1,
        fontWeight:'bold',
        color: 'green'
    },
    prodSPrice:{
        fontSize: 15,
        paddingVertical: 1,
    },
    prodSold:{
        fontSize: 15,
        paddingVertical: 1,
        fontWeight:'bold',
        color: colors.primaryColor,
    },
    prodQuantity:{
        fontSize: 15,
        paddingVertical: 1,
        fontWeight:'bold'
    },
});
export default styles;