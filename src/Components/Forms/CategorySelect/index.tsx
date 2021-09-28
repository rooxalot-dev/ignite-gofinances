import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Category, Icon } from './styles';

type CategorySelectProps = TouchableOpacityProps & {
  category: string;
};

export const CategorySelect: React.FC<CategorySelectProps> = ({category = '', ...rest}: CategorySelectProps) => {
  return (
    <Container {...rest}>
      <Category>{ category === '' ? 'Categoria' : category}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
