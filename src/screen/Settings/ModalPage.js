import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Modal } from "react-native";
import Label from "../../components/Common/Label";
import Colors from "../../styles/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AnimatedBackground from "../../components/Animated/AnimatedBackground";
import Button from "../../components/Common/Button";

export default function ModalPage({ visible, type, text, onDismiss, onClose }) {

	return (
		<Modal
			visible={visible}
			animationType="fade"
			onRequestClose={onDismiss}
			onDismiss={onDismiss}
			transparent={true}
			presentationStyle="overFullScreen"
			statusBarTranslucent={true}
		>
			<TouchableWithoutFeedback onPress={onDismiss}>
				<View style={styles.backButton} />
			</TouchableWithoutFeedback>

			<View style={styles.background}>

				<View
					style={styles.modal}
				>
					<View style={styles.header}>
						<MaterialCommunityIcons
							name={"alert-circle-outline"}
							color={Colors.white}
							size={65}
						/>
						{/* <AnimatedBackground name="error" /> */}
					</View>
					<Label
						color={Colors.black}
						style={{ opacity: 0.7 }}
						size={40}
						type="medium"
					>
						Oops!
					</Label>
					<Label
						color={Colors.black}
						size={20}
						style={{
							margin: 20,
							marginTop: 10,
						}}
					>
						{text ?? "Something went wrong. Please try again later."}
					</Label>
					<Button
						size={18}
						color={Colors.tertiary}
						appearance="outlined"
						text="Close"
						onPress={onClose}
						style={{
							paddingHorizontal: 50,
							marginBottom: 20,
						}}
					/>
				</View>

			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	backButton: {
		position: 'absolute',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		backgroundColor: Colors.blackOpacity5,
	},
	background: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		backgroundColor: Colors.tertiary,
		padding: 20,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "stretch",
		marginBottom: 10,
	},
	modal: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.white,
		borderRadius: 15,
		marginHorizontal: 20,
	},
});