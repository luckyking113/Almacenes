import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';

const screenSize = {
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').height),
}

export default class TipsDay extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.listView}>
                    <View style = {styles.order}>
                        <View style={styles.orderContent}>
                            <Text style={styles.title}>Order #0004</Text>
                            <View style={{flexDirection:'row', marginTop:6}}>
                                <Text style={styles.name}>CUSTOMER: </Text>
                                <Text style={styles.detail}>MARTY MCFLY</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:6}}>
                                <Text style={styles.name}>ADDRESS: </Text>
                                <Text style={styles.detail}>CALLE 8 ORIENTE 818A</Text>
                            </View>
                            <Text style={styles.orderState}>Delivered</Text>
                        </View>
                        <View style={styles.orderBalance}>
                            <Text style={styles.balance}>$20</Text>
                        </View>                        
                    </View>

                    <View style = {styles.order}>
                        <View style={styles.orderContent}>
                            <Text style={styles.title}>Order #0004</Text>
                            <View style={{flexDirection:'row', marginTop:6}}>
                                <Text style={styles.name}>CUSTOMER: </Text>
                                <Text style={styles.detail}>MARTY MCFLY</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:6}}>
                                <Text style={styles.name}>ADDRESS: </Text>
                                <Text style={styles.detail}>CALLE 8 ORIENTE 818A</Text>
                            </View>
                            <Text style={styles.orderState}>Delivered</Text>
                        </View>
                        <View style={styles.orderBalance}>
                            <Text style={styles.balance}>$20</Text>
                        </View>                        
                    </View>

                    <View style = {styles.order}>
                        <View style={styles.orderContent}>
                            <Text style={styles.title}>Order #0004</Text>
                            <View style={{flexDirection:'row', marginTop:6}}>
                                <Text style={styles.name}>CUSTOMER: </Text>
                                <Text style={styles.detail}>MARTY MCFLY</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:6}}>
                                <Text style={styles.name}>ADDRESS: </Text>
                                <Text style={styles.detail}>CALLE 8 ORIENTE 818A</Text>
                            </View>
                            <Text style={styles.orderState}>Delivered</Text>
                        </View>
                        <View style={styles.orderBalance}>
                            <Text style={styles.balance}>$20</Text>
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
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fafafa',
        paddingHorizontal:screenSize.width * (60 / 750),
        paddingTop:screenSize.height * ( 46 / 1330),
        width:screenSize.width
    },
    listView:{
        flex:1,
        backgroundColor:'#ffffff',
        width:'100%'
    },
    order:{        
        flexDirection:'row',    
        justifyContent:'space-between',
        alignItems:'center',
        padding:screenSize.height * ( 56 / 1330)

    },
    orderContent:{
        flex:5,
        flexDirection:'column',
        alignSelf:'flex-start',
        justifyContent:'center',        
    },
    orderBalance:{
        flex:1,
        justifyContent:'center',
        alignSelf:'center'
    },
    title:{
        fontSize:18,
        color:'#525252',
        fontWeight:'bold'
    },
    name:{
        fontSize:12,
        color:'#000000',
        opacity:0.3
    },
    detail:{
        fontSize:12,
        color:'#000000',
        opacity:0.6
    },
    orderState:{
        fontSize:12,
        color:'#42b72a',   
        marginTop:14  
    },
    balance:{
        fontSize:22,
        color:'#29abe2',
        fontWeight:'bold'
    }
});