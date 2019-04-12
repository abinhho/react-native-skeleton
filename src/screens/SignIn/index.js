import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';
import { constants } from '../../config';

export default class SignInScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Sign In'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _signIn = async () => {
    try {
      await AsyncStorage.setItem(constants.TOKEN_KEY, 'adcnncmbwszqzxsb')
      this.props.navigation.navigate('App');
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Sign In screen.</Text>
        <TouchableOpacity onPress={this._signIn}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
