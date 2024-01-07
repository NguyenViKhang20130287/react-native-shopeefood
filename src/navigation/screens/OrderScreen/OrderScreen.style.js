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
    marginTop: 10,
    marginBottom: 200,
    marginLeft: 10,
  },

  suggestion: {
    marginTop: 10,
    fontWeight: "500",
    // flexDirection: "column"
  },

  title_top: {
    marginLeft: 10,
    fontSize: 45,
    fontWeight: "500",
  },

  food: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: "gray",
  },

  image: {
    marginLeft: 10,
    marginBottom: 15,
  },

  foods_image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },

  details: {
    marginLeft: 10,
  },

  food_name: {
    marginLeft: 10,
    justifyContent: "center",
    fontSize: 50,
    fontWeight: "600",
  },

  info: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    marginLeft: 30,
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
    color: "gray",
    fontWeight: "bold",
    marginBottom: 10,
  },

  food_tilte: {
    fontSize: 16,
    fontWeight: "bold",
  },

  rating_text: {
    padding: 3,
    fontWeight: "400",
    color: "gray",
    marginRight: 8,
  },

  distance_text: {
    padding: 3,
    marginLeft: 8,
    marginRight: 8,
    fontWeight: "400",
    color: "gray",
  },

  times_text: {
    padding: 3,
    marginLeft: 8,
    fontWeight: "400",
    color: "gray",
  },

  // order_content
  content: {
    display: "flex",
    marginBottom: 10,
    marginTop: 10,
  },

  content_title: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 10,
  },

  title_order: {
    flexBasis: "70%",
  },

  id_title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  time_title: {
    fontWeight: "400",
    color: "gray",
  },

  content_details: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },

  content_info: {
    marginLeft: 15,
    marginTop: 3,
  },

  name_text: {
    fontWeight: "bold",
    fontSize: 15,
  },

  content_price: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },

  price_text: {
    padding: 5,
    fontWeight: "bold",
    fontSize: 15,
  },

  quantity_text: {
    padding: 5,
    fontWeight: "400",
    fontSize: 15,
    color: "gray",
  },

  payment_text: {
    padding: 5,
    fontWeight: "400",
    fontSize: 15,
    color: "gray",
  },

  status: {
    marginTop: 15,
    marginBottom: 30,
    display: "flex",
    borderTopWidth: 1,
    borderTopColor: "gray",
  },

  status_now: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },

  now1: {
    flexBasis: "60%",
  },

  status_type: {
    fontWeight: "500",
    color: "gray",
  },

  status_time: {
    marginTop: 10,
    marginLeft: "35%",
    display: "flex",
    flexDirection: "row",
  },

  time_text: {
    fontWeight: "bold",
  },

  // history
  rate_noti: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    backgroundColor: "#fcefcc",
  },
  rate_title: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
  },
  icons: {
    fontSize: 16,
  },
  status_now_complete: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    borderTopWidth: 0.5,
    borderTopColor: "gray",
  },
  now1_complete: {
    marginRight: 100,
    marginLeft: 10,
  },
  complete_text: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 15,
  },
  now2_complete: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  rate_button: {
    width: 100,
    height: 50,
    marginRight: 10,
  },
  reorder_button: {
    width: 100,
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
});

export default styles;
