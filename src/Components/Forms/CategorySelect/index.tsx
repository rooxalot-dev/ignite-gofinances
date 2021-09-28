import React from 'react';

import { Container, Category, Icon } from './styles';

export const CategorySelect: React.FC = () => {
  return (
    <Container>
      <Category>Categoria</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
