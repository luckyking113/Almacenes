import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import {Text, View, StyleSheet, Image, TextInput,TouchableOpacity} from 'react-native';
import Dimensions from 'Dimensions';

const theme = {
    screenWidth: Math.round(Dimensions.get('window').width),
    screenHeight: Math.round(Dimensions.get('window').height),
}

const Utils = {
    size:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
}


export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.navigation = this.props.navigation;
    }

    checkLogin(){
        this.navigation.navigate('dashboard');
    }
    render(){
        return(
            <View style={styles.container}>        
                <View style={styles.logoBox}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo.png')}
                        resizeMode="stretch"
                    />
                </View>
                <View style={{marginTop:-35}}>
                    <View style={styles.inputBox_email}>
                        <Image 
                            style = {styles.inputIcon}
                            source={require('../../assets/email.png')}
                            resizeMode="stretch"
                        />                        
                        <TextInput
                            style={styles.inputs}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="Email"
                            placeholderTextColor="#6a6a6a"
                            selectionColor="#fff"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Image 
                            style = {styles.inputIcon1}
                            source={require('../../assets/lock.png')}
                            resizeMode="stretch"
                        />      
                        <TextInput
                            style={styles.inputs}
                            // eslint-disable-next-line no-shadow
                            // onChangeText={password => this.setState({password})}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="#6a6a6a"
                            // value={password}
                            // ref={input => (this.password = input)}
                        />
                    </View>
                </View>

                <View style={{justifyContent:'center', textAlign:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                        this.checkLogin();
                        }}
                        >
                        <LinearGradient
                            colors={['#2aace3', '#1d759b']}
                            style={styles.button_content}
                            start={{
                                x: 0.1,
                                y: 0.1,
                            }}
                            end={{x: 0.9, y: 0.9}}>
                        <Text style={styles.buttonText}>Sign in</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View>
                        <Text
                            style={styles.forget}
                            >
                            Forget Password
                        </Text> 
                    </View>
                </View>         
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'#ffffff',
        justifyContent:'space-between',
        marginTop:theme.screenHeight / 5,
        marginBottom: theme.screenHeight / 20
    },
    logo: {
        width: Utils.size.width / 2,
        height: Utils.size.width / 6,
        alignSelf: 'stretch',
        alignContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    inputIcon: {
        marginLeft: 20,
        justifyContent: 'center',
        color:'#6a6a6a',
        opacity:0.6,
        alignItems:'center',
        height: Utils.size.height * (20 / 1330),
        width: Utils.size.width * (30 / 750),
    },
    inputIcon1: {
        marginLeft: 20,
        justifyContent: 'center',
        color:'#6a6a6a',
        opacity:0.6,
        alignItems:'center',
        height: Utils.size.height * (38 / 1330),
        width: Utils.size.width * (30 / 750),
    },
    inputBox_email: {
        borderColor: '#6a6a6a',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 1,
        width: (Utils.size.width * 3) / 4,
        height: Utils.size.height * (90 / 1330) ,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputBox: {
        borderColor: '#6a6a6a',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 1,
        width: (Utils.size.width * 3) / 4,
        height: Utils.size.height * (90 / 1330) ,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: Utils.size.height * (90 / 1330) ,
        borderBottomColor: '#FFFFFF',
        textAlign: 'center',
        alignItems:'center',
        flex: 1,
        marginLeft:'-15%'
        // fontFamily: theme.dashboad.font,
    },
    button: {
        width: (Utils.size.width * 3) / 4,
        // backgroundColor: '#2aace3',
        borderRadius: 25,    
        height: Utils.size.height * (90 / 1330) ,
        // shadowColor: "#000000",
        // shadowOpacity: 0.25,
        // shadowOffset: { width: 0, height: 10 },
        // shadowRadius: 10,
        // elevation: 19,        
    },
    button_content: {
        width: (Utils.size.width * 3) / 4,
        paddingVertical: 10,
        borderRadius: 25,
        height: Utils.size.height * (90 / 1330) ,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
        // fontFamily: theme.dashboad.font,
    },
    forget: {
        color: '#2aace3',
        textDecorationLine: 'underline',        
        borderBottomColor:'#2aace3',
        marginTop: theme.screenHeight / 20,
        fontSize:16,
        textAlign:'center',
        alignItems:'center'    
        // fontFamily: theme.dashboad.font,
    },
});