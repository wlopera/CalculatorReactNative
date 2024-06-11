/* eslint-disable prettier/prettier */
export type BotonDataProps = {
  backgroundColorNumber: string;
  value: string;
};

export type ButtonActionsProps = {
  press: (text: string) => void;
};

export type BotonProps = BotonDataProps & ButtonActionsProps;
