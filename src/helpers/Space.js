/**
 * Arquivo feito para dar espaco entre componentes na tela e nao desalinhar
 * 
 * @author Fabio Souza
 */
import React, {Component} from 'react';
import {View} from 'react-native';

export default class Space extends Component {

    render() {

        return (

            <View 
                style={{
                    height: this.props.height > 0 ? this.props.height : 20,
                }}
            >

            </View>
        )
    }
}