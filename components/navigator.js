/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {createSwitchNavigator, createAppContainer, NavigationActions } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './login/loginscreen';
import MainDashboard from './dashboard';
import OrderScreen from './dashboard/order';
import TipsScreen from './dashboard/tips';
import HeaderMain from './dashboard/headerMain';

/*export default class Navigator extends Component {
    componentWillMount(){
        StatusBar.setHidden(false);
    }
	render(){
		return (
            <AppContainer />
        );
	}
};*/
const AppSwitchNavigator = createStackNavigator(
    {
        login:{
            screen:LoginScreen,    
        },
        dashboard:{
            screen:MainDashboard, 
        },
        order:{
            screen:OrderScreen,         
            navigationOptions:{
                header:<HeaderMain />
            }   
        },
        tips:{
            screen:TipsScreen,
            navigationOptions:{
                header:<HeaderMain />
            }
        }
    },
    {
        initialRouteName: 'login',
        navigationOptions:{
            header:null,
        },
        defaultNavigationOptions:{
            header:null
        }
    },
);

export default  createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
})


