import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={screenStyles.hero}>
				<View>
					<View>
						<Text>Location</Text>
						<Text>Los Angeles, US</Text>
					</View>
					<View>{/* image here */}</View>
				</View>
				<View>
					{/* icon */}
					<TextInput />
					<View>{/* icon */}</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const screenStyles = StyleSheet.create({
	hero: {
		backgroundColor: '#131313',
		height: '30%',
	},
});
