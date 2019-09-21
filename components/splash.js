import React, { Component } from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default class SplashScreen extends Component {
    constructor(props){
		super(props);
		this.state = {
			loaded: false
        }	
        this.navigation = this.props.navigation;	
    }
    
    componentWillMount(){	
		setTimeout(() => {
			this.setState({
				loaded:true
			})
		}, 4000);	
    }
    
    render() {
        return (
			<View style={styles.container}>				
				{this.state.loaded?(this.navigation.navigate('login')):<Image source = {require('../assets/splash.gif')}/>}				
			</View>	
        );
    }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	}
})