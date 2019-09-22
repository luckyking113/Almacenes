import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
import ActionSheet from 'react-native-actionsheet';

const screenSize = {
    width: Math.round(Dimensions.get('window').width),
    heigth: Math.round(Dimensions.get('window').height),
}

export default class OrderScreen extends Component {
	showActionSheet = () => {
		//To show the Bottom ActionSheet
		this.ActionSheet.show();
	};

    render() {
		var optionArray = [
			<View style={styles.actionContainer}>
				<View style={styles.selectedOrderContainer}>
					<View style={styles.selectedOrderContent}>
						<View style={styles.userImg}>
							<Text>Image</Text>	
						</View>
						<View style={styles.selectedOrderDetail}>
							<Text>Order Content</Text>
						</View>
					</View>
					<View style={styles.orderStatusBtn}>
						<TouchableOpacity>
							<Text>Order has been picked up</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.selectedOrderStatus}>
					<Text style={{color: 'yellow'}}>Banana</Text>
				</View>
			</View>,
			'Cancel',
		];
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
							<TouchableOpacity onPress={this.showActionSheet}>
								<View style={styles.notifiedOrder}>
									<Text style={styles.notifiedTxt}>3</Text>
								</View>
								<View style={styles.orderImg}>
									<Image source={require('../../../assets/orderimg1.png')} style={styles.orderDetailImg}/>
								</View>
							</TouchableOpacity>
                        </View>
                        <View style={styles.orderDetailTxt}>
                            <Text>$20.00 | Product name</Text>
                            <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </Text>
                        </View>
                    </View>
                </ScrollView> 
			    <ActionSheet
					ref={o => (this.ActionSheet = o)}
					//Title of the Bottom Sheet
					// title={'Which one do you like ?'}
					//Options Array to show in bottom sheet
					options={optionArray}
					//Define cancel button index in the option array
					//this will take the cancel option in bottom and will highlight it
					cancelButtonIndex={0}
					//If you want to highlight any specific option you can use below prop
					// destructiveButtonIndex={0}
					// onPress={index => {
					// 	//Clicking on the option will give you the index of the option clicked
					// 	alert(optionArray[index]);
					// }}
				/>
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
	},
	
	actionContainer:{
		borderTopLeftRadius:20,
		borderTopRightRadius:20,
		padding:10,
		width: screenSize.width,
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'row'
	},
	selectedOrderContainer:{
		flex:2,
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
	},
	selectedOrderStatus:{
		flex:1,
		flexDirection:'column'
	},

	selectedOrderContent:{
		flexDirection:'row'
	},

	orderStatusBtn:{

	},
	userImg:{

	},
	selectedOrderDetai:{
		
	}

});