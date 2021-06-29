import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getTimeSinceNow } from '../../helpers/timeSinceNowHelper';
import { ThemeContext } from '../../theme-context';
import { Exercise } from '../../types';

type Props = {
  key: string,
  onPressHandler: (exerciseItem: Exercise) => void,
  exerciseItem: Exercise,
}

const ExerciseItem: React.FC<Props> = (props: Props) => {
  const colors = useContext(ThemeContext);

  const styles = StyleSheet.create({
    wrappingView: {
      height: 97,
      padding: 5,
      width: `96%`,
      margin: `2%`,
      backgroundColor: colors.MasterGrey100,
    },
    topTitle: {
      color: colors.PrimaryText,
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

  const [lastPerformedMessage, updateMessage] = useState("Ages ago");

  useEffect(() => {
      updateMessage(getTimeSinceNow(props.exerciseItem.lastPerformed));
  }, []);

  useEffect(() => {
    updateMessage(getTimeSinceNow(props.exerciseItem.lastPerformed));
  }, [props.exerciseItem.lastPerformed]);

  return (
    <View style={styles.wrappingView}>
      <Text style={styles.topTitle}>{props.exerciseItem.name}</Text>
      <Text style={styles.secondaryMessage}>
        Last Performed: {lastPerformedMessage}
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
