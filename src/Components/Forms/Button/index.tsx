import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

type ButtonProps = RectButtonProps & {
  title: string;
};

import { Container, ButtonText } from './styles';

export const Button: React.FC<ButtonProps> = ({ title, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      { title && <ButtonText>{title}</ButtonText> }
    </Container>
  );
}
