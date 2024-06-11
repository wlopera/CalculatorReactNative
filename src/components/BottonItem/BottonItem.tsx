/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {BotonProps} from '../../types';

const BottonItem: FC<BotonProps> = ({backgroundColorNumber, value, press}) => {
  return (
    <View style={styles.constainer}>
      <TouchableOpacity
        style={[
          styles.botonContainer,
          {backgroundColor: backgroundColorNumber},
        ]}
        onPress={() => press(value)}>
        <Text style={styles.number}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottonItem;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    paddingTop: 10,
  },
  botonContainer: {
    borderRadius: 20,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  number: {
    color: '#d8d3d3',
    fontSize: 26,
  },
});
