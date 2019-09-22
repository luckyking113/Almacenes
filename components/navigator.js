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
import TipsScreen from './dashboard/tips';
import HeaderMain from './dashboard/headerMain';
import Orders from './dashboard/orders';
import SplashScreen from './splash';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TipsHeaderMain from './dashboard/tips/tipsheaderMain';

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

class TipsDay extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>TipsDay!</Text>
        </View>
      );
    }
  }
  
  class TipsWeek extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>TipsWeek!</Text>
        </View>
      );
    }
  }

  class TipsMonths extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>TipsMonths!</Text>
        </View>
      );
    }
  }

  const AppTopTabNavigation = createMaterialTopTabNavigator({
    day:{
        screen:TipsDay
    },
    Week:{
        screen:TipsWeek
    },
    MonthS:{
        screen:TipsMonths
    }
});
  
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


