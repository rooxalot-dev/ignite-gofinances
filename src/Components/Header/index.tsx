import React from 'react';

import { Container, Title } from './styles';

type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = ({title}: HeaderProps) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}