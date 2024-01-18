import { StyleSheet } from "react-native";

const colors = {
    primaryColor: '#F95030'
}

const styles = StyleSheet.create({

  container: {
      borderColor: '#000',
      backgroundColor: '#f0f0f0',
  },
  topzone: {
      paddingHorizontal: 5,
      paddingVertical: 10,
      backgroundColor: '#fff',
      // flexDirection: 'row',
    },
  //
  shopContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  sImageContainer: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
  },
  shopImage: {
    alignSelf: 'center',
    minWidth:420,
    minHeight: 200,
    resizeMode: 'cover',
  },
  // main shop 
  mainSContainer:{
    marginVertical: 5,
    width:'100%',
    backgroundColor: 'white',
    flexDirection:'column'
  },
  sTopContent:{
    flexDirection:'row',
  },
  favorBox: {
    padding: 4,
    borderRadius: 3,
    marginHorizontal: 4,
    backgroundColor: colors.primaryColor
  },
  favorText:{
    color:"white",
    fontWeight:'bold',
    fontSize: 14
  },
  shopName:{
    fontSize: 18,
    fontWeight:'bold',
    marginLeft:5,
  },
  sBotContent:{
    marginLeft:5,
    marginTop:4,
    flexDirection:'row'
  },
  // delivery expected
  deliveryContent:{
    backgroundColor:'white',
    width:'100%'
  },
  deliver:{
    width: '100%',
    flexDirection:'row',
  },
  deliverPic:{
    marginHorizontal: 4,
    width: 45,
    height: 45,
    borderRadius : 99
  },
  dTextContainer:{
    marginHorizontal: 4,
  },
  deliverText:{
    fontSize: 16,
    fontWeight: 'bold',
  }, 
  timeTextExpect:{
    fontSize: 16,
  },
  changeAddress:{
    width:'29%',
    marginVertical: 4,
  },
  changeText:{
    fontSize: 16,
    fontWeight: 'bold',
    color :'orange',
    textAlign: 'right'
  },
  //sale code
  saleContainer:{
    width: '100%',
    flexDirection:"row"
  },
  saleTextContent:{
    paddingLeft:3,
    flexDirection:'column',
    width:'70%',
  },
  saleCodeText:{
    fontSize: 12,
    fontWeight:'500'
  },
  seeAllCode:{
    width:'30%',
  },
  seeAllText:{
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 18,
    color:'orange'
  },
  //popular products
  pProdsContainer:{
    width: '100%',
    backgroundColor:'white',
  },
  textTitle:{
    color:colors.primaryColor,
    paddingLeft: 5,
    fontSize: 19,
    fontWeight: 'bold',
  }, 
  pProds:{
    paddingLeft: 5,
  },
  pProdContent:{
    marginRight:6,
    borderRadius: 3,
    borderWidth:1,
    borderColor: '#d3d3d3',
    backgroundColor:'#ededed',
    flexDirection:'row'
  },
  pProdPic: {
    padding:5,
    minWidth:80,
    minHeight:80
  },
  pProdTextCont:{
    paddingRight: 5,
    marginLeft: 10,
    flexDirection:'column',
  },
  pProdName: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '600',
  },
  pProdPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color:colors.primaryColor
  },
  //divider
  verticalDivider: {
    height: '100%',
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  horizontalDivider: {
    width: '94%', 
    alignSelf:'center',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 6,
  },
  horizontalDivider1: {
    width: '94%', 
    alignSelf:'center',
    height: 2,
    backgroundColor: 'gray',
    marginVertical: 15,
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
  // category
  categoryContainer: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: '#fff',
  },
  cateIcon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
  },
  cateImg: {
      height: 40,
      width: 40,
  },
  // products tab cate container
  productContainer: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  prodsContainer:{
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  // products content
  productContent: {
    marginTop:8,
    width: '97%',
    alignSelf:'center',
    flexDirection: 'row',
    backgroundColor:"#ffffff"
  },
  contentWrapper:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    paddingTop: 15  
  },
  imageContainer:{
    width: '27%',
  },
  productImage: {
    width:90,
    height:90
  },
  producContentContainer:{
    paddingVertical:5,
    paddingLeft: 5,
    width:'70%'
  },
  producName: {
      fontSize: 17,
      fontWeight: '600'
  },
  productDesc:{
    fontSize: 14,
    fontWeight: '300',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primaryColor,
  },
  productDiscount: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },
  flashSale_title: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '500',
  },
  // tab categories
  tabSelected:{
    borderBottomColor: '#4c4c4c'
  },
  //Cate List 
  modalContainer:{
    backgroundColor :'white',
    width:'100%',
  },
  mainCateContainer:{
    flexDirection:'column'
  },
  cateOption:{
    width:'100%',
    padding: 9 ,
    borderTopColor:'gray',
    borderTopWidth: 1,
  },
  cateOptionText:{
    fontSize: 16,
    fontWeight:'400'
  },
  cateAllOption:{
    width:'100%',
    padding: 9 ,
    borderTopColor:'gray',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent:'space-between', 
  },
  cateAllOptionText:{
    paddingVertical:5,
    fontSize: 16,
    fontWeight:'400'
  },
  selectedCateOption:{
    backgroundColor:'lightgray'
  },
  selectedCateOptionText:{
    fontWeight:'bold',
    color : colors.primaryColor
  },
  subCateContainer:{
    flexDirection:'column'
  },
  subCateOption:{
    width:'100%',
    padding: 8,
    borderBottomColor:'lightgray',
    borderBottomWidth: 1
  },
  subCateOptionText:{
    fontSize: 14,
    fontWeight:'400',
  },
  selectedSubCateOption:{
    backgroundColor:'#323232'
  },
  selectedSubCateOptionText:{
    color:'white',
    fontWeight:'bold'
  }
});
export default styles;