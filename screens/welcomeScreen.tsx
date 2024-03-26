import {
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export const WelcomeScreen = () => {
	return (
		<ImageBackground
			source={require('../assets/images/splash1.png')}
			style={{
				width: '100%',
				height: '100%',
				justifyContent: 'flex-end',
				alignItems: 'center',
			}}
		>
			<View
				style={{ marginHorizontal: 15, width: '100%', paddingHorizontal: 20 }}
			>
				<Text style={screenStyles.mainText}>
					Coffee so good, your taste buds will love it.
				</Text>
				<Text style={screenStyles.secondaryText}>
					The best grain, the finest roast, the powerful flavor.
				</Text>
				<TouchableOpacity style={screenStyles.startBtn}>
					<Text style={screenStyles.btnText}>Get Started</Text>
				</TouchableOpacity>
			</View>
			<StatusBar style='light' />
		</ImageBackground>
	);
};

const screenStyles = StyleSheet.create({
	mainText: {
		color: '#fff',
		fontSize: 44,
		fontWeight: '800',
		textAlign: 'center',
	},
	secondaryText: {
		fontSize: 16,
		color: '#d0d0d0',
		marginTop: 10,
		paddingHorizontal: 35,
		textAlign: 'center',
		lineHeight: 24,
	},

	startBtn: {
		backgroundColor: '#c37842',
		marginVertical: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 15,
		padding: 20,
		width: '100%',
	},
	btnText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '600',
	},
});
