import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screens
import HomeScreen from './screens/homeScreen';
import { WelcomeScreen } from './screens/welcomeScreen';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Welcome'>
				<Stack.Screen
					name='Welcome'
					component={WelcomeScreen}
					options={{
						headerShown: false,
						statusBarHidden: true,
					}}
				/>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
