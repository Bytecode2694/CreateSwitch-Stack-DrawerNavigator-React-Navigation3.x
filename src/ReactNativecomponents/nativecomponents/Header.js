/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Colors from './Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';


class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
   
    return(
      <View style={styles.header}>
  <View style={styles.leftIcon}>
      <Ionicons name={this.props.leftIcon} color={this.props.color} size={this.props.size}/>
  </View>
  <View style={styles.title}>
  <Ionicons name={this.props.title} color={this.props.color} size={this.props.size}/>
  </View>
  <View style={styles.rightIcon}>
  <Ionicons name={this.props.rightIcon} color={this.props.color} size={this.props.size}/>
  </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fff",
    height: 50
  },
  leftIcon:{
    flex: 0.3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title:{
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon:{
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default Header;
