import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Dimensions from 'Dimensions';

const screenSize = {
    screenWidth: Math.round(Dimensions.get('window').width),
    screenHeight: Math.round(Dimensions.get('window').height),
}

export default class HeaderMain extends Component {
    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
    }

    navigationActiion(){
        this.navigation.navigate('dashboard');
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity             
                    onPress={() => {
                      this.navigationActiion();
                    }}>
                    <Image source={require('../../assets/back.png')} style={styles.backBtn} />
                </TouchableOpacity>
                <View style={styles.headerTitle}>
                    <Text style={{color:'#525252', fontSize:15}}>Order #0001</Text>
                    <Text style={{color:'#ff0000', fontSize:12, marginTop:5}}>WAITING FOR PICKUP</Text>
                </View>                
                <Icon name="search" size={26} style={styles.inputIcon} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // height:screenSize.screenHeight / 9,
        paddingHorizontal:screenSize.screenWidth * 5/100,   
        borderWidth:1,     
        borderColor: '#c8c8c8',
        height:70,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center',
        color:'#6a6a6a',
        opacity:0.6,
    },
    headerTitle:{
        flexDirection:'column',
        textAlign:'center',
        alignItems:'center',
        marginVertical:15
    },
    backBtn:{
        width:30,
        resizeMode:'stretch'
    }
});