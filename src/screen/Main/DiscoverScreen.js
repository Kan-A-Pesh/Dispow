import React from "react";

import { View } from "react-native";
import Label from "../../components/Common/Label";
import AppStyles from "../../styles/AppStyles";
import Colors from "../../styles/Colors";

import PageHeader from '../../components/Pages/PageHeader';

export default function RegisterScreen({ props }) {
	return (
		<View style={AppStyles.mainScreen}>
			<PageHeader
				colors={["#F1C62C", "#DA883C"]}
				border={false}
			/>
			<Label
				color={Colors.black}
				size={80}
			>
				Discover
			</Label>
		</View>
	);
}