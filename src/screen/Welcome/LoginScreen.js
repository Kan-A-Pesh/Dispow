import React from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../components/Common/Button";
import InputField from "../../components/Common/InputField";
import Label from "../../components/Common/Label";

import AppStyles from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

import login from "../../../api/auth/login";

export default function LoginScreen({navigation})
{
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	return (
		<View style={AppStyles.authScreen}>
			<Label
				color={Colors.black}
				size={80}
			>
				Login
			</Label>
			<View style={styles.inputGroup}>
				<InputField
					title="Username:"
					placeholder="Enter username..."
					type="username"
					icon="account-outline"
					value={username}
					onChangeValue={setUsername}
					style={styles.input}
				/>
				<InputField
					title="Password:"
					placeholder="Enter password..."
					type="password"
					icon="lock-outline"
					value={password}
					onChangeValue={setPassword}
					style={styles.input}
				/>
			</View>
			<Button 
				text="Login"
				style={styles.button}
				disabled={ !password || !username }
				size={22}
				onPress={() => {
					login(username, password)
						.then(() => {
							navigation.jumpTo("Main");
						})
						.catch((error) => {
							navigation.push("Modal");
						});
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		width: "100%",
		marginVertical: 7
	},
	inputGroup: {
		width: "100%",
	},
	button: {
		width: "75%",
		margin: 12.5
	},
});