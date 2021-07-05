/**
 * Teste Portal Telemedicina
 *
 * @author Fabio Souza (fabiofns@gmail.com)
 */
import React, { Component } from 'react';
import {
    View,
    // Modal,
    StyleSheet,
    Image,
    ActivityIndicator,
    Platform
}
from 'react-native';
import {Colors} from '../helpers/Colors';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';

export default class Loading extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
        
            <Modal
                transparent={true}
                animationType={'none'}
                isVisible={this.props.visible}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.activityIndicatorWrapper}>
                        
                        <LottieView
                            ref={animation => {
                                this.animation = animation;
                            }}
                            source={require('../assets/animation/loading.json')}
                            autoPlay={true}        
                            style={{
                                width: 100,
                                height: 100
                            }}                        
                        />

                    </View>
                </View>
            </Modal>            
        )
    }
}

const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	activityIndicatorWrapper: {
		// backgroundColor: Colors.black,
        borderRadius: 10,
        padding: 20,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
        // opacity: 0.5
	}
});