import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ContainerBorderHelper, ButtonText } from './styles';

type OutlineButtonProps = RectButtonProps & {
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
      <ContainerBorderHelper checked={checked}>
        { Icon && <Icon /> }
        <ButtonText>{title}</ButtonText>
      </ContainerBorderHelper>
    </Container>
  );
}
