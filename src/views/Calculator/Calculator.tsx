/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CurrentDisplay from '../../components/displays/CurrentDisplay';
import ResultDisplay from '../../components/displays/ResultDisplay';
import BottonMap from '../../components/BottonMap';
import {calculate} from '../../utils/Utilities';

const NOT_DIV_X_CERO = 'No se puede dividir entre cero';
const INFINITY = 'Infinity';
const NAN = 'NaN';
const INPUT_NOT_VALIDATE = 'Entrada no válida';
const VALUE_NOT_VALIDATE = 'Valor no válido';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [value_1, setValue_1] = useState('');
  const [operation, setOperation] = useState('');
  const [value_2, setValue_2] = useState('');
  const [step, setStep] = useState(1);

  const handleOnPress = (value: string) => {
    switch (value) {
      case '÷':
      case 'x':
      case '-':
      case '+':
        return asignarOperation(value);

      case '.':
        if (!resultValue.includes('.')) {
          setResultValue(prev => prev + value);
        }
        break;

      case 'C':
        return clearValues();

      case '«':
        return deleteValue();

      case '+/-':
        setResultValue(prevValue => {
          if (!Number(prevValue)) {
            clearValues();
          }
          return Number(prevValue) ? `${-1 * Number(prevValue)}` : '';
        });
        break;

      case '√':
        return getSqrt(value);

      case '=':
        return process();

      default:
        return setNumber(value);
    }
  };

  const asignarOperation = (value: string) => {
    if (resultValue === NOT_DIV_X_CERO || resultValue === VALUE_NOT_VALIDATE) {
      clearValues();
      return;
    }
    if (value_1 === '' && resultValue === '') {
      return;
    }

    setValue_1(resultValue);
    setValue_2('');
    setCurrentValue(`${resultValue} ${value}`);
    setOperation(value);
    setStep(2);
  };

  const clearValues = () => {
    setValue_1('');
    setValue_2('');
    setOperation('');
    setCurrentValue('');
    setResultValue('');
    setStep(1);
  };

  const deleteValue = () => {
    const record = resultValue.substring(0, resultValue.length - 1);
    setResultValue(
      record.length > 0
        ? resultValue.substring(0, resultValue.length - 1)
        : '0',
    );
  };

  const getSqrt = (value: string) => {
    if (Number(resultValue) < 0) {
      setCurrentValue(INPUT_NOT_VALIDATE);
      return;
    }
    setCurrentValue(`${value}(${resultValue})`);
    setResultValue(prevValue => `${Math.sqrt(Number(prevValue))}`);
    setOperation('√');
  };

  const process = () => {
    if (value_1 === '' && resultValue !== '') {
      setValue_1(resultValue);
      setCurrentValue(`${resultValue} =`);
      setStep(2);
      return;
    }
    if (operation === '' || (value_1 === '' && resultValue === '')) {
      return;
    }
    if (resultValue === NOT_DIV_X_CERO || resultValue === VALUE_NOT_VALIDATE) {
      clearValues();
      return;
    }

    let input_2 = value_2;

    if (value_2 === '') {
      input_2 = resultValue;
      setValue_2(resultValue);
    }

    const resultCalc = calculate(value_1, input_2, operation);
    if (resultCalc === INFINITY) {
      setResultValue(NOT_DIV_X_CERO);
      return;
    }
    if (resultCalc === NAN) {
      setResultValue(VALUE_NOT_VALIDATE);
      return;
    }

    setResultValue(resultCalc);
    setValue_1(resultCalc);
    setCurrentValue(`${value_1} ${operation} ${input_2} =`);
  };

  const setNumber = (value: string) => {
    if (resultValue === '0' && value === '0') {
      return;
    }
    if (value_1 !== '' && operation !== '' && step === 1) {
      setResultValue(value);
      setValue_2(prevValue => `${prevValue}${value}`);
      setStep(2);
    } else {
      if (value_1 === resultValue && step === 2) {
        setStep(3);
        setResultValue(value);
      } else {
        if (value_2 !== '' || operation === '√') {
          setResultValue(value);
          setCurrentValue('');
          setValue_1('');
          setValue_2('');
          setOperation('');
          setStep(1);
        } else {
          setResultValue(prevValue => {
            if (prevValue === '0') {
              return value;
            } else {
              return prevValue.length < 20 ? `${prevValue}${value}` : prevValue;
            }
          });
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.northContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Calculadora React Native</Text>
        </View>
        <CurrentDisplay value={currentValue} />
        <ResultDisplay value={resultValue} />
      </View>
      <View style={styles.sourthContainer}>
        <BottonMap press={handleOnPress} />
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f0ebeb',
  },
  titleContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 24, fontWeight: '900', color: '#FFF'},
  northContainer: {flex: 1, backgroundColor: '#000'},
  sourthContainer: {
    flex: 2,
    backgroundColor: '#202020',
  },
});
