import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';
import { constants } from '../../config';

class ProfileScreen extends Component {

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
        <Text style={styles.text}>Hi {this.props.username}.</Text>
        <Text style={styles.text}>Welcome to Profile screen.</Text>
        <TouchableOpacity onPress={this._signOut}>
          <Text style={styles.text}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  username: state.Auth.username,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

