import React from 'react';

import { UserProfile } from '../../Components/UserProfile';
import { Card } from '../../Components/Card';

import { CardContainer, Container, Header, HeaderWrapper, LogoutButton, LogoutButtonIcon } from './styles';

export const Dashboard: React.FC = () => {
    return (
        <Container>
            <Header>
                <HeaderWrapper>
                    <UserProfile/>
                    <LogoutButton>
                        <LogoutButtonIcon name="power" />
                    </LogoutButton>
                </HeaderWrapper>
            </Header>

            <CardContainer>
                <Card 
                  type="positive" 
                  title="Entradas" 
                  value="R$ 17,400,00" 
                  description="Última entrada dia 13 de abril" />
                <Card 
                  type="negative" 
                  title="Saidas" 
                  value="R$ 7.400,00"
                  description="Última saída dia 09 de abril" />
                <Card 
                  type="total" 
                  title="Total" 
                  value="R$ 10.000,00"
                  description="08 a 16 de Abril" />
            </CardContainer>
        </Container>
    );
}