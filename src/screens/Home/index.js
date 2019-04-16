import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setUsername } from '../../redux/auth/actions';
import styles from './style';


class HomeScreen extends Component {

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

  _setUsername = (username) => {
    this.props.setUsername(username);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Home screen.</Text>
        <TouchableOpacity onPress={() => this._setUsername('admin')}>
          <Text style={styles.text}>Set username</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._goToScreen('Profile')}>
          <Text style={styles.text}>Go to Profile screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  setUsername: (username) => dispatch(setUsername(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);