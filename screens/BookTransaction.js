import * as React from 'react';
import {Text,View,TouchableOpacity,Button,StyleSheet,Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class BookTransaction extends React.Component{
    constructor(){
        super();
        this.state = {hasCameraPermissions : null,
        scanned:false,
        scannedData:'',
        ButtonState : 'normal'    
        }   
    }
    getCameraPermissions = async()=>{
        const{status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions:status==="granted"
        })
    }
render(){
    const hasCameraPermissions=this.state.hasCameraPermissions
    return(

<View style ={styles.ViewStyle}>
<Image style={{width:70,
height:70
}}source={require('../assets/s.png')}/>
    <Text style={styles.TextStyle}>
    { hasCameraPermissions === true ? this.state.scannedData:"Request Camera Permissions"}  </Text> 
     <TouchableOpacity
     onPress = {this.getCameraPermissions}>
         <Text style={styles.ButtonStyle}>
             Scan QR Code
         </Text>
     </TouchableOpacity>
</View>
    )
}

}

const styles = StyleSheet.create({
TextStyle:{
    fontSize:20,
    textDecorationLine:'underline',

},
ViewStyle:{
    alignItems:'center',
    justifyContent:'center',
    flex:1
},
ButtonStyle : {
    fontSize:20
}
})