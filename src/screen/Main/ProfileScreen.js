import React from "react";

import { View, StyleSheet, Image, ActivityIndicator } from "react-native";
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

export default function ProfileScreen({ navigation, route, mainNavigation }) {

	const [user, setUser] = React.useState(null);
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
			<PageHeader
				colors={["#00B4D8", "#24063F"]}
				title="KANAPESH"
				onBack={
					(route.params) ?
						() => {
							console.log(navigation);
						}
					:
						null
					}
			>
				<View style={styles.header}>
					<RemoteImage
						url={config.endPoint + "/avatars/?id=" + userId}
						style={styles.headerImage}
						size={100}
					/>
					<View style={styles.headerInfo}>
						<Label
							size={30}
							style={styles.headerName}
						>
							{user ?
								(user.displayName == "" ?
									user.name :
									user.displayName
								)
								: "Loading..."}
						</Label>
						{
							(user && user.displayName) ?
								<Label
									size={20}
									style={{ opacity: 0.5 }}
								>
									{user ? user.name : "Loading..."}
								</Label>
								: <></>
						}
						<View
							style={styles.buttonGroup}
						>
							<Button
								size={13}
								color="#fff8"
								appearance="outlined"
								text="Edit Profile"
								style={[styles.editButton, styles.button]}
								onPress={() => {
									mainNavigation.push("EditProfile");
								}}
							/>
							<Button
								size={13}
								color="#ffffff"
								appearance="ghost"
								text="Logout"
								style={[styles.logoutButton, styles.button]}
								onPress={() => {
									logout()
										.then(() => {
											mainNavigation.replace("Welcome");
										})
										.catch(error => {
											console.log(error);
										});
								}}
							/>
						</View>
					</View>
				</View>
			</PageHeader>
			{
				user ?
					<ProfileView calendarId={userId} />
				:
					<ActivityIndicator
						style={styles.spinner}
						size="large"
						color={Colors.primary} 
					/>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 15,
		paddingTop: 10,
		paddingBottom: 20,
		flexDirection: "row",
	},
	headerImage: {
		height: 100,
		width: 100,
		marginRight: 10,
	},
	headerInfo: {
		justifyContent: "center",
		alignItems: "flex-start"
	},
	headerName: {
		marginBottom: -5,
	},
	editButton: {
		borderWidth: 1,
	},
	logoutButton: {
		marginLeft: 10
	},
	button: {
		paddingHorizontal: 15,
		paddingVertical: 3,
		marginTop: 5
	},
	buttonGroup: {
		flexDirection: "row",
	},
	spinner: {
		alignSelf: "center",
		flex: 1
	}
});