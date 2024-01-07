import { StyleSheet } from "react-native";

const colors = {
    primaryColor: '#F95030'
}

const styles = StyleSheet.create({
    //Product Details
detailContainer:{
    flex: 1,
    borderColor: '#000',
    backgroundColor: '#f0f0f0',
    // backgroundColor: "#fff", 
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
  detailsContainer:{
    width: '100%',
    marginTop: 10,
    backgroundColor: 'white',
    // flexDirection: 'row',
  },
  imageContainer: {
    alignSelf: 'center',
    height: 200,
    marginTop: 10,
    padding: 5,
  },
  productDImage: {
    minWidth: 370,
    minHeight: 200,
    alignSelf: 'center',
    borderRadius: 5,
  },
  productDetails: {
    padding: 10,
  },
  productDName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  productDStatus: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  productDQuantity: {
    fontSize: 16,
    fontWeight: '500',
  },
  productDPrice:{
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  productDDescription: {
    fontSize: 14,
    marginBottom: 5,
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
    marginBottom: 5
  },
  // Description Detaul
  descContainer:{
    marginTop: 10,
    backgroundColor : 'white',
    width: '100%',
  },
  descTitle:{
    fontSize: 18,
    fontWeight: '600',
    padding: 8,
  }, 
  productDDescription:{
    paddingLeft: 8,
    fontSize: 14,
    paddingBottom:5
  },
  productDWrapperTitle: {
    backgroundColor: colors.primaryColor,
    borderRadius: 999,
    paddingVertical: 2,
    marginBottom: 5
  },
  producDSale: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  // Review Detail
  reviewContainer:{
    marginTop: 10,
    paddingBottom: 15,
    backgroundColor : 'white',
    width: '100%',
  },
  reviewTitle:{
    fontSize: 18,
    fontWeight: '600',
    padding: 8,
  }, 
  reviewContent:{
    marginTop: 6,
    width: '97%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'orange',
    borderRadius :5
  },
  reviewAvatar:{
    padding: 8,
    width: 60,
    height: 60,
    borderRadius : 5
  }, 
  reviewTextWrapper:{
    paddingVertical: 4,
    marginLeft:5,
    alignContent:'top'
  },
  reviewUser:{
    fontSize: 16,
    fontWeight: '600',
  }, 
  reviewText:{
    marginTop: 3,
    fontSize: 14,
    fontWeight: '500',
  },
  reviewTime:{
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '400',
  },
  reviewStar:{
    paddingLeft: 8,
    
  },
  // related product
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
  flashSale_content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  flashSale_product: {
      width: 110,
      overflow: 'hidden',
      marginRight: 10
  },
  flashSale_imageContainer: {

  },
  flashSale_image: {
      width: 110,
      height: 110,
  },

  flashSale_contentContainer: {

  },
  flashSale_name: {
      fontSize: 13,
      fontWeight: '500'
  },
  flashSale_price: {
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '500',
      color: '#F95030',
  },
  flashSale_wrapperTitle: {
      backgroundColor: colors.primaryColor,
      borderRadius: 999,
      paddingVertical: 2

  },
  flashSale_title: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '500',
  },
})
export default styles;