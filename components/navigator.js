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
import { createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './login/loginscreen';
import MainDashboard from './dashboard';
import OrderScreen from './dashboard/order';
import WorkingTime from './dashboard/workingtime';
import HeaderMain from './dashboard/headerMain';
import AssignedOrders from './dashboard/assignedorders';
import SplashScreen from './splash';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TipsHeaderMain from './dashboard/tips/tipsheaderMain';
import TipsDay from './dashboard/tips/tipsday';
import TipsWeek from './dashboard/tips/tipsWeek';
import TipsMonths from './dashboard/tips/tipsMonths';
import OrderHeaderMain from './dashboard/order/orderHeader';

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

class TipsDayScreen extends React.Component {
    render() {
      return (
        <TipsDay />
      );
    }
  }
  
  class TipsWeekScreen extends React.Component {
    render() {
      return (
        <TipsWeek />
      );
    }
  }

  class TipsMonthsScreen extends React.Component {
    render() {
      return (
        <TipsMonths />
      );
    }
  }

  const AppTopTabNavigation = createMaterialTopTabNavigator(
    {
      day:{
          screen:TipsDayScreen
      },
      Week:{
          screen:TipsWeekScreen
      },
      MonthS:{
          screen:TipsMonthsScreen
      }
    },
    {
      initialRouteName: 'day',
      swipeEnabled: true,
      tabBarOptions:{
        activeTintColor:'red',
        labelStyle: {          
          color:'#999999'
        },
        style: { 
          backgroundColor: '#fafafa',
          borderColor:'#999999',  
          borderLeftColor:'#999999'        
        }
      }
    }
);
  
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
            navigationOptions:props =>({
                header:<OrderHeaderMain title="Order #0001" navigation = {props.navigation} />
            })   
        },
        tips:{
            screen:AppTopTabNavigation,
            navigationOptions:props=>({
                header:<TipsHeaderMain navigation = {props.navigation}/>
            })
        },
        workTime:{
            screen:WorkingTime,
            navigationOptions:props=>({
              header:<HeaderMain title="Working Time" navigation = {props.navigation}/>
            })   
        },
        assignedorders:{
            screen:AssignedOrders,
            navigationOptions:props=>({
                header:<HeaderMain title="Assigned Orders" navigation = {props.navigation}/>
            })
        }
    },
    {
        initialRouteName: 'splash',
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


