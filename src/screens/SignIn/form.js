import React, { Component } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input, Button } from 'react-native-elements';
import styles from './style';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.formContainer}>
                <Input
                    label={'Username'}
                    placeholder={'Username'}
                    rightIcon={<Icon name='user' size={24} />}
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    containerStyle={{ marginBottom: 10 }}
                />
                <Input
                    label={'Password'}
                    placeholder={'Password'}
                    rightIcon={<Icon name='lock' size={24} />}
                    secureTextEntry={true}
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    containerStyle={{ marginBottom: 30 }}
                />
                <Button
                    title="Sign In"
                    onPress={this._signIn}
                    containerStyle={{ width: '100%', paddingHorizontal: 10 }}
                />
            </KeyboardAvoidingView>
        );
    }
}
