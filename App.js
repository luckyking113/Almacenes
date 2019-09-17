/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Image, View, StyleSheet, StatusBar} from 'react-native';
import Navigator from './components/navigator';

export default class App extends React.Component {

	constructor(){
		super();
		this.state = {
			loaded: false
		}		
	}

	componentWillMount(){
		StatusBar.setHidden(true);
		setTimeout(() => {
			this.setState({
				loaded:true
			})
		}, 4200);
	}

	render(){
		return (
			<View style={styles.container}>
				<StatusBar />  
				{this.state.loaded?<Navigator />:<Image source = {require('./assets/splash.gif')}/>}				
			</View>	
		);
	}
};

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	}
})
