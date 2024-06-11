/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface ValueType {
  value: string;
}

const CurrentDisplay: FC<ValueType> = ({value}) => {
  const styleCurrentDisplay =
    value.length > 20
      ? {
          fontSize: 15,
        }
      : {
          fontSize: 30,
        };
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styleCurrentDisplay]}>{value}</Text>
    </View>
  );
};

export default CurrentDisplay;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'},
  text: {fontSize: 25, color: '#FFF'},
});
