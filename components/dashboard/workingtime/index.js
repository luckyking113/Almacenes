import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import Dimensions from 'Dimensions';

const screenSize = {
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').height)/6 + 30,
}


export default class WorkingTime extends Component {
    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
    }
    render() {
        return (
            <View style={styles.container}>                
                <Text style={styles.weekday}>FRIDAY</Text>
                <View>
                    <View style={styles.startTimeContainer}>
                        <Text style={styles.title}>Starting From</Text>
                        <Text style={styles.content}>YOUR SCHEDULE TO CLOCK IN</Text>
                        <View style={styles.clockView}>
                            <Image source={require('../../../assets/time.png')} resizeMode="stretch" style={styles.clockImg}/>
                            <Text style={styles.clockTxt}>01:00 AM</Text>
                        </View>
                    </View>
                    <View style={styles.startTimeContainer}>
                        <Text style={styles.title}>Starting From</Text>
                        <Text style={styles.content}>YOUR SCHEDULE TO CLOCK IN</Text>
                        <View style={styles.clockView}>
                            <Image source={require('../../../assets/time.png')} resizeMode="stretch" style={styles.clockImg}/>
                            <Text style={styles.clockTxt}>01:00 AM</Text>
                        </View>
                    </View>
                </View>
                <Image source={require('../../../assets/progress.png')} resizeMode="stretch" style={styles.progressImg}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,      
        backgroundColor:'#FAFAFA',     
        alignItems:"center",
        justifyContent:'space-between',
        padding:30,  
        width: screenSize.width,        
    },
    startTimeContainer:{        
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#FFFFFF',
        width:screenSize.width - 50,
        padding:30,
        marginBottom:25,   
        shadowColor: '#f0f0f0',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 30, 
    },
    weekday:{
        fontSize:30,
        fontWeight:'bold',
        opacity:0.6
    },  
    clockView:{
        flexDirection:'row',
        borderWidth:1,
        width:'100%',
        // justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        padding:10,
        marginTop:15,
        paddingLeft:20
    },
    clockImg:{
        width:20,
        height:20,
        opacity:0.4
    },
    clockTxt:{
        fontSize:18,
        opacity:0.6,
        marginLeft:'23%'
    },
    title:{
        fontSize:18,
        opacity:0.6,
        fontWeight:'bold'
    },
    content:{
        marginTop:10,
        fontSize:12,
        opacity:0.4,
    },
    progressImg:{
        width:'60%',
        height:'3.5%'
    }
});