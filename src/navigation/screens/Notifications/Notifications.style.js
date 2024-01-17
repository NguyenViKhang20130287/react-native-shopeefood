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
  noti: {
    fontSize: 20,
    fontWeight: "500",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    backgroundColor: "white"
  },
  icon_title: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: "38%",
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#F5F5F5",
    borderBottomWidth: 1,
    backgroundColor: "white",
    padding: 10
  },
  icon_tab: {
    fontSize: 21,
    color: "#F95030",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 10
  },
  tab_info: {
    marginLeft: 15,
  },
  icon_right: {
    marginLeft: "66%",
    fontSize: 21,
    color: "#898989",
  },
  tab_title: {
    fontSize: 15,
    fontWeight: "400",
  },
  tab_detail: {
    fontSize: 13,
    fontWeight: "400",
    color: "gray",
  },
  updateNoti: {
    padding: 10,
    color: "#707070"
  },
  blank: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 80,

  },
  blank_heading: {
    marginVertical: 30,
    fontSize: 17,
    color: '#595959',
    fontWeight: "500"
  },
  blank_info: {
    marginHorizontal: 40,
    textAlign: 'center',
    color: '#757575'
  },
  noOrderImage: {
    height: 100,
    width: 100,
    tintColor: '#F79321'
  },
});

export default styles;
