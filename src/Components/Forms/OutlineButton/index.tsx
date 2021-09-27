import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';
import { Component, ReactComponentElement } from 'hoist-non-react-statics/node_modules/@types/react';

type OutlineButtonProps = TouchableOpacityProps & {
  title: string;
  icon?: any;
};

export const OutlineButton: React.FC<OutlineButtonProps> = ({ title, icon: Icon, ...rest }: OutlineButtonProps) => {
  return (
    <Container { ...rest }>
      { Icon && <Icon /> }
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
