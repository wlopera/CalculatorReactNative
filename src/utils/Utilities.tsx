/* eslint-disable prettier/prettier */

export const calculate = (x: string, y: string, operation: string) => {
  let result = 0;
  switch (operation) {
    case '÷':
      result = Number(x) / Number(y);
      break;

    case 'x':
      result = Number(x) * Number(y);
      break;

    case '-':
      result = Number(x) - Number(y);
      break;

    case '+':
      result = Number(x) + Number(y);
      break;

    default:
      break;
  }

  return String(result);
};
