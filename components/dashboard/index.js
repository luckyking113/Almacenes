import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native';
import Dimensions from 'Dimensions';

const screenSize = {
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').height),
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

    componentWillMount(){
        StatusBar.setHidden(false);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <StatusBar translucent backgroundColor="transparent" /> */}                
                <View style={styles.header}>
                    <View style={styles.headerContent}>                        
                        <Image source={require('../../assets/powerbutton.png')} style={styles.powerOffIcon} resizeMode = "stretch" />
                    </View>   
                    <View style={styles.headerContent}>
                        <Image style={styles.headerLogo} source={require('../../assets/logo_transparent.png')} resizeMode = "stretch" />
                    </View>   
                    <View style={styles.headerContent}>
                        <Image source={require('../../assets/ring.png')} style={styles.powerOffIcon} resizeMode = "stretch"/>
                    </View>                  
                </View>
                <View style={styles.otherSection}>
                    <View style={styles.orderSection}>
                        <TouchableOpacity style={styles.orderView} onPress={() => this.navigation.navigate('order')}>
                            <Text style={{fontWeight:'bold',color:'#282828', opacity:0.8, fontSize:18}}>Order #0001</Text>
                            <View style={{flexDirection:'row',textAlign:'center',alignItems:'center',paddingLeft:'10%',paddingRight:'10%',paddingTop:'1%',paddingBottom:'1%'}}>
                                <View style={{flex:1}}>
                                    <Text style={styles.cmpTxt}>CUSTOMER:</Text>
                                    <Text style={styles.cmpTxt}>ADDRESS:</Text>
                                    <Text style={styles.cmpTxt}>PAYING WIDTH:</Text>
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={styles.cmpTxt}>MARTY MCFLY</Text>
                                    <Text style={styles.cmpTxt}>CALLE 8 ORIENTE 818A</Text>
                                    <Text style={styles.cmpTxt}>CASH</Text>
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
                            <Text style={styles.cmpTitle}>Tips</Text>
                            <Text style={styles.cmpTxt}>CHECK YOUR TIPS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tipsView} onPress={() => this.navigation.navigate('orders')}>
                            <Image source={require('../../assets/order.png')} style={styles.iconImg}/>
                            <Text style={styles.cmpTitle}>Orders</Text>
                            <Text style={styles.cmpTxt}>CHECK YOUR ORDERS</Text>
                        </TouchableOpacity>      
                    </View>
                    <View style={styles.workTimeSection}>
                        <TouchableOpacity style={styles.orderView}>
                            <Image source={require('../../assets/time.png')} style={styles.iconImg}/>
                            <Text style={{fontWeight:'bold',color:'#282828', opacity:0.8, fontSize:18}}>"Working Time</Text>
                            <Text style={styles.cmpTxt}>YOUR WORKING TIME</Text>
                        </TouchableOpacity>                    
                    </View>
                    <TouchableOpacity style={styles.reportView}>
                        <Text style={styles.reportTxt}>REPROT</Text>
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
        backgroundColor:'#ffffff',        
        paddingHorizontal: screenSize.width * (50 / 750),     
        marginTop:10   
    },  
    headerContent:{        
        alignItems:'center',
        justifyContent:'center',    
    },  
    headerLogo:{        
        width: screenSize.width * (229 / 750) *1.3,
        height: screenSize.height * (90 / 1330) *1.3,
    },
    powerOffIcon:{        
        width: screenSize.width * (43 / 750) * 1.3,
        height: screenSize.width * (43 / 750) * 1.3,
    },
    headerIcon:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',  
    },
    otherSection:{
        flex:8, 
        justifyContent:'space-between',
        alignItems:'center',      
        backgroundColor:'#ffffff',  
        paddingHorizontal: screenSize.width * (50 / 750),  
        marginTop:20            
    },
    cmpTitle:{
        fontWeight:'bold',
        color:'#282828', 
        opacity:0.8, 
        fontSize:18
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
        height:  screenSize.height * (309 / 1330)
    },
    orderView:{        
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'#ffffff', 
        textAlign:'center',
        height:'100%',
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
    tipSection:{  
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:"space-between",
        backgroundColor:'#fafafa',
        width:'100%',
        height: screenSize.height * (309 / 1330),
    },
    workTimeSection:{
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor:'#fafafa',
        width:'100%',
        height: screenSize.height * (309 / 1330),
    },
    
    tipsView:{
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'#ffffff',    
        width:'47%',
        borderColor:'#c8c8c8',
        borderWidth:1,
        borderRadius:10,
        shadowColor: '#c8c8c8',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 15,
        height:'100%'
    },
    cmpTxt:{
        fontSize:12,
        color:'#999999',
    },
    iconImg:{
        height:18,
        width:18,
        resizeMode:'stretch',
    },
    reportView:{justifyContent:'center',alignItems:'center',paddingBottom:'2%'},
    reportTxt:{fontSize:20, color:'#ff002b', borderBottomWidth:1, borderBottomColor:'#ff002b',letterSpacing:1.03}

})

