import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ViewStyle from '../componentstyle/ViewStyle';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class Home extends React.Component {
    render(){
        return(
            <View style={{flex:1,
                backgroundColor: "#000",
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',}}>
                <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Home')}>
                {/* <Text>Home Screen</Text> */}
                <Ionicons name="ios-desktop" size={100} color='#fff'/>
                </TouchableOpacity>
                
            </View>
        );
    }
}