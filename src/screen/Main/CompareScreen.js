import React from "react";

import { View, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import Label from "../../components/Common/Label";
import Button from "../../components/Common/Button";
import RemoteImage from "../../components/Common/RemoteImage";
import AppStyles from "../../styles/AppStyles";
import Colors from "../../styles/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PageHeader from '../../components/Pages/PageHeader';
import CompareView from "../../components/Calendar/CompareView";
import config from "../../../api/common/config";

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
	{
		id: '58694a0f-3da2-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
	{
		id: '58694a0f-3da3-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
	{
		id: '58694a0f-3da4-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
	{
		id: '58694a0f-3da5-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
];

export default function RegisterScreen({ props }) {
	return (
		<View style={AppStyles.mainScreen}>
			<PageHeader
				colors={["#F1C62C", "#DA883C"]}
				title="Compare"
			>
				<View style={styles.header}>
					<Label
						size={20}
						style={styles.headerText}
					>
						Start adding a user to compare!
					</Label>
					<FlatList
						data={DATA}
						horizontal={true}
						renderItem={({ item }) => (
							<TouchableOpacity style={styles.profileItem}>
								<RemoteImage
									url={"https://source.unsplash.com/random?sig=" + item.id + "-" + item.title + "-" + (Math.random() * 100000)}
									size={60}
								/>
							</TouchableOpacity>
						)}
						ListHeaderComponent={() => (
							<TouchableOpacity style={styles.addItem}>
								<MaterialCommunityIcons name="plus" size={35} color={Colors.white} />
							</TouchableOpacity>
						)}
						initialNumToRender={6}
						keyExtractor={item => item.id}
						style={styles.profileList}
					/>
				</View>
			</PageHeader>
			<CompareView />
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 15,
		paddingTop: 10,
		paddingBottom: 20,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		marginRight: 10,
	},
	profileList: {
		marginTop: 10,
		minWidth: "100%"
	},
	profileItem: {
		marginLeft: 5,
		width: 60,
		height: 60,
		borderRadius: 30,
		borderWidth: 1,
		overflow: "hidden",
		borderColor: "#fff2",
	},
	profileImage: {
		width: 60,
		height: 60,
	},
	addItem: {
		width: 60,
		height: 60,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: Colors.white,
		alignItems: "center",
		justifyContent: "center",
	}
});