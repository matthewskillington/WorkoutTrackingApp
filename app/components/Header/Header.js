import React from 'react';
import { View, Text } from "react-native";

const HeaderComponent = () => {
    return (
    <View
        style={{
        padding: 10,
        flexDirection: 'row'
        }}>
        <View
            style={{
            backgroundColor: `#A63838`,
            width: 10,
            height: 30, 
            marginRight: 10
        }}>
        </View>
        <Text
            style={{
            fontSize: 24,
            color: '#A63838',
            fontWeight: `bold`,
        }}>
        Workout Tracking
        </Text>
    </View>
    );
}

export default HeaderComponent;