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
                {/* <Spinner
                    //visibility of Overlay Loading Spinner
                    // visible={this.state.loading}
                    //Text with the Spinner
                    //Text style of the Spinner Text
                    textStyle={styles.spinnerTextStyle}
                /> */}
                <View style={styles.logoBox}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo_transparent.png')}
                        resizeMode="stretch"
                    />
                </View>
                <View style={styles.inputBox_email}>
                    <Icon name="mail" size={26} style={styles.inputIcon} />
                    <TextInput
                      style={styles.inputs}
                      // eslint-disable-next-line no-shadow
                      // onChangeText={email => this.setState({email})}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      placeholder="Email"
                      placeholderTextColor="#6a6a6a"
                      selectionColor="#fff"
                      keyboardType="email-address"
                    // value={email}
                    // onSubmitEditing={() => this.password.focus()}
                    />
                </View>
                <View style={styles.inputBox}>
                    <Icon name="user" size={26} style={styles.inputIcon} />
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
                <Text
                    style={styles.forget}
                    // onPress={() => {
                    //         this.navigation.navigate('ForgetPassword', {
                    //             token: this.state.token,
                    //         });
                    //     }
                    // }
                    >
                    Forget Password
                </Text>                
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
    },
      logoBox: {
        width: theme.screenWidth,
        marginTop: theme.screenHeight / 8,
        height: Utils.size.width / 9,
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
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center',
        color:'#6a6a6a',
        opacity:0.6
      },
      inputBox_email: {
        borderColor: '#6a6a6a',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 1,
        width: (Utils.size.width * 3) / 4,
        height: 45,
        marginTop: theme.screenHeight / 4,
        flexDirection: 'row',
        alignItems: 'center',
      },
      inputBox: {
        borderColor: '#6a6a6a',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 1,
        width: (Utils.size.width * 3) / 4,
        height: 45,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      inputs: {
        height: 45,
        borderBottomColor: '#FFFFFF',
        textAlign: 'center',
        marginLeft: -50,
        flex: 1,
        // fontFamily: theme.dashboad.font,
      },
      button: {
        width: (Utils.size.width / 3) * 2,
        // backgroundColor: '#2aace3',
        borderRadius: 25,
        marginTop: theme.screenHeight / 6,
        height: 40,
        // shadowColor: "#000000",
        // shadowOpacity: 0.25,
        // shadowOffset: { width: 0, height: 10 },
        // shadowRadius: 10,
        // elevation: 19,
      },
      button_content: {
        width: (Utils.size.width / 3) * 2,
        paddingVertical: 10,
        borderRadius: 25,
        height: 40,
      },
      buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
        // fontFamily: theme.dashboad.font,
      },
      forget: {
        marginTop: 40,
        color: '#2aace3',
        textDecorationLine: 'underline',
        borderBottomWidth:1, 
        borderBottomColor:'#2aace3'
        // fontFamily: theme.dashboad.font,
      },
});