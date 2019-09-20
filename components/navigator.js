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
import MainDashboard from './dashboard/mainboardscreen';
import OrderScreen from './dashboard/order';
import TipsScreen from './dashboard/tips';
import Icon from 'react-native-vector-icons/AntDesign';

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
/*
const HomeNavigator = createStackNavigator(
    {
        dashboard:{
            screen:MainDashboard,
            navigationOptions: {
                title: "LOGIN",
                headerStyle: {
                  backgroundColor: 'red'
                },
                headerTintColor: 'blue'
            }
        },
        order:{
            screen:OrderScreen,
        },
        tips:{
            screen:TipsScreen
        }
    },  
    {
        initialRouteName: 'dashboard',        
    }
);*/

const AppSwitchNavigator = createStackNavigator(
    {
        login:{
            screen:LoginScreen,
            navigationOptions:{
                header:null
            }
        },
        dashboard:{
            screen:MainDashboard,
            navigationOptions:{
                header:null
            }
        },
        order:{
            screen:OrderScreen,            
        },
        tips:{
            screen:TipsScreen
        }
    },
    {
        initialRouteName: 'login',
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


