/**
 * Teste Portal Telemedicina
 *
 * @author Fabio Souza (fabiofns@gmail.com)
 */

import React from 'react';
import {
  	View,
} from 'react-native';
import {getData} from '../helpers/Utils';

class Start extends React.Component {

	state = {
		home: [],
	}

	componentDidMount() {		
	
		getData('@firstTime').then(result => {

			if (result) {

				this.props.navigation.navigate('Container');
			}	
			else {

				this.props.navigation.navigate('Steps');
			}
	  })
	}

	render() {

		return (
            <>
			<View
				style={{
					flex: 1
				}}
			>
				{this.state.home}
			</View>
            </>
		)
	}
};

export default Start;
