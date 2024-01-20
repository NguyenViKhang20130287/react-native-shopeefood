    import { StyleSheet } from "react-native";

    const colors = {
        primaryColor: '#F95030'
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            borderColor: '#000',
            backgroundColor: '#f0f0f0',
        },
        // store in4
        storeInfo:{
            flexDirection:'column',
            backgroundColor: 'white'
        },
        storeImage:{
            marginTop: 9,
            alignSelf:"center",
            width: 70,
            height: 70,
            borderRadius: 99,
        },
        camera:{
            top: "59%",
            position: 'absolute',
            left: '55%',
        },
        storeName:{ 
            textAlign:'center',
            fontSize: 23,
            fontWeight: 'bold',
            color: colors.primaryColor
        },
        //basic info
        basicInfo:{
            width: '100%',
            backgroundColor:'white',
            borderTopColor: 'lightgray',
            borderTopWidth: 1
        },
        infoContainer:{
            width: "90%",
            alignSelf:'center',
        },
        infoTitle:{
            marginVertical: 5
        },
        bigTitle:{
            fontSize: 23,
            textAlign: 'center',
        },
        infoDetail:{
            marginVertical: 5,
            flexDirection: "column",
            borderBottomColor: '#e1e1e1',
            borderBottomWidth: 2
        },
        smallTitle:{
            fontSize: 21,
            color: '#c8c8c8',
            fontWeight: '600',
        },
        smallInfo:{
            paddingVertical: 5,
            fontSize: 20,
            fontWeight: '500'
        },
        //change info
        changeInfoButton:{
            width :'48%',
            marginVertical: 9,
            marginLeft: 15,
            padding: 5,
            borderColor: '#e1e1e1',
            borderWidth:1,
        },
        modalContainer:{
            backgroundColor: 'white',
        },
        modalContent:{
            
        },
        modalTitle:{
            
        },
    });
    export default styles;