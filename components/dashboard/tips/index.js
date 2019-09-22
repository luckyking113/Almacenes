import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Dimensions from 'Dimensions';
import LinearGradient from 'react-native-linear-gradient';

const screenSize = {
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').height),
}


export default class TipsScreen extends Component {
    state = {
        index: 0,
        routes: [
          { key: 'first', title: 'First' },
          { key: 'second', title: 'Second' },
        ],
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.balance} >
                    <LinearGradient colors={['#0065fa', '#0086ff', '#00b2ff']} style={styles.linearGradient}>
                        <Text style={styles.headerTitle}>Current Balance</Text>
                        <Text style={styles.amount}>$50.00</Text>
                    </LinearGradient>
                </View>
                <View>
                    <Text>asdfasdf</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',        
        // justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    balance:{
        justifyContent:'center',
        alignItems:'center',
        height: screenSize.height * (269 / 1330),
        backgroundColor:'red',
        width:'100%'
    },
    linearGradient: {
        flex: 1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    headerTitle:{
        color:'#ffffff'
    },
    amount:{
        color:'#ffffff',
        fontSize:50,
        fontWeight:'bold'
    }
});