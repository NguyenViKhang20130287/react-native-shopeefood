import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#F55C32',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 120,
        padding: 15,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginRegister: {
        height: '50%',
    },
    userIcon: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    button: {
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 2,
    },
    text: {
        color: 'orangered',
        fontSize: 15,
    },
    icon: {
        fontSize: 40,
        color: 'orangered',
    },
    logoutContainer: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    logoutBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orangered',
        padding: 12,
        borderRadius: 2.
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderBottomColor: 'whitesmoke',
        paddingRight: 8,
    },
    iconContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default styles;