import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';


export default class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home'
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  _goToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Home screen.</Text>
        <TouchableOpacity onPress={() => this._goToScreen('Profile')}>
          <Text style={styles.text}>Go to Profile screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
