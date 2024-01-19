import { StyleSheet } from "react-native";

const colors = {
  primaryColor: '#F95030'
}

const styles = StyleSheet.create({
  //Product Details
  prodDContainer: {
    flex: 1,
    borderColor: '#000',
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 9,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsContainer: {
    width: '100%',
    marginTop: 10,
    backgroundColor: 'white',
    // flexDirection: 'row',
  },
  // flash sale
  productDWrapperTitle: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 2,
  },
  flashSale_header: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  flashSale_header_left: {
    flexDirection: "row",
    alignItems: 'left'
  },
  flashSale_header_left_icon: {
    width: 25,
    height: 25,
    // marginRight: 10
  },
  flashSale_header_right: {
    flexDirection: "row",
    alignItems: 'right'
  },
  flashSale_text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    // marginRight: 20
  },
  flashSale_text1: {
    fontSize: 13,
    fontWeight: '500',
    color: 'white',
    // marginRight: 20
  },
  flashSale_textBold: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    alignSelf: 'center',
    flex: 1,
    backgroundColor: "pink"
  },
  productDImage: {
    alignSelf: 'center',
    minWidth: 400,
    minHeight: 400,
  },
  producDSale: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  productDetails: {
    padding: 10,
  },
  productDName: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 8,
  },
  detailTextWrapper: {
    flexDirection: "row",

  },
  productDSold: {
    fontSize: 14,
    fontWeight: '400',
    color: "#989898"
  },
  productDLikes: {
    fontSize: 14,
    fontWeight: '400',
  },
  productDQuantity: {
    fontSize: 14,
    fontWeight: '400',
    color: 'red'
  },
  productDPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
  },
  productDDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: "#989898",
    marginTop: 10,
    marginBottom: 15
  },
  pProdPrice: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.primaryColor
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: "#737373"
  },
  //flash timer
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerBox: {
    padding: 1,
    borderRadius: 5,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#fff',
  },
  timerText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
  timerDivider: {
    fontSize: 13,
    fontWeight: '500',
    color: '#fff',
  },
  // divider
  horizontalDivider: {
    width: '94%',
    alignSelf: 'center',
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 6,
  },
  verticalDivider: {
    height: '100%',
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },
  //add to cart and buy button
  buttonDContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  // Review Detail
  reviewContainer: {
    padding: 10,
    width: '100%',
    backgroundColor: 'white'
  },
  reviewTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: "#757575"
  },
  reviewContent: {
    marginTop: 3,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  userInfo: {
    width: '100%',
    flexDirection: 'row'
  },
  reviewAvatar: {
    marginHorizontal: 4,
    width: 25,
    height: 25,
    borderRadius: 99
  },
  reviewUser: {
    marginHorizontal: 4,
    fontSize: 16,
    fontWeight: '500',
  },
  reviewTextWrapper: {
    width: "100%",
    flexDirection: 'column',
    paddingLeft: 38
  },
  reviewText: {
    fontSize: 14,
    fontWeight: '500',
  },
  reviewTime: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '400',
  },
  reviewStar: {
    paddingLeft: 8,

  },
  history_blank: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50

  },
  noOrderImage: {
    height: 100,
    width: 100,
    tintColor: 'orange'
  },
  blank_heading: {
    marginTop: 10,
    fontSize: 17,
    marginHorizontal: 40,
    color: '#595959',
    fontWeight: "500",
    textAlign: "center"
  },
  blank_info: {
    marginTop: 10,
    marginHorizontal: 40,
    textAlign: 'center',
    color: '#757575'
  },
  orderButton: {
    borderColor: "#BCBEBD", 
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginTop: 20,
    borderRadius: 3
  }
})
export default styles;