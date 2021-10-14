import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
const Login = (navigation) => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Image
				style={{
					width: 150,
					height: 150,
					borderRadius: 10,
					marginBottom: 30,

					transform: [{ rotate: "45deg" }],
				}}
				source={require("../assets/bicycle.jpg")}
			/>
			<Text style={{ color: "rgba(0,0,0,0.6)", fontSize: 24 }}>Welcome to</Text>
			<Text style={{ color: "black", fontSize: 24, fontWeight: "600" }}>
				Power Bike Shop
			</Text>
			<Pressable
				onPress={() => {}}
				activeOpacity={0.8}
				style={{
					backgroundColor: "#e3e3e3",
					padding: 18,
					paddingHorizontal: 60,
					marginTop: 20,
					flexDirection: "row",

					borderRadius: 10,
				}}
			>
				<AntDesign name="google" size={24} color="orange" />
				<Text style={{ fontSize: 17, marginLeft: 10 }}>Login with Gmail</Text>
			</Pressable>

			<TouchableOpacity
				style={{
					backgroundColor: "black",
					padding: 10,
					paddingHorizontal: 60,
					flexDirection: "row",
					marginTop: 20,
					alignItems: "center",
					padding: 18,
					borderRadius: 10,
				}}
			>
				<AntDesign name="apple1" size={24} color="white" />

				<Text style={{ fontSize: 17, color: "white", marginLeft: 10 }}>
					Login with Apple
				</Text>
			</TouchableOpacity>
			<Text style={{ marginBottom: 10, color: "grey", fontWeight: 500 }}>
				Not a member ?{" "}
				<Text style={{ color: "orange", fontWeight: "bold" }}>Signup</Text>
			</Text>
		</View>
	);
};

export default Login;
