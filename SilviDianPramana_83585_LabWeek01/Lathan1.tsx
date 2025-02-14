import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Lathan1 = () => {
    return (
        <>
        <View style={styles.container1}>
            <Text style={styles.tekssaya}>Hello, ini dari halaman Latihan1</Text>
        </View>

        <View style={styles.container2}>
            <Text style={styles.iniflex}>Hello, ini Flex</Text>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        width:"100%",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
    },
    tekssaya: {
        color: "white",
        backgroundColor: "red",
        fontWeight: "bold",
        fontSize: 18,
    },
    container2: {
        flex: 1,
        width:"100%",
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
    },
    iniflex: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default Lathan1;
