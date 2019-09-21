import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';

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
                <TouchableOpacity style={styles.orderView} onPress={() => this.navigation.navigate('order')}>                    
                    <View style={{flexDirection:'row',textAlign:'center',alignItems:'center',paddingLeft:'10%',paddingRight:'10%',paddingTop:'1%',paddingBottom:'1%'}}>                        
                        <View style={{flex:2.5}}>
                            <Text style={{fontWeight:'bold',color:'#282828', opacity:0.8, fontSize:18}}>Order #0001</Text>
                            <Text style={styles.detailTxt}>CUSTOMER: <Text>MARTY MCFLY</Text></Text>
                            <Text style={styles.detailTxt}>ADDRESS: <Text>CALLE 8 ORIENTE 818A</Text></Text>
                            <Text style={styles.detailTxt}>PAYING WIDTH: <Text>BANK CARD</Text></Text>
                            <Text style={styles.detailTxt}>Waiting for pickup</Text>
                        </View>
                        <View style={{flex:1.5,        
                                flexDirection: 'column',
                                justifyContent: 'space-between'}
                            }>
                            <View style={{alignSelf:'flex-end',marginBottom:30}}>
                                <Text style={styles.detailTxt}>15.17.2019</Text>
                                <Text style={styles.detailTxt}>04:29 PM</Text>                            
                            </View>
                            <View style={{alignSelf:'flex-end'}}>
                                <View style={{backgroundColor:'black',paddingLeft:10, paddingRight:10}}>
                                    <Text style={{fontWeight:'bold',color:'#00d44d', opacity:0.8, fontSize:18}}>04:19</Text>
                                </View> 
                            </View>
                        </View>
                    </View>                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.orderView} onPress={() => this.navigation.navigate('order')}>                    
               
                    <View style={{flexDirection:'row',textAlign:'center',alignItems:'center',paddingLeft:'10%',paddingRight:'10%',paddingTop:'1%',paddingBottom:'1%'}}>                        
                        <View style={{flex:2.5}}>
                            <Text style={{fontWeight:'bold',color:'#282828', opacity:0.8, fontSize:18}}>Order #0001</Text>
                            <Text style={styles.detailTxt}>CUSTOMER: <Text>MARTY MCFLY</Text></Text>
                            <Text style={styles.detailTxt}>ADDRESS: <Text>CALLE 8 ORIENTE 818A</Text></Text>
                            <Text style={styles.detailTxt}>PAYING WIDTH: <Text>BANK CARD</Text></Text>
                            <Text style={styles.detailTxt}>Waiting for pickup</Text>
                        </View>
                        <View style={{flex:1.5,        
                                flexDirection: 'column',
                                justifyContent: 'space-between'}
                            }>
                            <View style={{alignSelf:'flex-end',marginBottom:30}}>
                                <Text style={styles.detailTxt}>15.17.2019</Text>
                                <Text style={styles.detailTxt}>04:29 PM</Text>                            
                            </View>
                            <View style={{alignSelf:'flex-end'}}>
                                <View style={{backgroundColor:'black',paddingLeft:10, paddingRight:10}}>
                                    <Text style={{fontWeight:'bold',color:'#00d44d', opacity:0.8, fontSize:18}}>04:19</Text>
                                </View> 
                            </View>
                        </View>
                    </View>  
              
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,      
        backgroundColor:'#ffffff',    
        padding:theme.screenWidth * 5 / 100 + 10,
    },
    orderView:{        
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'#ffffff', 
        textAlign:'center',
        height:theme.screenHeight,
        width:'100%',
        borderColor:'#c8c8c8',
        borderWidth:1,
        borderRadius:10,
        shadowColor: '#c8c8c8',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 15,
        marginBottom:theme.screenWidth * 5 / 100 + 10
    },
    detailTxt:{
        fontSize:12,
        color:'#999999',
    },
});