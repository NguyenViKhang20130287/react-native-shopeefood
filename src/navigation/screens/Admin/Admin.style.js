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
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
    paddingHorizontal: 5,
  },
  account_list: {
    marginTop: 15,
    margin: 5,
    // borderWidth: 0.5,
    // borderColor: "black",
    // borderColor: colors.primaryColor,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    height: 300,
    overflow: "hidden",
  },
  title_text: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primaryColor,
    textTransform: "uppercase",
    padding: 10,
    
  },

  table_row: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    borderBottomWidth: 0.5,
    paddingVertical: 10,
  },
  id:{
    width:'20%'
  },
  id_text: {
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 20,
    marginTop: 6,
  },
  email:{
    width: '55%',
  },
  email_text: {
    marginTop: 8,
    flexShrink: 1,
    maxWidth:'90%'
  },
  funtion_section: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    marginRight: 10,
    width: '25%',
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "rgba(0,0,0,0.9)",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
});

export default styles;
