import React from "react";
import { Image, View, StyleSheet, ActivityIndicator } from 'react-native';
import Colors from "../../styles/Colors";

export default function RemoteImage({url, size, style})
{
	const styles = StyleSheet.create({
		view: {
			position: "relative",
			height: size,
			width: size,
			alignItems: "center",
			justifyContent: "center"
		},
		image: {
			position: "absolute",
			height: size,
			width: size,
			borderRadius: 50,
		},
		spinner: {
			position: "absolute",
			zIndex: 100,
		}
	});

	const [loaded, setLoaded] = React.useState(0);

    return (
        <View style={[styles.view, style]}>
            {
                (loaded==2) ?
					<Image
						style={styles.image}
						source={require("../../../assets/backgrounds/gradient.png")}
					/>
                :
					<Image
						style={styles.image}
						source={{uri: url}}
						onLoadEnd={() => {setLoaded(1);}}
						onError={() => {setLoaded(2);}}
					/>
            }
            {
				(loaded==0)?
					<ActivityIndicator
						style={styles.spinner}
						size="large"
						color={Colors.secondary} 
					/>
				:
					<></>
			}
			
        </View>
    );
}