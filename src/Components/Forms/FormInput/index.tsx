import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Input } from '../Input';

import { Container } from './styles';

type FormInputProps = TextInputProps & {
  control: Control;
  name: string;
};

export const FormInput: React.FC<FormInputProps> = ({ name, control, ...rest }: FormInputProps) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input {...rest} 
            value={value} 
            onChangeText={onChange} />
        )}
      /> 
    </Container>
  );
}

