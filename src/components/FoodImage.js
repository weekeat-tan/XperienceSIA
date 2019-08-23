import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const FoodImage = ({ title, imageSource }) => {
    return (
        <View>
            <Image style={styles.imageStyle} source={imageSource} />
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 250,
        width: 250,
        marginHorizontal: 12,
        marginVertical: 15,
        alignSelf: 'center'
    },
    textStyle: {
        textAlign: "center",
        marginBottom: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 18
    },
});

export default FoodImage;
