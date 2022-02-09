import { Image, StyleSheet } from "react-native";
import AppStyles from "../../styles/AppStyles";
import { LinearGradient } from 'expo-linear-gradient';
import Label from "../../components/Common/Label";
import Button from "../../components/Common/Button";

export default function WelcomeScreen({navigation})
{	
	return (
		<LinearGradient colors={['#24063F', '#102542']} style={[AppStyles.welcomeScreen]}>
			<Image
				source={require('../../../assets/icons/icon.png')}
				style={{
					height: 200,
					width: 206,
					resizeMode: 'center'
				}}
			/>
			<Label
				type="extraBold"
				size={68}
				style={[styles.title]}
			>
				Welcome!
			</Label>
			<Label
				type="regular"
				size={20}
				style={[styles.text]}
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
	}
})