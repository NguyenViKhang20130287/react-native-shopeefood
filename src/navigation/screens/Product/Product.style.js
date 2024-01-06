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
  // address
  addressContainer: {
  },

  address: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'baseline'
  },

  addressText: {
      flexShrink: 1,
      width: '85%',
      fontSize: 16
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
  // products
  productContainer: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: "column",
  },
  productContent: {
    marginTop:7,
    width: '100%',
    height: 'auto',
    backgroundColor: '#f0f0f0',
    borderRadius: 1,
  },
  contentWrapper:{
    padding:5,
  },
  productImage: {
    minWidth:50,
    minHeight:100
  },
  producName: {
      fontSize: 14,
      fontWeight: '700'
  },
  productPrice: {
      textAlign: 'left',
      fontSize: 13,
      fontWeight: '500',
      color: '#F95030',
  },
  product_wrapperTitle: {
      backgroundColor: colors.primaryColor,
      borderRadius: 999,
      paddingVertical: 2,
      color: 'white',
  },
  productDiscount: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },
  detailLink:{
    marginTop:5,
    marginBottom: 5,
  },
  detailLinkText:{
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  flashSale_title: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '500',
  },
  // FILTER
  container: {
    flex: 1,
    padding: 10,
  },
  filterSection: {
    marginBottom: 15,
  },
  filterButton:{
    margin: 10,
    backgroundColor: 'grey',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  filterButtonText:{
    color:'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop:5,
    color: 'white'
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white'
  },
  subFilterTitle:{
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'white'
  },
  //button
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  applyButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer:{
    width: '100%',
    backgroundColor: '#2c2c2c',
    borderBlockColor: '#gray'
  },
  filtersContainer:{
    width: '95%',
    alignSelf: 'center'
  },
  //filter category
  cateOption: {
    padding: 10,
    marginBottom: 7,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  cateOptionText :{
    // colors:'black'
  },
  subCateContainer:{
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    backgroundColor: '#'
  },
  subCateOption:{
    padding: 7,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  subTextContainer:{
    marginBottom: 5,
  },
  subCateOptionText:{
    // colors:'black'
  },
  selectedCateOption: {
    backgroundColor: '#595959',
  },
  selectedCateOptionText: {
    color: 'white',
    fontWeight: 'bold',

  },
  //filter slider
  slider: {
    width: '100%',
    height: 40,
  },
});
export default styles;