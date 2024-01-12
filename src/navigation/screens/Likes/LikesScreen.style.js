import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { backgroundColor: 'white', flex: 1 },
    tabBar: {
        backgroundColor: 'white',
    },
    indicatorStyle: {
        backgroundColor: 'orangered',
    },
    hasDataContainer: {
        position: 'absolute',
        top: 98,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1
    }
});
export default styles;