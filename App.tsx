import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen } from './screens/welcomeScreen';

export default function App() {
	return (
		<View>
			<WelcomeScreen />
		</View>
	);
}
