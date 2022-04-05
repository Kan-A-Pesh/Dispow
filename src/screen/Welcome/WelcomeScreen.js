import React from "react";

import { Image, StyleSheet, View } from "react-native";
import AppStyles from "../../styles/AppStyles";
import { LinearGradient } from 'expo-linear-gradient';
import Label from "../../components/Common/Label";
import Button from "../../components/Common/Button";
import storage from "../../../api/common/storage";

export default function WelcomeScreen({navigation})
{	
	React.useEffect(() => {
		storage.getDataAsync("auth").then(async (auth) => {
			if (auth)
			{
				global.userId = auth.id;
				navigation.replace("Main");
			}
		});
	}, []);

	return (
		<LinearGradient colors={['#24063F', '#102542']} style={[AppStyles.welcomeScreen]}>
			{/* <Image
				source={require('../../../assets/icons/icon.png')}
				style={styles.icon}
			/> */}
			<Label
				type="extraBold"
				size={68}
				style={styles.title}
			>
				Welcome!
			</Label>
			<Label
				type="regular"
				size={20}
				style={styles.text}
			>
				Start comparing your free time with your friends now!
			</Label>
			<Button 
				text="Create account"
				style={styles.button}
				size={22}
				onPress={() => {
					navigation.push("Register")
				}}
			/>
			<Button 
				text="Login"
				appearance="outlined"
				style={styles.button}
				size={22}
				onPress={() => {
					navigation.push("Login")
				}}
			/>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	button: {
		width: "75%",
		margin: 12.5
	},
	title: {
		textAlign: "center",
		marginTop: 30
	},
	text: {
		textAlign: "center",
		marginBottom: 45
	},
	icon: {
		height: 200,
		width: 206,
		resizeMode: 'center',
	},
})