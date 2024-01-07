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
  title: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
    // justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  noti: {
    fontSize: 20,
    marginLeft: "50%",
    marginBottom: 12,
    fontWeight: "bold",
  },
  icon_title: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: "38%",
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon_tab: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    color: "#F95030",
  },
  tab_info: {
    marginLeft: 20,
    marginBottom: 10,
  },
  icon_right: {
    marginLeft: "69%",
    marginTop: 15,
  },
  tab_title: {
    fontSize: 16,
    fontWeight: "400",
  },
  tab_detail: {
    fontSize: 13,
    fontWeight: "400",
    color: "gray",
  },
});

export default styles;
