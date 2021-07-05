/**
 * Teste Portal Telemedicina
 *
 * @author Fabio Souza (fabiofns@gmail.com)
 */

import React from 'react';
import {
	StyleSheet,
	View,
	StatusBar,
} from 'react-native';
import {Colors} from '../helpers/Colors';
import Orientation from 'react-native-orientation-locker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faHome, faComment, faBolt } from '@fortawesome/free-solid-svg-icons'

import Home from './Home';
import Chat from './Chat';
import Notifications from './Notifications';
import More from './More';

const Tab = createBottomTabNavigator();

class Container extends React.Component {

	componentDidMount() {

		Orientation.lockToPortrait();
	}

	render() {

		return (
			<>
			<StatusBar backgroundColor={Colors.black} />

			<View style={{ flex: 1 }}>

				<Tab.Navigator
					activeColor={Colors.color2}
					inactiveColor={Colors.silver}
					initialRouteName="Home"
				>

					<Tab.Screen 
						name="Home" 
						component={Home} 
						options={{
          					tabBarLabel: 'Home',
          					tabBarIcon: ({ color }) => (
            					<FontAwesomeIcon icon={ faHome } size={25} color={Colors.silver} />
							),							
						}} 
					/>

					<Tab.Screen 
						name="Chat" 
						component={Chat} 
						options={{
          					tabBarLabel: 'Chat',
          					tabBarIcon: ({ color }) => (
            					<FontAwesomeIcon icon={ faComment } size={25} color={Colors.silver} />
							),	
							tabBarBadge: 3,						
						}} 
					/>

					<Tab.Screen 
						name="Notifications" 
						component={Notifications} 
						options={{
          					tabBarLabel: 'Notifications',
          					tabBarIcon: ({ color }) => (
            					<FontAwesomeIcon icon={ faBolt } size={25} color={Colors.silver} />
							),	
						}} 
					/>

					<Tab.Screen 
						name="More" 
						component={More} 
						options={{
          					tabBarLabel: 'More',
          					tabBarIcon: ({ color }) => (
            					<FontAwesomeIcon icon={ faBars } size={25} color={Colors.silver} />
							),							
						}} 
					/>

				</Tab.Navigator>

			</View>
			</>
		)
	}
};

export default Container;
