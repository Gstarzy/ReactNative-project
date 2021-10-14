import React from "react";
import { View, Text, Image } from "react-native";

const Home = () => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Image
				style={{
					width: 150,
					height: 150,
				}}
				source={require("../assets/bicycle.jpg")}
			/>
			<Text>Home Page</Text>
		</View>
	);
};

export default Home;
