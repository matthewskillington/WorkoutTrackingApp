import React from 'react';
import { View, Text, Button } from "react-native";

const ExerciseItemComponent = (props) => {
    return (
        <View
            style={{
                height: 200,
                width: `90%`,
                margin: `2.5%`
            }}>
            <Text
                style={{
                    color: '#1E1C26'
                }}
            >{props.name}</Text>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end'
                }}>
                <Button
                    title="Log exercise"/>
            </View>
            
        </View>
    );
}

export default ExerciseItemComponent;