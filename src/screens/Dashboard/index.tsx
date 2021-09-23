import React from 'react';

import { Transaction } from '../../models/Transaction';

import { UserProfile } from '../../Components/UserProfile';
import { Card } from '../../Components/Card';
import TransactionCard from '../../Components/TransactionCard';

import { 
  CardContainer,
  Container,
  Header,
  HeaderWrapper,
  LogoutButton,
  LogoutButtonIcon,
  TransactionContainer,
  Title,
  TransactionList
} from './styles';


const transactionsData: Transaction[] = [
  {
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    value: '12.000,00',
    category: { key: 'sales', name: 'Vendas', icon: 'dollar-sign' },
    date: new Date(2021, 3, 13).toDateString()
  },
  {
    id: '2',
    type: 'negative',
    title: 'Hamburgeria Pizzy',
    value: '59,00',
    category: { key: 'food', name: 'Alimentação', icon: 'coffee' },
    date: new Date(2021, 3, 10).toDateString()
  },
  {
    id: '3',
    type: 'negative',
    title: 'Aluguel',
    value: '1200,00',
    category: { key: 'home', name: 'Alimentação', icon: 'shopping-bag' },
    date: new Date(2021, 3, 11).toDateString()
  },
  {
    id: '4',
    type: 'positive',
    title: 'Salário',
    value: '4.000,00',
    category: { key: 'sales', name: 'Salario', icon: 'dollar-sign' },
    date: new Date(2021, 3, 15).toDateString()
  },
];

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

        <TransactionContainer>
          <Title>Listagem</Title>
          <TransactionList 
            data={transactionsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TransactionCard 
                type={item.type}
                title={item.title}
                value={item.value}
                category={item.category}
                date={item.date}
              />
            )}
          />
        </TransactionContainer>
    </Container>
    );
}