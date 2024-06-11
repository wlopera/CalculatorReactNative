/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface ValueType {
  value: string;
}
const ResultDisplay: FC<ValueType> = ({value}) => {
  const styleResult =
    value.length > 13
      ? {
          fontSize: 25,
        }
      : {
          fontSize: 50,
        };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styleResult]}>{value}</Text>
    </View>
  );
};

export default ResultDisplay;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'},
  text: {fontSize: 50, color: '#FFF'},
});
