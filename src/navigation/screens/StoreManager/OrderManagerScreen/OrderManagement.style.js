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
        marginTop: 6,
        alignSelf:"center",
        width: 70,
        height: 70,
        borderRadius: 99,
    },
    camera:{
        top: "59%",
        position: 'absolute',
        left: '55%',
    },
    storeName:{ 
        textAlign:'center',
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
    //store status
    storeStatus:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginVertical: 10
    },
    statusContainer:{
        width:'28%',
        marginHorizontal:9,
        paddingHorizontal: 12,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    statusNum:{
        paddingTop:5,
        fontSize: 20,
        fontWeight: "bold"
    },
    statusTitle:{
        marginVertical: 5,
        fontSize: 15,
        fontWeight: '500'
    },
    deliveredBorder:{
        width: '50%',
        alignSelf:'center',
        borderBottomColor: 'green',
        borderBottomWidth: 3
    },
    deliveringBorder:{
        width: '50%',
        alignSelf:'center',
        borderBottomColor: 'yellow',
        borderBottomWidth: 3
    },
    cancelBorder:{
        width: '50%',
        alignSelf:'center',
        borderBottomColor: 'red',
        borderBottomWidth: 3
    },
   // food container
   food_container:{
    width:'100%',
    backgroundColor: 'white',
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
    orderContainer: {
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
        paddingRight:2,
        fontWeight:'500'
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
        fontSize: 13,
        paddingVertical: 1,
        color: colors.primaryColor,
        fontWeight:'500'
    },
    prodQuantity:{
        fontSize: 15,
        paddingVertical: 1,
        fontWeight:'bold'
    },
    //trạng thái
    prodIsDeliver:{
        fontSize: 15,
        paddingVertical: 1,
        fontWeight:'bold',
        color:"#00e500",
    },
    prodIsCancel:{
        fontSize: 15,
        paddingVertical: 1,
        fontWeight:'bold',
        color:"#e50000",
    },
    prodIsDelivering:{
        fontSize: 15,
        paddingVertical: 1,
        fontWeight:'bold',
        color:"#e5e500",
    },
    // order pop up
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderColor:'#e1e1e1',
        borderWidth:1,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      inputLabel:{
        paddingLeft: 4,
        paddingBottom: 5,
        fontSize: 15,
        fontWeight: '500'
      },
      rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },
      separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 10,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      value: {
        fontSize: 16,
      },
      confirmButton: {
        backgroundColor: '#3030ff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
      },
      deleteButton: {
        backgroundColor:'#e50000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
      },
      cancelButton: {
        borderColor:'#e1e1e1',
        borderWidth:1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
      },
});
export default styles;