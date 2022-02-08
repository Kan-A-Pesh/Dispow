import { View } from "react-native";
import Label from "../../components/Primary/Label";
import AppStyles from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

export default function LoginScreen({props})
{
	return (
		<View style={AppStyles.authScreen}>
			<Label
				color={Colors.black}
				size={80}
			>
				Login
			</Label>
		</View>
	);
}