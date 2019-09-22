import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';
import LinearGradient from 'react-native-linear-gradient';

const theme = {
    screenWidth: Math.round(Dimensions.get('window').width),
    screenHeight: Math.round(Dimensions.get('window').height)/6 + 30,
}

const Utils = {
    logoImgSize:{
        width: Dimensions.get('window').width/2 - Dimensions.get('window').width*5/100,
        height: Dimensions.get('window').height/6 - (Dimensions.get('window').height/6) * 20 / 100
    }
}

export default class Orders extends Component {
    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
    }
    render() {
        return (
            <ScrollView style={styles.container}>                
                <TouchableOpacity style={styles.orderBtnView} onPress={() => this.navigation.navigate('order')}>                    
                    <View style={styles.orderContainer}>                        
                        <View style={styles.orderContent}>
                            <Text style={styles.orderTitle}>Order #0001</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.detailTitle}>CUSTOMER: </Text>
                                <Text style={styles.detailTxt}>MARTY MCFLY</Text>
                            </View>
                            
                            <Text style={styles.detailTitle}>ADDRESS: <Text>CALLE 8 ORIENTE 818A</Text></Text>
                            <Text style={styles.detailTitle}>PAYING WIDTH: <Text>BANK CARD</Text></Text>
                            <Text style={styles.orderStatus}>Waiting for pickup</Text>
                        </View>
                        <View style={styles.orderDate}>
                            <View style={{alignSelf:'flex-end',marginBottom:30}}>
                                <Text style={styles.detailTitle}>15.17.2019</Text>
                                <Text style={styles.orderTime}>04:29 PM</Text>                            
                            </View>
                            <View style={{alignSelf:'flex-end'}}>
                                <View style={styles.clockView}>
                                    <Text style={styles.clockTxt}>04:19</Text>
                                </View> 
                            </View>
                        </View>
                    </View>                    
                </TouchableOpacity>   
                <TouchableOpacity style={styles.orderBtnView} onPress={() => this.navigation.navigate('order')}>                    
                    <View style={styles.orderContainer}>                        
                        <View style={styles.orderContent}>
                            <Text style={styles.orderTitle}>Order #0001</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.detailTitle}>CUSTOMER: </Text>
                                <Text style={styles.detailTxt}>MARTY MCFLY</Text>
                            </View>
                            
                            <Text style={styles.detailTitle}>ADDRESS: <Text>CALLE 8 ORIENTE 818A</Text></Text>
                            <Text style={styles.detailTitle}>PAYING WIDTH: <Text>BANK CARD</Text></Text>
                            <Text style={styles.orderStatusGreen}>Delivering</Text>
                        </View>
                        <View style={styles.orderDate}>
                            <View style={{alignSelf:'flex-end',marginBottom:30}}>
                                <Text style={styles.detailTitle}>15.17.2019</Text>
                                <Text style={styles.orderTime}>04:29 PM</Text>                            
                            </View>
                            <View style={{alignSelf:'flex-end'}}>
                                <View style={styles.clockView}>
                                    <Text style={styles.clockTxt}>04:19</Text>
                                </View> 
                            </View>
                        </View>  
                    </View>      
                    <View style={{justifyContent:'center', textAlign:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            style={styles.button}
                            // onPress={() => {
                            // this.checkLogin();
                            // }}
                            >
                            <LinearGradient
                                colors={['#2aace3', '#1d759b']}
                                style={styles.button_content}
                                start={{
                                    x: 0.1,
                                    y: 0.1,
                                }}
                                end={{x: 0.9, y: 0.9}}>
                                <Text style={styles.buttonText}>Deliver Order</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>              
                </TouchableOpacity>   
                <TouchableOpacity style={styles.orderBtnView} onPress={() => this.navigation.navigate('order')}>                    
                    <View style={styles.orderContainer}>                        
                        <View style={styles.orderContent}>
                            <Text style={styles.orderTitle}>Order #0001</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.detailTitle}>CUSTOMER: </Text>
                                <Text style={styles.detailTxt}>MARTY MCFLY</Text>
                            </View>
                            
                            <Text style={styles.detailTitle}>ADDRESS: <Text>CALLE 8 ORIENTE 818A</Text></Text>
                            <Text style={styles.detailTitle}>PAYING WIDTH: <Text>BANK CARD</Text></Text>
                            <Text style={styles.orderStatusGreen}>Delivering</Text>
                        </View>
                        <View style={styles.orderDate}>
                            <View style={{alignSelf:'flex-end',marginBottom:30}}>
                                <Text style={styles.detailTitle}>15.17.2019</Text>
                                <Text style={styles.orderTime}>04:29 PM</Text>                            
                            </View>
                            <View style={{alignSelf:'flex-end'}}>
                                <View style={styles.clockView}>
                                    <Text style={styles.clockTxt}>04:19</Text>
                                </View> 
                            </View>
                        </View>  
                    </View>      
                    {/* <View style={{justifyContent:'center', textAlign:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            style={styles.button}
                            // onPress={() => {
                            // this.checkLogin();
                            // }}
                            >
                            <LinearGradient
                                colors={['#2aace3', '#1d759b']}
                                style={styles.button_content}
                                start={{
                                    x: 0.1,
                                    y: 0.1,
                                }}
                                end={{x: 0.9, y: 0.9}}>
                                <Text style={styles.buttonText}>Deliver Order</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>               */}
                </TouchableOpacity>        
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,      
        backgroundColor:'#f7f7f7',    
        paddingTop:(theme.screenWidth * 5 / 100 + 10)/2,       
        width:theme.screenWidth
    },

    orderBtnView:{        
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'#ffffff', 
        textAlign:'center',     
        // width:'100%',     
        borderRadius:2,
        shadowColor: '#c8c8c8',
        shadowOffset: { width: 15, height: 15 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 15,
        paddingVertical:15,
        paddingHorizontal:30,
        marginHorizontal:theme.screenWidth * 5 / 100 + 10,
        marginVertical:(theme.screenWidth * 5 / 100 + 10)/2,

    },
    orderContainer:{
        flexDirection:'row',
        textAlign:'center',
        alignItems:'center',    
    },
    orderTitle:{
        fontWeight:'bold',
        color:'#282828', 
        opacity:0.8, 
        fontSize:18,
        marginBottom:6,
    },

    orderDate:{
        flex:3,        
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    orderContent:{
        flex:8
    },
    detailTitle:{
        fontSize:10,
        color:'#999999',
    },
    orderStatus:{
        fontSize:10,
        color:'red',
        marginTop:6
    },
    orderStatusGreen:{
        fontSize:10,
        color:'green',
        marginTop:6
    },
    detailTxt:{
        fontSize:10,
        color:'#999999',
    },
    orderTime:{
        fontSize:10,
        color:'#999999',
        marginTop:6
    },
    clockView:{
        backgroundColor:'black',
        paddingHorizontal:5
    },
    clockTxt:{
        fontWeight:'bold',
        color:'#00d44d', 
        opacity:0.8, 
        fontSize:14,     
    },
    button: {
        width: theme.screenWidth - (theme.screenWidth * 5 / 100 + 10) * 2 ,    
        borderRadius: 25,    
        height: 40,
        marginTop:25,
        paddingHorizontal:30,
        marginBottom:10     
    },
    button_content: {
        width:'100%',
        borderRadius: 25,
        height: 40,
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
        // fontFamily: theme.dashboad.font,
    },
});