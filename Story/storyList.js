import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";

export const Story = ({ image, seen, name }) => {
    return (
        <View style={{ alignItems: "center", margin: 7}}>
            <View style={{alignItems:"center"}}>
                <View style={{
                    width: 90,
                    height: 90,
                    borderRadius: 45,
                    borderWidth: 15,
                    borderColor: seen ? "gray" : "purple",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 3
                }}>
                    <Image source={{ uri: image }} style={{
                        width: 80,
                        height: 80,
                        borderRadius: 45,
                    }} />
                </View>
                <Text style={{ fontWeight: "bold"}}>{name.substring(0, 8)}</Text>
            </View>
        </View>
    );
};
