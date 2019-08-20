import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ViewStyle from '../../componentstyle/TextStyle';
export default class DrawerItems extends React.Component {
    render(){
        return(
            <View style={ViewStyle.viewlayout}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
                <Text>Drawer Screen</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}