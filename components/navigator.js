/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './login/loginscreen';
import MainDashboard from './dashboard';
import OrderScreen from './dashboard/order';
import TipsScreen from './dashboard/tips';
import HeaderMain from './dashboard/headerMain';
import Orders from './dashboard/orders';
import SplashScreen from './splash';

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
        splash:{
            screen:SplashScreen
        },
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
        },
        orders:{
            screen:Orders,
            navigationOptions:{
                header:<HeaderMain />
            }
        }
    },
    {
        initialRouteName: 'tips',
        navigationOptions:{
            header:null,
        },
        defaultNavigationOptions:{
            header:null
        }
    },
);

export default createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    }
})


