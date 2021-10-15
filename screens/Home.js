import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import {
	Ionicons,
	FontAwesome,
	AntDesign,
	FontAwesome5,
} from "@expo/vector-icons";

const Home = () => {
	const Cat = ["All", "RoadBike", "Mountain", ""];
	return (
		<View style={{ backgroundColor: "white", flex: 1, paddingTop: 10 }}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Ionicons name="menu" size={24} color="black" />
				<FontAwesome name="bicycle" size={24} color="black" />
				<View style={{ flexDirection: "row", padding: 10 }}>
					<AntDesign name="search1" size={24} color="black" />
					<Ionicons name="notifications-outline" size={24} color="black" />
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Text style={{ color: "rgba(0,0,0,10", fontWeight: "bold" }}>
					The World's{" "}
					<Text
						style={{
							color: "orange",
							fontWeight: "bold",
							fontSize: 25,
							marginLeft: 20,
						}}
					>
						Best Bike
					</Text>
				</Text>
			</View>
			<Text
				style={{
					color: "black",
					fontSize: 20,
					padding: 20,
					fontWeight: "bold",
				}}
			>
				Categories
			</Text>

			<ScrollView
				horzontal
				showsVerticalScrollIndicator={false}
				style={{ margin: 10, fontSizse: 20 }}
			>
				{Cat.map((category, index) => {
					<TouchableOpacity key={index} activeopacity={0.8}>
						<Text
							style={{
								color: "black",
								fontWeight: "600",
								fontSize: 20,
								backgroundColor: "#e9e8ed",
								marginRight: 10,
								padding: "0.55em",
								borderRadius: 17,
							}}
						>
							{category}
						</Text>
					</TouchableOpacity>;
				})}
			</ScrollView>
		</View>
	);
};

export default Home;
