import React from 'react';
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

export const Register: React.FC = () => {
  const categories = [
    "Alimentação",
    "Carro",
    "Casa",
    "Vendas",
    "Trabalho",
    "Farmacia"
  ];

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
              icon={() => <ButtonIcon type="positive" name="arrow-up-circle" /> }
              onPress={() => {}} 
            />

            <OutlineButton 
              title="Outcome" 
              icon={() => <ButtonIcon type="negative" name="arrow-down-circle" /> }
              onPress={() => {}} 
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
