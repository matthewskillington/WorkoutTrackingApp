import React from 'react';
import { Text } from 'react-native';
import CustomHeader from '../CustomHeader/CustomHeader';

const MetricsPage = ({navigation}) => {
    return (
        <>
            <CustomHeader navigation={navigation}/>
            <Text>
                    Welcome to the Metrics page
            </Text>
        </>
    )
}

export default MetricsPage;