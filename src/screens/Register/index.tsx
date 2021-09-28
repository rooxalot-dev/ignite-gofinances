import React, { useState } from 'react';
import { Input } from '../../Components/Forms/Input';
import { OutlineButton } from '../../Components/Forms/OutlineButton';
import { Button } from '../../Components/Forms/Button';

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  ButtonIcon,
  DropdownWrapper,
  Dropdown,
  DropdownItem,
  TypeWrapper
} from './styles';
import { useTheme } from 'styled-components';

export const Register: React.FC = () => {
  const categories = [
    "Alimentação",
    "Carro",
    "Casa",
    "Vendas",
    "Trabalho",
    "Farmacia"
  ];

  const theme = useTheme();
  const [transactionType, setTransactionType] = useState('');

  const handleChangeTransatcionType = (type: string) => {
    if (transactionType === type) {
      setTransactionType('');
      return;
    }

    setTransactionType(type);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome"/>
          <Input placeholder="Preço"/>

          <TypeWrapper>
            <OutlineButton 
              title="Income" 
              icon={() => <ButtonIcon type="positive" name="arrow-up-circle" />}
              checked={transactionType === 'Income'}
              checkedBackgroundColor={theme.colors.successLight}
              onPress={() => {handleChangeTransatcionType('Income')}} 
            />

            <OutlineButton 
              title="Outcome" 
              icon={() => <ButtonIcon type="negative" name="arrow-down-circle" />}
              checked={transactionType === 'Outcome'}
              checkedBackgroundColor={theme.colors.attentionLight}
              onPress={() => {handleChangeTransatcionType('Outcome')}} 
            />
          </TypeWrapper>

          <DropdownWrapper>
            <Dropdown itemStyle={{ backgroundColor: 'red' }}>
              {
                categories.map(category => <DropdownItem key={category} label={category} value={category} />)
              }
            </Dropdown>
          </DropdownWrapper>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
