import React from 'react';

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

type Category = {
  title: string;
  icon: any;
}

type Transaction = {
  id: string;
  type: 'positive' | 'negative',
  title: string;
  value: string;
  category: Category;
  date: string;
}

const transactionsData: Transaction[] = [
  {
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    value: '12.000,00',
    category: { title: 'Vendas', icon: null },
    date: new Date(2021, 3, 13).toDateString()
  },
  {
    id: '2',
    type: 'negative',
    title: 'Hamburgeria Pizzy',
    value: '59,00',
    category: { title: 'Alimentação', icon: null },
    date: new Date(2021, 3, 10).toDateString()
  },
  {
    id: '3',
    type: 'negative',
    title: 'Hamburgeria Guarita',
    value: '120,00',
    category: { title: 'Alimentação', icon: null },
    date: new Date(2021, 3, 11).toDateString()
  },
  {
    id: '4',
    type: 'positive',
    title: 'Salário',
    value: '4.000,00',
    category: { title: 'Salario', icon: null },
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
              <Title>Transações</Title>
              <TransactionList 
                data={transactionsData}
                renderItem={({item}: { item: Transaction }) => (
                  <TransactionCard 
                    type={item.type}
                    title={item.title}
                    value={item.value}
                    category={item.category.title}
                    date={item.date}
                  />
                )}
              />
            </TransactionContainer>
        </Container>
    );
}