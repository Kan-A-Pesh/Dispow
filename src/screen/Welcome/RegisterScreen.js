import { View } from "react-native";
import Label from "../../components/Common/Label";
import AppStyles from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

export default function RegisterScreen({props})
{
	return (
		<View style={AppStyles.authScreen}>
			<Label
				color={Colors.black}
				size={80}
			>
				Register
			</Label>
		</View>
	);
}