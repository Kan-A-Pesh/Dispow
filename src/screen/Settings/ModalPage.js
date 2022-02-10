import { View, StyleSheet } from "react-native";
import Label from "../../components/Common/Label";
import Colors from "../../styles/Colors";

export default function ModalPage() {
	return (
		<View
			style={styles.background}
		>
			<View
				style={styles.modal}
			>
				<Label
					color={Colors.black}
					size={50}
				>
					Error
				</Label>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modal: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.white,
		borderRadius: 15,
		padding: 15
	}
});