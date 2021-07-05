/**
 * Teste Portal Telemedicina
 *
 * @author Fabio Souza (fabiofns@gmail.com)
 */

import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,    
} from 'react-native';
import {Colors} from '../helpers/Colors';
import NavigationBar from 'react-native-navbar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import LottieView from 'lottie-react-native';

class Notifications extends React.Component {

    render() {

        return (
            <>     
            <View
                style={{
                    flex: 1,
                    backgroundColor: Colors.fundoApp,
                }}
            >                

                <NavigationBar
                    leftButton={
                        <TouchableOpacity onPress={ () => {

                            this.props.navigation.goBack()
                        }}
                        style={{
                            justifyContent: 'center',
                            marginLeft: 10,
                            width: 100
                        }}
                    >
                        <FontAwesomeIcon icon={ faChevronLeft } size={25} color={Colors.color5} />

                    </TouchableOpacity>
                    }  
                    title={
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 30,
                                    color: Colors.color7,
                                    fontFamily: 'segoe-ui-bold'
                                }}
                            >
                                Notifications
                            </Text>
                        </View>
                    }                                                                         
                    style={{
                        backgroundColor: Colors.white,
                        height: 60,
                        width: '100%',
                        alignItems: 'center',
                    }}
                    tintColor={Colors.fundoApp}
                    statusBar={{
                        tintColor: Colors.black,                        
                        backgroundColor: Colors.color5,
                        style:'light-content'
                    }}
                /> 

                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}
                >
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={{
                            width: 350,
                            height: 350
                        }}
                        source={require('../assets/animation/notifications.json')}
                        autoPlay={true}      
                        loop={true}                          
                    />
                </View>

            </View>
            </>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',		
    },	
});

export default Notifications;