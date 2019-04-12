import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';
import { constants } from '../../config';

export default class ProfileScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _signOut = async () => {
    try {
      await AsyncStorage.removeItem(constants.TOKEN_KEY);
      this.props.navigation.navigate('Auth');
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Profile screen.</Text>
        <TouchableOpacity onPress={this._signOut}>
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
