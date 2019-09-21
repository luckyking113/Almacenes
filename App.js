/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, StatusBar} from 'react-native';
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
		}, 4000);
	}

	render(){
		return (
			<Navigator />
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
