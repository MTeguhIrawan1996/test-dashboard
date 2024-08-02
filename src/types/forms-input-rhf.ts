import {
  PasswordInputProps,
  TextareaProps,
  TextInputProps,
} from '@mantine/core';

type ICommonControlForm<T> = {
  name: string;
} & T;

export type ITextInputRhfProps = {
  control: 'text-input';
  label: string;
} & ICommonControlForm<Omit<TextInputProps, 'name' | 'label'>>;

export type IPasswordInputRhfProps = {
  control: 'password-input';
  label: string;
} & ICommonControlForm<Omit<PasswordInputProps, 'name' | 'label'>>;

export type ITextAreaInputRhfProps = {
  control: 'text-area';
  label: string;
} & ICommonControlForm<Omit<TextareaProps, 'name' | 'label'>>;

export type ControllerProps =
  | ITextInputRhfProps
  | ITextAreaInputRhfProps
  | IPasswordInputRhfProps;
