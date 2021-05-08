import React, { useContext } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { ThemeContext } from '../../theme-context';

type Props = {
  label: string;
  onChangeHandler: (text: string) => {};
  value: string;
}

const NumericInputWithLabel: React.FC<Props> = (props) => {
  const colors = useContext(ThemeContext);

  const styles = StyleSheet.create({
    input: {
      marginTop: 10,
      paddingLeft: 10,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      justifyContent: 'flex-start',
      width: '100%',
      backgroundColor: colors.MasterGrey100,
      color: colors.PrimaryText
    },

    label: {
      color: colors.SecondaryText
    }
  });

  return (
    <View
      style={{
        marginBottom: 20,
      }}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        //Regex prevents non numeric input into the fields
        onChangeText={(text) =>
          props.onChangeHandler(text.replace(/[^0-9]/g, ''))
        }
        value={props.value}
      />
    </View>
  );
};

export default NumericInputWithLabel;
