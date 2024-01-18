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
    // // marginTop: 10,
    // backgroundColor: '#fff',
  },
  sImageContainer: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
  },
  shopImage: {
    alignSelf: 'center',
    minWidth: 420,
    minHeight: 200,
    resizeMode: 'cover',
  },
  // main shop 
  mainSContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  sTopContent: {
    flexDirection: 'row',
  },
  favorBox: {
    alignSelf: "flex-start",
    padding: 4,
    borderRadius: 3,
    // marginHorizontal: 4,
    backgroundColor: colors.primaryColor,
  },
  favorText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: "#F95030",
    padding: 4,
    borderRadius: 3,
  },
  shopName: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1
  },
  sBotContent: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  // delivery expected
  deliveryContent: {
    flexDirection: "row",
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  deliver: {
    width: '100%',
    flexDirection: 'row',
  },
  deliverPic: {
    width: 45,
    height: 45,
    borderRadius: 99
  },
  dTextContainer: {
    marginHorizontal: 4,
  },
  deliverText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeTextExpect: {
    fontSize: 16,
  },
  changeAddress: {
    width: '29%',
    // marginVertical: 4,
  },
  changeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'right'
  },
  //sale code
  saleContainer: {
    width: '100%',
    flexDirection: "row"
  },
  saleTextContent: {
    // paddingLeft: 3,
    flexDirection: 'column',
    width: '70%',
  },
  saleCodeText: {
    fontSize: 12,
    fontWeight: '500'
  },
  seeAllCode: {
    width: '30%',
  },
  seeAllText: {
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 18,
    color: 'orange'
  },
  //popular products
  pProdsContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    marginTop: 15
  },
  textTitle: {
    color: colors.primaryColor,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cateTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#595959"
  },
  pProds: {
    // paddingLeft: 5,
  },
  pProdContent: {
    marginRight: 10,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#E8E8E8',
    backgroundColor: '#FAFAFA',
    flexDirection: 'row'
  },
  pProdPic: {
    padding: 5,
    width: 95,
    height: 95
  },
  pProdTextCont: {
    // padding: 15,
    marginHorizontal: 10,
    flexDirection: 'column',
    width: 200
  },
  pProdName: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '500',
  },
  pProdPrice: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.primaryColor
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 13,
    color: "#737373"
  },
  //divider
  verticalDivider: {
    // height: '100%',
    width: 1,
    backgroundColor: 'gray',
  },
  horizontalDivider: {
    width: '94%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 6,
  },
  horizontalDivider1: {
    alignSelf: 'center',
    height: 15,
    width: "100%",
    backgroundColor: '#FAFAFA',
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
  },
  prodsContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    padding: 15,
  },
  // products content
  productContent: {
    paddingVertical: 15,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#ffffff",
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  imageContainer: {
  },
  productImage: {
    width: 90,
    height: 90
  },
  producContentContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 15,
    flex: 1,
  },
  producName: {
    fontSize: 17,
    fontWeight: '600'
  },
  productDesc: {
    fontSize: 13,
    fontWeight: '300',
    color: "#757575",
    paddingVertical:5
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
  tabSelected: {
    borderBottomColor: '#4c4c4c'
  },
  //Cate List 
  modalContainer: {
    backgroundColor: 'white',
    width: '100%',
  },
  mainCateContainer: {
    flexDirection: 'column'
  },
  cateOption: {
    width: '100%',
    padding: 9,
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
  cateOptionText: {
    fontSize: 16,
    fontWeight: '400'
  },
  cateAllOption: {
    width: '100%',
    padding: 9,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cateAllOptionText: {
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: '400'
  },
  selectedCateOption: {
    backgroundColor: 'lightgray'
  },
  selectedCateOptionText: {
    fontWeight: 'bold',
    color: colors.primaryColor
  },
  subCateContainer: {
    flexDirection: 'column'
  },
  subCateOption: {
    width: '100%',
    padding: 8,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  subCateOptionText: {
    fontSize: 14,
    fontWeight: '400',
  },
  selectedSubCateOption: {
    backgroundColor: '#323232'
  },
  selectedSubCateOptionText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
export default styles;