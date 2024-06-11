/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import BottonItem from '../../components/BottonItem/BottonItem';
import {data} from '../../utils/botons';
import {ButtonActionsProps} from '../../types';

const BottonMap: FC<ButtonActionsProps> = ({press}) => {
  return (
    <View>
      {data?.map((arr, arrIndex) => (
        <View style={styles.buttons} key={`key-view-${arrIndex}`}>
          {arr?.map((item, index) => (
            <BottonItem
              key={`key-boton-${index}`}
              backgroundColorNumber={item.backgroundColorNumber}
              value={item.value}
              press={press}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default BottonMap;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
  },
});
