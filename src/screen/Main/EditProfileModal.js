import React from "react";

import { View, StyleSheet, Image, ActivityIndicator, Platform, StatusBar } from "react-native";
import Label from "../../components/Common/Label";
import Button from "../../components/Common/Button";
import AppStyles from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

import PageHeader from '../../components/Pages/PageHeader';
import ProfileView from "../../components/Calendar/ProfileView";
import fetchUser from "../../../api/users/fetchUser";
import RemoteImage from "../../components/Common/RemoteImage";
import config from "../../../api/common/config";
import logout from "../../../api/auth/logout";
import { LinearGradient } from 'expo-linear-gradient';
import InputField from "../../components/Common/InputField";

export default function EditProfileModal({ navigation, route }) {

	const [user, setUser] = React.useState({});
	const userId = ((route.params) ? route.params.id : global.userId);

	React.useEffect(() => {
		fetchUser(userId)
			.then((usr) => {
				setUser(usr);
			})
			.catch(error => {
				console.log(error);
			})
	}, []);

	return (
		<View style={AppStyles.mainScreen}>
			<LinearGradient
				style={styles.header}
				colors={["rgba(218, 60, 183, 0.6)", "rgba(0, 180, 216, 0.4)"]}
			>
				<View style={styles.buttonGroup}>
					<Button
						size={15}
						color={Colors.white}
						appearance="ghost"
						text="Cancel"
						style={[styles.button, {
							backgroundColor: "#fff3",
						}]}
						onPress={() => {
							navigation.goBack();
						}}
					/>
					<Label
						type="bold"
					>
						Edit Profile
					</Label>
					<Button
						size={15}
						color={"white"}
						text="Done"
						style={styles.button}
						onPress={() => {
							console.log("Send, wait, close, toast");
						}}
					/>
				</View>
				<View style={styles.avatarContainer}>
					<RemoteImage
						style={styles.avatarImage}
						url={config.endPoint + "/avatars/?id=" + 2}
						size={150}
					/>
				</View>
			</LinearGradient>
			<InputField
				title="Display name:"
				placeholder="Enter display name..."
				icon="rename-box"
				value={user.displayName ?? ""}
				onChangeValue={(value) => {
					setUser({ ...user, displayName: value });
				}}
				style={styles.input}
			/>
			<InputField
				title="Username:"
				placeholder="Enter username..."
				icon="account"
				disabled={true}
				value={user.name ?? ""}
				onChangeValue={(value) => {
					setUser({ ...user, name: value });
				}}
				style={styles.input}
			/>
			<InputField
				title="Email:"
				placeholder="Enter email..."
				icon="at"
				value={user.email ?? ""}
				onChangeValue={(value) => {
					setUser({ ...user, email: value });
				}}
				style={styles.input}
			/>
			<InputField
				title="Biography:"
				placeholder="Enter a biography..."
				icon="fountain-pen-tip"
				value={user.bio ?? ""}
				onChangeValue={(value) => {
					setUser({ ...user, bio: value });
				}}
				style={[styles.input, styles.bioInput]}
			/>
		</View>
	);
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
	header: {
		paddingTop: STATUSBAR_HEIGHT,
		minHeight: STATUSBAR_HEIGHT + 175,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		marginBottom: 100
	},
	image: {
		position: "absolute"
	},
	button: {
		width: 100,
	},
	buttonGroup: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	avatarContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	avatarImage: {
		position: "absolute",
		bottom: -75,
		overflow: "hidden",
		borderRadius: 75,
		borderWidth: 5,
		borderColor: "white",
	},
	input: {
		marginHorizontal: 20,
		marginBottom: 15,
	},
	bioInput: {
		flex: 1,
	}
});