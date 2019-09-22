/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './login/loginscreen';
import MainDashboard from './dashboard';
import OrderScreen from './dashboard/order';
import WorkingTime from './dashboard/workingtime';
import HeaderMain from './dashboard/headerMain';
import Orders from './dashboard/orders';
import SplashScreen from './splash';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TipsHeaderMain from './dashboard/tips/tipsheaderMain';
import TipsDay from './dashboard/tips/tipsday';
import TipsWeek from './dashboard/tips/tipsWeek';
import TipsMonths from './dashboard/tips/tipsMonths';

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
            navigationOptions:{
                header:<HeaderMain />
            }   
        },
        tips:{
            screen:AppTopTabNavigation,
            navigationOptions:{
                header:<TipsHeaderMain />
            }
        },
        workTime:{
            screen:WorkingTime,
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


