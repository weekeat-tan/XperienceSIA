import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const BeveragesImage = ({ title, imageSource }) => {
    return (
        <View>
            <Image style={styles.imageStyle} source={imageSource} />
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 150,
        width: 150,
        marginHorizontal: 12,
        marginVertical: 15
    },
    textStyle: {
        textAlign: "center"
    },
});

export default BeveragesImage;
