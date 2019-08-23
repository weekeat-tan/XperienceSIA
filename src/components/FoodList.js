import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const FoodList = ({ title }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{`${title}`}</Text>
            <View style={styles.lineStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: 10,
        marginBottom: 5,
        textAlign: 'center'
        // borderWidth: 1,
        // borderColor: 'white',
        // borderBottomColor: 'grey'
    },
    lineStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 5
    }
});

export default FoodList;