import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
import RBSheet from "react-native-raw-bottom-sheet";
import LinearGradient from 'react-native-linear-gradient';

const screenSize = {
    width: Math.round(Dimensions.get('window').width),
    heigth: Math.round(Dimensions.get('window').height),
}

export default class OrderScreen extends Component {
    render() {

          
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.headerTitle}>
                        <Text style={styles.headerTxt}>MARCLLOUSE: GADY R.</Text>
                        <Text style={styles.headerTxt}>DE;OVERU GADRICL C.</Text>
                        <Text style={styles.headerTxt}>15.11.2019 | 04:20</Text>
                    </View>
                    <View style={styles.orderDetailContainer}>
                        <View style={styles.orderDetailSection}>
                            <TouchableOpacity        
                                onPress={() => {
                                    this.RBSheet.open();
                                }}>
								<View style={styles.notifiedOrder}>
									<Text style={styles.notifiedTxt}>3</Text>
								</View>
								<View style={styles.orderImg}>
									<Image source={require('../../../assets/orderimg1.png')} style={styles.orderDetailImg}/>
								</View>
							</TouchableOpacity>
                        </View>
                        <View style={styles.orderDetailTxt}>
                            <Text style={{opacity:0.4}}>$20.00 | Product name</Text>
                            <Text style={{opacity:0.8}}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </Text>
                        </View>
                    </View>
                </ScrollView> 
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    height={screenSize.heigth * (450/1330)}
                    duration={screenSize.heigth * (450/1330)}
                    customStyles={{
                        container: {
                            // justifyContent: "center",
                            alignItems: "center",
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                        }
                    }}
                    >
                    <View>
                        <View style={styles.RBheaderline}>
                            <View style={styles.RBheaderWline}></View>
                        </View>
                        <View style={styles.RBContainer}>
                            <View style={styles.RBOrderContainer}>
                                <View style={styles.RBOrderDetail}>
                                    <View style={styles.RBOrderImg}>
                                        <Image source={require('../../../assets/actimg.png')} resizeMode="stretch" style={{width:'100%', height:'70%'}}/>
                                    </View>
                                    <View style={styles.RBOrderConent}>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={styles.RBorderHeader}>MARTY</Text>
                                            <Text style={styles.RBorderHeaderBold}> MCFLY</Text>
                                        </View>                                        
                                        <View style={{marginTop:5}}>
                                            <Text style={styles.RBdetailFont}>CALL 8 OTE. 818</Text>  
                                            <Text style={styles.RBdetailFont}>SANTIAGO XICOTENCO</Text>  
                                            <Text style={styles.RBdetailFont}>72810 SAN ANDRES CHOLULA, PUE</Text>  
                                            <Text style={styles.RBdetailFontBold}>APARTMENT #202</Text>
                                        </View>
                                        
                                        <View style={{marginTop:5}}>
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={styles.RBdetailFont}>ORDER TOTAL: </Text>  
                                                <Text style={styles.RBdetailFontBold}> $163</Text>  
                                            </View>
                                            
                                            <View style={{flexDirection:'row'}}>
                                                <Text style={styles.RBdetailFont}>PAYING WITH: </Text>  
                                                <Text style={styles.RBdetailFontBold}> $200 CASH</Text>  
                                            </View>                                  
                                        </View>
                                    </View>
                                </View>
                                <View style={{flex:1,width:'100%',alignItems:'center', justifyContent:"center"}}>
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
                                        <Text style={styles.buttonText}>Order has been picked up</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>                       
                                </View>                         
                            </View> 
                            <View style={styles.RBDuration}>
                                <View style={{height:15, backgroundColor:'black', justifyContent:'center', alignItems:'center',paddingHorizontal:2}}>
                                    <Text style={{fontWeight:'bold',color:'#00d44d', opacity:0.8}}>02:38</Text>
                                </View>                                
                                <View style={styles.RBdurationMapView}>
                                    <View style={styles.RBOrderDetail1}>
                                        <Image source={require('../../../assets/map.png')} resizeMode="stretch" style={{width:'100%', height:'100%'}} />
                                    </View>
                                    <View style={{flex:1,width:'100%',alignItems:'center', justifyContent:"center"}}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            // onPress={() => {
                                            // this.checkLogin();
                                            // }}
                                            >
                                            <LinearGradient
                                                colors={['#009b01', '#00bf11','#00f026']}
                                                style={styles.button_content}
                                            >
                                                <Image source={require('../../../assets/phone.png')} style={{width:23, height:23}} resizeMode="stretch"/>
                                            </LinearGradient>
                                        </TouchableOpacity>                       
                                    </View> 
                                </View>
                            </View> 
                            
