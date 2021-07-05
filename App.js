/**
 * Aplicativo Vendedor AppRoi
 *
 * @author Fabio Souza (fabiofns@gmail.com)
 * @copyright Agencia Frog
 */

 import React from 'react';
 import {
	   StyleSheet,
	   View,
	   StatusBar,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import {Provider} from 'react-redux';
 import {Store} from './src/store';
 import {Colors} from './src/helpers/Colors';
 import Orientation from 'react-native-orientation-locker';
 import Start from './src/views/Start';
 import Container from './src/views/Container';
 import Steps from './src/views/Steps';
 import Specialists from './src/views/Specialists';
 
 const Stack = createStackNavigator();
 
 class App extends React.Component {
 
	 componentDidMount() {
 
		 Orientation.lockToPortrait();
	 }
 
	 render() {
 
		 return (
			 <>
			 <StatusBar backgroundColor={Colors.black} />
			 <View style={{ flex: 1 }}>
				 <Provider store={Store}>
 
					 <NavigationContainer>
 
						 <Stack.Navigator initialRouteName="Start">
 
							 <Stack.Screen 
								 name="Start" 
								 component={Start} 
								 options={{
									 headerShown: false,									
								 }} 									
							 />
 
							 <Stack.Screen 
								 name="Container" 
								 component={Container} 
								 options={{
									 headerShown: false,
								 }} 									
							 />
 
							 <Stack.Screen 
								 name="Steps" 
								 component={Steps} 
								 options={{
									 headerShown: false,
								 }} 									
							 />	

							 <Stack.Screen 
								 name="Specialists" 
								 component={Specialists} 
								 options={{
									 headerShown: false,
								 }} 									
							 />							
 
						 </Stack.Navigator>
 
					 </NavigationContainer>
 
				 </Provider>				
 
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
 
 export default App;
 