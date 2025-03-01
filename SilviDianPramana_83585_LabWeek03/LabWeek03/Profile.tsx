import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProfile {
    name: string;
    age: number;
}

const Profile: React.FC<IProfile> = ({ name, age}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}> Halo namaku, {name}! </Text>
            <Text style={styles.Text}> umurku, {age} tahun</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: 20,
    },
    Text: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
});

export default Profile;
