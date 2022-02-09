import React from "react";
import { View } from "react-native";
import InputField from "../../components/Common/InputField";
import Label from "../../components/Common/Label";
import AppStyles from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

export default function LoginScreen({props})
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
			<InputField
				title="Username:"
				placeholder="Enter username..."
				icon="account-outline"
				value={username}
				onChangeValue={setUsername}
			/>
			<InputField
				title="Password:"
				placeholder="Enter password..."
				type="password"
				icon="lock-outline"
				value={password}
				onChangeValue={setPassword}
			/>
		</View>
	);
}