/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';

export default class Navigator extends React.Component {
    componentWillMount(){
        StatusBar.setHidden(false);
    }
	render(){
		return (
			<View style={styles.container}>
                <StatusBar 
                    translucent
                    backgroundColor="#00BCD4"
                    barStyle="light-content"            
                /> 
				<Text>Login</Text>			
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
