import { StyleSheet } from "react-native";

const colors = {
  primaryColor: "#F95030",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#000",
    backgroundColor: "#f0f0f0",
  },

  menubar: {
    display: "flex",

    flexDirection: "row",
    fontSize: 18,
    marginTop: 50,
    color: "#F95030",
  },
  element: {
    flexBasis: "25%",
    fontWeight: "bold",
    color: "#F95030",
  },
  blank: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 50,

  },
  history_blank: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 210,

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
    textAlign: 'justify',
    color: '#757575'
  },
  noOrderImage: {
    height: 100,
    width: 100,
    tintColor: 'orange'
  },
  noCartItem: {
    height: 120,
    width: 120,
    tintColor: 'orange'
  },

  suggestion: {
    paddingHorizontal: 10,
    fontWeight: "500",
    backgroundColor: 'white'
  },

  title_top: {
    paddingTop: 10,
    fontSize: 45,
    fontWeight: "500",
  },

  food: {
    marginTop: 15,
    // display: "flex",
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
    marginLeft: 10,
    flex: 1
  },

  food_name: {
    // marginLeft: 10,
    // justifyContent: "center",
    // fontSize: 50,
    // fontWeight: "600",
  },

  info: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    marginLeft: 5,
  },

  distance: {
    borderLeftWidth: 0.5,
    borderLeftColor: "gray",
  },

  times: {
    borderLeftWidth: 0.5,
    borderLeftColor: "gray",
  },

  navigator: {
    height: 150,
    color: "#F95030",
  },

  title_suggestion: {
    fontSize: 16,
    color: "#595959",
    fontWeight: "bold",
  },

  food_tilte: {
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

  // order_content
  content: {
    // display: "flex",
    marginBottom: 10,
    backgroundColor: "white",
    padding: 15
  },

  content_title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },

  title_order: {
    flexDirection: "row",
    alignItems: "center",
  },

  cate_title: {
    fontSize: 16,
    fontWeight: "500",
  },
  id_title: {
    fontSize: 16,
    color: "#707070"
  },

  time_title: {
    fontWeight: "400",
    color: "gray",
  },

  content_details: {
    display: "flex",
    flexDirection: "row",
    // marginLeft: 10,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    paddingBottom: 15
  },

  history_content_details: {
    flexDirection: "column",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    paddingBottom: 15
  },

  content_info: {
    flex: 1,
    marginLeft: 15,
    marginTop: 3,
  },
  history_content_info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  name_text: {
    fontWeight: "bold",
    fontSize: 16,
  },

  history_name_text: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 15
  },

  content_price: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  history_content_price: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center"
  },

  price_text: {
    fontWeight: "500",
    fontSize: 16,
    // marginBottom: 5
  },

  quantity_text: {
    fontWeight: "400",
    fontSize: 16,
    color: "gray",
  },

  payment_text: {
    fontWeight: "400",
    fontSize: 15,
    color: "gray",
  },

  status: {
    marginTop: 10,
    marginBottom: 25,
    display: "flex",
  },

  status_now: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },

  now1: {
    flexBasis: "60%",
  },

  status_type: {
    fontWeight: "500",
    color: "#707070",
  },

  status_time: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },

  time_text: {
    fontWeight: "500",
    fontSize: 13
  },

  // history
  rate_noti: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF8E5",
    padding: 10
  },
  rate_title_container: {
    flexDirection: "row"
  },
  rate_title: {
    fontSize: 16,
  },
  icons: {
    fontSize: 16,
  },
  status_now_complete: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center"
  },
  now1_complete: {
    // marginRight: 100,
    // marginLeft: 10,
  },
  complete_text: {
    fontSize: 16,
    fontWeight: "400",
  },
  now2_complete: {
    display: "flex",
    flexDirection: "row",
  },
  rate_button: {
    width: 100,
    height: 50,
    marginRight: 10,
  },
  reorder_button: {
    width: 110,
  },
  rate_text: {
    marginLeft: 10,
    fontSize: 14,
  },

  //checkout
  address: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  detail_address: {
    marginLeft: 10,
  },
  user: {
    display: "flex",
    flexDirection: "row",
  },
  street: {
    marginRight: 40,
  },
  shipping: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ship_title: {
    fontSize: 18,
    marginLeft: 10,
    color: "#29a89b",
  },
  ship_price: {
    fontSize: 18,
    marginRight: 10,
    color: "#29a89b",
  },
  bill: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bill_title: {
    marginLeft: 10,
    fontSize: 18,
  },
  bill_price: {
    marginRight: 10,
    fontSize: 18,
  },
  sum: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  total: {
    display: "flex",
    marginLeft: "40%",
    marginRight: 20,
  },
  total_title: {
    fontSize: 18,
  },
  total_price: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 50,
  },
  button_book: {
    marginTop: 5,
  },
  address_shop: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "300",
  },
  example_order: {
    flexDirection: "row",

  },
  example_content: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 15
  },
  example_content_price: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  example_address: {
    color: "#989898",
    paddingVertical: 15
  },
  example_details: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 10
  },
});

export default styles;
