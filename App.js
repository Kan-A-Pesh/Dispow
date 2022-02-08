import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppContainer from './src/containers/AppContainer';

export default function App() {
	return (
		<View style={styles.container}>
			<AppContainer />
			<StatusBar
				style="auto"
				animated={true}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
