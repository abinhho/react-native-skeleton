import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';
import { constants } from '../../config';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    try {
      const token = await AsyncStorage.getItem(constants.TOKEN_KEY)
      if (token !== null) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    } catch (e) {
      console.log(e)
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}
