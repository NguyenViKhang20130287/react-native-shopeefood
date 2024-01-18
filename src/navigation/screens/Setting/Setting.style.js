import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    buttonContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    warningIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row'
        paddingVertical: 40
    },
    content:{
        flexDirection: 'column',
        justifyContent: 'center',
    },
    info:{
        marginVertical: 20
    },
    textContainer:{
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: "flex-start",
        marginVertical: 10
    },
    text:{
        color: '#595959'
    }
}
);
export default styles;