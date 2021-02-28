import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../../theme-context';

const ExerciseItem = (props) => {
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
    let timer = setInterval(() => {
      updateMessage(getTimeSinceNow(props.exerciseItem.lastPerformed));
    }, 10000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  useEffect(() => {
    updateMessage(getTimeSinceNow(props.exerciseItem.lastPerformed));
  }, [props.exerciseItem.lastPerformed]);

  function getTimeSinceNow(lastPerformed) {
    if (!isNaN(lastPerformed)) {
      let timeDiff = Date.now() - lastPerformed;
      if (timeDiff <= 60000) {
        return "Just now";
      } else if (timeDiff < 3600000) {
        return Math.floor(timeDiff / 60000).toString() + " minutes ago";
      } else {
        return "Ages ago";
      }
    }
  }

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
