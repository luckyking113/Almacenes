import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Dimensions from 'Dimensions';
import LinearGradient from 'react-native-linear-gradient';

const screenSize = {
    width: Math.round(Dimensions.get('window').width),
    height: Math.round(Dimensions.get('window').height),
}

export default class TipsHeaderMain extends Component {
    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
    }

    navigationActiion(){
        this.navigation.navigate('dashboard');
    }

    componentWillMount(){
        StatusBar.setHidden(false);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navcontainer}>
                    <TouchableOpacity             
                        onPress={() => {
                        this.navigationActiion();
                        }}>
                        <Image source={require('../../../assets/back.png')} style={styles.backBtn} />
                    </TouchableOpacity>
                    <View style={styles.navheaderTitle}>
                        <Text style={{color:'#525252', fontSize:18}}>Tips</Text>                        
                    </View>                
                    <Image source={require('../../../assets/search.png')} style={styles.searchBTN} resizeMode="stretch"/>
                </View>        
                
                <View style={styles.balance} >
                    <LinearGradient colors={['#0065fa', '#0086ff', '#00b2ff']} style={styles.linearGradient}>
                        <Text style={styles.headerTitle}>Current Balance</Text>
                        <Text style={styles.amount}>$50.00</Text>
                    </LinearGradient>
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',    
        height: 70 + screenSize.height * (269 / 1330),
    },  
    navcontainer:{        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // height:screenSize.height / 9,
        paddingHorizontal:screenSize.width * 5/100,   
        borderWidth:1,     
        borderColor: '#c8c8c8',
        height:70,
        width:screenSize.width
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center',
        color:'#6a6a6a',
        opacity:0.6,
    },
    navheaderTitle:{
        flexDirection:'column',
        textAlign:'center',
        alignItems:'center',
        marginVertical:15
    },
    backBtn:{
        width:30,
        resizeMode:'stretch'
    },

    headerContainer:{
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
    },
    searchBTN:{        
        width:23,        
        height:25    
    }
});