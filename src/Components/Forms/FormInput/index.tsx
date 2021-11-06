import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Input } from '../Input';

import { Container, Error } from './styles';

type FormInputProps = TextInputProps & {
  control: Control;
  name: string;
  errors?: null | {
    [key: string]: any;
  }
};

export const FormInput: React.FC<FormInputProps> = ({ control, name, errors, ...rest }: FormInputProps) => {
  const error = errors && errors[name]?.message;

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <>
            <Input {...rest} 
              value={value} 
              onChangeText={onChange} />

            {error && <Error>{error}</Error> }
          </>
        )}
      />
    </Container>
  );
}

