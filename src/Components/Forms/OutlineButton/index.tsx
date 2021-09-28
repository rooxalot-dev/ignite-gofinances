import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

type OutlineButtonProps = TouchableOpacityProps & {
  title: string;
  checked?: boolean;
  checkedBackgroundColor?: string;
  icon?: any;
};

export const OutlineButton: React.FC<OutlineButtonProps> = ({ 
  title, 
  checked = false, 
  checkedBackgroundColor, 
  icon: Icon, 
  ...rest 
}: OutlineButtonProps) => {
  return (
    <Container activeOpacity={0.7} checked={checked} checkedBackgroundColor={checkedBackgroundColor} { ...rest }>
      { Icon && <Icon /> }
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
