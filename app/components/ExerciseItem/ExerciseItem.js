import React from 'react';
import {View, Text, Button, StyleSheet, useColorScheme} from 'react-native';
import {DarkTheme, LightTheme} from '../../colourThemes';

const ExerciseItem = (props) => {
  const colors = useColorScheme() === 'dark' ? DarkTheme : LightTheme;

  const styles = StyleSheet.create({
    wrappingView: {
      height: 97,
      padding: 5,
      width: `96%`,
      margin: `2%`,
      backgroundColor: colors.MasterGrey100,
    },
    topTitle: {
      color: colors.TitleText,
      fontWeight: '500',
      fontSize: 18,
    },
    secondaryMessage: {
      color: colors.SecondaryText,
      fontWeight: '500',
      fontSize: 14,
    },
    bottomWrapper: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: colors.Success,
      marginTop: 10,
    },
  });

  return (
    <View style={styles.wrappingView}>
      <Text style={styles.topTitle}>{props.exerciseItem.name}</Text>
      <Text style={styles.secondaryMessage}>
        Last Performed: {props.exerciseItem.lastPerformed}
      </Text>
      <View style={styles.bottomWrapper}>
        <Button
          title="Log exercise"
          color="#FFF"
          onPress={() => {
            props.onPressHandler(props.exerciseItem);
          }}
        />
      </View>
    </View>
  );
};

export default ExerciseItem;
