/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './login/loginscreen';

export default class Navigator extends Component {
    componentWillMount(){
        StatusBar.setHidden(false);
    }
	render(){
		return (
            <AppContainer />
        );
	}
};

class DashboardScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>DashboardScreen</Text>
            </View>
        )
    }
}

const AppSwitchNavigator = createSwitchNavigator({
    login:{
        screen:LoginScreen
    },
    Dashboard:{
        screen:DashboardScreen
    }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
})
