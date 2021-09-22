import React from 'react';
import { View } from 'react-native';

import { Container, Avatar, UserInfo, UserGreeting, UserName } from './styles';

export const UserProfile: React.FC = () => {
  return (
      <Container>
          <Avatar source={{ uri: 'https://github.com/rooxalot-dev.png' }} />
          <UserInfo>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Rodrigo</UserName>
          </UserInfo>
      </Container>
  );
}