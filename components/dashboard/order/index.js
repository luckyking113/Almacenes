import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';
import Dimensions from 'Dimensions';

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
                            <View style={styles.notifiedOrder}>
                                <Text style={styles.notifiedTxt}>3</Text>
                            </View>
                            <View style={styles.orderImg}>
                                <Image source={require('../../../assets/orderimg1.png')} style={styles.orderDetailImg}/>
                            </View>
                        </View>
                        <View style={styles.orderDetailTxt}>
                            <Text>$20.00 | Product name</Text>
                            <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </Text>
                        </View>
                    </View>         
                    <View style={styles.orderDetailContainer}>
                        <View style={styles.orderDetailSection}>
                            <View style={styles.notifiedOrder}>
                                <Text style={styles.notifiedTxt}>1</Text>
                            </View>
                            <View style={styles.orderImg}>
                                <Image source={require('../../../assets/orderimg1.png')} style={styles.orderDetailImg}/>
                            </View>
                        </View>
                        <View style={styles.orderDetailTxt}>
                            <Text>$20.00 | Product name</Text>
                            <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </Text>
                        </View>
                    </View>     
                    <View style={styles.orderDetailContainer}>
                        <View style={styles.orderDetailSection}>
                            <View style={styles.notifiedOrder}>
                                <Text style={styles.notifiedTxt}>1</Text>
                            </View>
                            <View style={styles.orderImg}>
                                <Image source={require('../../../assets/orderimg1.png')} style={styles.orderDetailImg}/>
                            </View>
                        </View>
                        <View style={styles.orderDetailTxt}>
                            <Text>$20.00 | Product name</Text>
                            <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </Text>
                        </View>
                    </View>     
                </ScrollView>        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',        
        justifyContent:'center',
        width: screenSize.width
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
    }
});