                        </View>
                        
                    </View>
                </RBSheet>
			</View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',        
        justifyContent:'center',
        width: screenSize.width,        
    },
    scrollContainer:{
        paddingHorizontal: screenSize.width *5/100,
        paddingVertical: screenSize.width *5/100,
        alignSelf: 'stretch' 
    },
    headerTitle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',    
        width:'100%',
        marginBottom:10,
    },
    headerTxt:{
        fontSize:10,
        color:'#999999'
    },
    orderDetailContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: screenSize.width * 3/100,    
        width: screenSize.width,           
    },
    orderDetailSection:{
        flex:1,    
        flexDirection:'column',
        paddingRight: screenSize.width * 3/100,    
    },
    notifiedOrder:{
        backgroundColor:'red',
        textAlign:"center",
        alignSelf:'flex-end',
        width:30,
        height:30,        
        alignItems:'center',        
        zIndex:100,
        borderRadius:50,        
    },
    notifiedTxt:{
        color:'#ffffff',
        fontSize:20,        
    },
    orderImg:{
        flex:1,
        zIndex:-1,        
        marginTop:-15

    },  
    orderDetailImg:{
        width:'100%',
        height:(screenSize.width - screenSize.width * 6 / 100) /3,
        resizeMode:'stretch',
    },
    orderDetailTxt:{
        flex:2,
        flexDirection:'column',        
        paddingLeft: screenSize.width * 3/100,
        marginTop:15
	},
	
    RBheaderline:{
        height:20, 
        backgroundColor:'#6acaf0', 
        width:screenSize.width,
        justifyContent: 'center',
        alignItems:'center',
    },
    RBheaderWline:{
        height:6,
        backgroundColor:'white',
        borderRadius:5,
        width:120,
    },
    RBContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:20,
        paddingTop:0,
        width:screenSize.width
    },
    RBOrderContainer:{
        flex:3,
        // backgroundColor:'green',
        height:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'column',
        paddingTop:20
        
    },

    RBOrderDetail:{
        flex:3,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
    },
    RBOrderDetail1:{
        flex:3,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
        paddingVertical:5
    },
    RBOrderImg:{
        flex:1,    
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    RBOrderConent:{
        flex:2,
        // backgroundColor:'orange',
        height:'100%',  
        flexDirection:'column',
        justifyContent: 'center',
        marginLeft:10
    },
    RBdetailFont:{
        fontSize:9,
        opacity:0.4
    },
    RBdetailFontBold:{
        fontSize:9,
        opacity:0.6,
        fontWeight:'bold'
    },
    RBorderHeader:{
        opacity:0.4,
        fontWeight:'bold',
    },
    RBorderHeaderBolD:{
        opacity:0.6,
        fontWeight:'bold',
    },
    button: {
        width: '100%',        
        borderRadius: 25,    
        height: '100%', 
        alignItems:'center'
    },
    button_content: {
        width: '100%',
        paddingVertical: 10,
        borderRadius: 25,
        height: '100%', 
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText: {
        // fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
        // fontFamily: theme.dashboad.font,
    },
    RBDuration:{
        flex:1,
        // backgroundColor:'blue',
        height:'100%',
        alignItems:'center',
        marginLeft:5,
        paddingTop:5
    },
    RBdurationMapView:{
        width:'100%',
        flex:1,    
    }
});