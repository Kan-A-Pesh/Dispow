import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Label from "../../components/Common/Label";
import Colors from "../../styles/Colors";

export default function ModalPage({onDismiss, onClose}) {

	return (
		<>
			<TouchableWithoutFeedback
				style={styles.backButton}
				onPress={onDismiss}
			>
				<View
					style={styles.backButton}
				/>
			</TouchableWithoutFeedback>
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
		</>
	);
}

const styles = StyleSheet.create({
	backButton: {
		position: 'absolute',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
	},
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