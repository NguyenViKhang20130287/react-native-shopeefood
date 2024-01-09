import { StyleSheet,Platform  } from "react-native";

const userStyle = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        padding: 20,
        // backgroundColor: 'lightblue',
        position: "absolute",
        top:10,
    },
    backButton: {
        flex: 1,
        // alignItems: "center"
    },
    titleHeader: {
        flex: 3,
        textAlign: "center",
        fontSize: 20,
    },
    headerEmpty: {
        flex: 1,
    },
    main: {
        // marginTop: 20,
        flex: 10,
        // alignItems: "center",
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    boxInput: {
        alignContent: "center",
        flexDirection: "row",
        paddingVertical: 10,
        marginVertical: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray'
    },
    input: {
        flex: 1,
        // marginLeft: 20,
        height: 30,
        fontSize: 16
    },
    forgotPassword: {
        fontSize: 16,
        color: 'blue',
        paddingLeft: 10,
        borderLeftWidth: 1,
    },
    icon: {
        fontSize: 25,
        marginRight: 16
    },
    button: {
        backgroundColor: 'orangered',
        paddingVertical: 15,
        // paddingHorizontal: 30,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    other: {
        flex: 1,
        textAlign: 'right',
        color: 'blue',
        fontSize: 16,
    },
    footer: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'whitesmoke',
    },
    title: {textAlign: 'center', fontSize: 16, marginTop: 16},
    titleEmail: {
        textAlign: 'center', 
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
    codeFiledRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 30,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'rgba(0,0,0,0.9)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },

})
export default userStyle;