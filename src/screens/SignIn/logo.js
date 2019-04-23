import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './style';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/images/logo-500x500.png')} />
            </View>
        );
    }
}
