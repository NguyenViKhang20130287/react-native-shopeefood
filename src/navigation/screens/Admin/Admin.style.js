import { StyleSheet } from "react-native";

const colors = {
  primaryColor: "#F95030",
};

const styles = StyleSheet.create({
  navigator: {
    height: 150,
    color: "#F95030",
  },
  // header
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  header_text: {
    fontWeight: "800",
    marginRight: 5,
  },
  //user
  container: {
    flex: 1,
    borderColor: "#000",
    backgroundColor: "#f0f0f0",
  },
  account_list: {
    marginTop: 15,
    margin: 5,
    borderWidth: 0.5,
    borderColor: "black",
    marginBottom: 10,
  },
  title_text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
    padding: 10,
  },
  table_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "black",
    borderTopWidth: 0.5,
    height: 40,
  },
  id_text: {
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 10,
    marginTop: 6,
  },
  email_text: {
    marginTop: 8,
  },
  funtion_section: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    marginRight: 10,
  },
  action: {
    marginRight: 8,
  },
  // edit
  header_edit: {
    marginTop: 45,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  text_header_edit: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "800",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  value_element: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    height: 40,
    marginBottom: 10,
  },
  text_title_edit: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
    marginBottom: 10,
    color: "black",
  },
  value_text: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
    marginLeft: 10,
  },
  textfield: {
    marginRight: 10,
    borderColor: "black",
    borderWidth: 0.5,
    width: 250,
    padding: 10,
  },
  icon_element: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "500",
    color: "#F95030",
  },
  button_press: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    width: 90,
    marginLeft: "75%",
    borderColor: "black",
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#FFDBC2",
  },
  button_text: {
    color: "#F95030",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 12,
    marginTop: 3,
  },
});

export default styles;
