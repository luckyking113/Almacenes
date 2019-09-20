import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native';
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

export default class MainDashboard extends Component {
    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBar translucent backgroundColor="transparent" /> */}                
                <View style={styles.header}>
                    <View style={styles.headerIcon} >                        
                        <Image source={require('../../assets/powerbutton.png')} style={styles.powerOffIcon}/>
                    </View>   
                    <View>
                        <Image style={styles.headerLogo} source={require('../../assets/logo_transparent.png')} />
                    </View>   
                    <View style={styles.headerIcon}>
                        <Image source={require('../../assets/ring.png')} style={styles.powerOffIcon}/>
                    </View>                  
                </View>
                <View style={styles.otherSection}>
                    <View style={styles.orderSection}>
                        <TouchableOpacity style={styles.orderView} onPress={() => this.navigation.navigate('order')}>
                            <Text style={{fontWeight:'bold',color:'#282828', opacity:0.8, fontSize:18}}>Order #0001</Text>
                            <View style={{flexDirection:'row',textAlign:'center',alignItems:'center',paddingLeft:'10%',paddingRight:'10%',paddingTop:'1%',paddingBottom:'1%'}}>
                                <View style={{flex:1}}>
                                    <Text style={styles.detailTxt}>CUSTOMER:</Text>
                                    <Text style={styles.detailTxt}>ADDRESS:</Text>
                                    <Text style={styles.detailTxt}>PAYING WIDTH:</Text>
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={styles.detailTxt}>MARTY MCFLY</Text>
                                    <Text style={styles.detailTxt}>CALLE 8 ORIENTE 818A</Text>
                                    <Text style={styles.detailTxt}>CASH</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor:'black',paddingLeft:10, paddingRight:10}}>
                                <Text style={{fontWeight:'bold',color:'#00d44d', opacity:0.8, fontSize:18}}>04:19</Text>
                            </View>                            
                        </TouchableOpacity>                    
                    </View>
                    <View style={styles.tipSection}>
                        <TouchableOpacity style={styles.tipsView} onPress={() => this.navigation.navigate('tips')}>
                            <Image source={require('../../assets/tips.png')} style={styles.iconImg}/>
                            <Text style={{fontWeight:'bold',color:'#282828', opacity:0.8, fontSize:18}}>Tips</Text>
                            <Text style={styles.detailTxt}>CHECK YOUR TIPS</Text>
                        </TouchableOpacity>   
                        <TouchableOpacity style={styles.tipsView}>
                            <Image source={require('../../assets/order.png')} style={styles.iconImg}/>
                            <Text style={{fontWeight:'bold',color:'#282828', opacity:0.8, fontSize:18}}>Orders</Text>
                            <Text style={styles.detailTxt}>CHECK YOUR ORDERS</Text>
                        </TouchableOpacity>                   
                    </View>
                    <View style={styles.workTimeSection}>
                        <TouchableOpacity style={styles.orderView}>
                            <Image source={require('../../assets/time.png')} style={styles.iconImg}/>
                            <Text style={{fontWeight:'bold',color:'#282828', opacity:0.8, fontSize:18}}>"Working Time</Text>
                            <Text style={styles.detailTxt}>YOUR WORKING TIME</Text>
                        </TouchableOpacity>                    
                    </View>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center',paddingBottom:'2%'}}>
                        <Text style={{fontSize:20, color:'#ff002b', borderBottomWidth:1, borderBottomColor:'#ff002b',letterSpacing:1.03}}>REPROT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',        
        justifyContent:'center',
        width:'100%'
    },
    header:{
        flex:1, 
        flexDirection:'row',        
        justifyContent: 'space-between',   
        paddingTop:10,
        paddingBottom:30,
        backgroundColor:'#ffffff'     
    },  
    headerLogo:{
        resizeMode:'stretch',
        width:Utils.logoImgSize.width,
        height:Utils.logoImgSize.height,    
    },
    powerOffIcon:{        
          
    },
    headerIcon:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',  
    },
    otherSection:{
        flex:5, 
        justifyContent:'space-between',
        alignItems:'center',      
        backgroundColor:'#ffffff',         
    },
    orderSection:{
        // flex:1, 
        borderColor:'#c8c8c8',
        borderBottomWidth:1,
        borderTopWidth:1, 
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'#fafafa',
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        height:theme.screenHeight - 30
    },
    tipSection:{  
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:"space-between",
        backgroundColor:'#fafafa',
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        height:theme.screenHeight - 30
    },
    workTimeSection:{
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'#fafafa',
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        height:theme.screenHeight - 30
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
    },
    tipsView:{
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'#ffffff', 
        height:theme.screenHeight,
        width:'47%',
        borderColor:'#c8c8c8',
        borderWidth:1,
        borderRadius:10,
        shadowColor: '#c8c8c8',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 15,
    },
    detailTxt:{
        fontSize:12,
        color:'#999999',
    },
    iconImg:{
        height:18,
        width:18,
        resizeMode:'stretch',
    }
})

