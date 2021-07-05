/**
 * Teste Portal Telemedicina
 *
 * @author Fabio Souza (fabiofns@gmail.com)
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
	TouchableOpacity,
	Text,
    ScrollView,
    Image, 
}
from 'react-native';
import Swiper from 'react-native-swiper';
import Space from '../helpers/Space';
import { Colors } from '../helpers/Colors';
import LottieView from 'lottie-react-native';

export default class Steps extends Component {   
    
	render() {

		return (
		
			<ScrollView
                style={{
                    backgroundColor: Colors.white,
                    flex: 1
                }}
            >

                <View
                    style={{
                        flexDirection: 'column',                        
                    }}
                >                         

                    <Swiper 
                        activeDot={
                            <View 
                                style={{
                                    backgroundColor: '#007aff', 
                                    width: 8, 
                                    height: 8, 
                                    borderRadius: 4, 
                                    marginLeft: 3, 
                                    marginRight: 3, 
                                    marginTop: 3, 
                                    marginBottom: 3,
                                }} 
                            />
                        }
                        style={styles.wrapper} showsButtons={false} loop={false} autoplay={false} autoplayTimeout={3}>
                        
                        <View style={styles.slide1}>
                            
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column'
                                }}
                            >   

                                <Image
                                    source={require('../assets/logo.png')}
                                />      

                                <Space />   
                                <Space />                     

                                <Text
                                    style={{
                                        fontSize: 25,
                                        textAlign: 'center',
                                        fontFamily: 'segoe-ui-bold'
                                    }}
                                >
                                    Obrigado por instalar nosso app.
                                </Text>                                

                                <LottieView
                                    ref={animation => {
                                        this.animation = animation;
                                    }}
                                    style={{
                                        width: 350,
                                        height: 350
                                    }}
                                    source={require('../assets/animation/saude1.json')}
                                    autoPlay={true}                                
                                />

                            </View>

                        </View>
                        
                        <View style={styles.slide2}>

                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column'
                                }}
                            >

                                <Image
                                    source={require('../assets/logo.png')}
                                />      

                                <Space />   
                                <Space />

                                <Text
                                    style={{
                                        fontSize: 18,
                                        textAlign: 'center',
                                        fontFamily: 'segoe-ui-bold'
                                    }}
                                >
                                    Esta tela de boas vindas aparece somente na primeira vez que abrir o app.
                                </Text>

                                <Space />

                                <LottieView
                                    ref={animation => {
                                        this.animation = animation;
                                    }}
                                    style={{
                                        width: 350,
                                        height: 350
                                    }}
                                    source={require('../assets/animation/saude2.json')}
                                    autoPlay={true}                                
                                />

                            </View>

                        </View>
                        
                        <View style={styles.slide3}>

                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                }}
                            >

                                <Space />

                                <Image
                                    source={require('../assets/logo.png')}
                                />      

                                <Space />

                                <LottieView
                                    ref={animation => {
                                        this.animation = animation;
                                    }}
                                    style={{
                                        width: 350,
                                        height: 350
                                    }}
                                    source={require('../assets/animation/saude.json')}
                                    autoPlay={true}                                
                                />

                            </View>

                            <Space />
                            
                            <TouchableOpacity
                                style={{
                                    backgroundColor: Colors.color2,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '90%',
                                    height: 50,
                                    flexDirection: 'row',
                                    borderRadius: 20,
                                    marginBottom: 130,
                                }}
                                onPress={() => {

                                    this.props.navigation.navigate('Container');
                                }}
                            >

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',						
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: Colors.white,
                                            fontFamily: 'segoe-ui-bold',
                                            fontSize: 15,
                                            textAlign: 'center'
                                        }}
                                    >
                                        INICIAR
                                    </Text>

                                </View>
                            
                            </TouchableOpacity>

                        </View>
                    </Swiper>

                </View>

            </ScrollView>
				
		)
	}
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        margin: 10,
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        margin: 10,
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        margin: 10,
    },    
})