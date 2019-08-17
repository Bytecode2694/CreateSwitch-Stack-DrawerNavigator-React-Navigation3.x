import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import ViewStyle from '../componentstyle/ViewStyle';

export default class Profile extends React.Component {

    render(){
        return(
            <View style={ViewStyle.viewlayout}> 
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Drawer')}>
                <Text>Profile Screen</Text>
            </TouchableOpacity>
                
            </View>
        );
    }
}