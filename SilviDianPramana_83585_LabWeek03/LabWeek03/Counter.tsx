import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

interface ICounter {
    handleIncrement: () => void;
    handleDecrement: () => void;
    value: number;
}

const Counter = ({ handleIncrement, handleDecrement, value }: ICounter) => {
    return (
        <View>
            {value}
            <Button title="Increment" onPress={handleIncrement} />
            <Button title="Decrement" onPress={handleDecrement} />
        </View>
    );
};

export default Counter;
