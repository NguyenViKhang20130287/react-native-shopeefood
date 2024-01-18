import { StyleSheet } from "react-native";

const colors = {
    primaryColor: '#F95030'
}

const styles = StyleSheet.create({

    container: {
        marginTop: 50
    },
    header: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: colors.primaryColor
    },
    headerText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    }
})

export default styles