import React from 'react';
import { 
  Container,
  Header,
  Title,
  Form,
  Input,
  Button,
  ButtonIcon,
  ButtonText,
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
        <Input placeholder="Nome"/>
        <Input placeholder="Preço"/>

        <TypeWrapper>
          <Button onPress={() => {}}>
            <ButtonIcon type="positive" name="arrow-up-circle" />
            <ButtonText>Income</ButtonText>
          </Button>

          <Button onPress={() => {}}>
            <ButtonIcon type="negative" name="arrow-down-circle" />
            <ButtonText>Outcome</ButtonText>
          </Button>
        </TypeWrapper>

        <DropdownWrapper>
          <Dropdown itemStyle={{ backgroundColor: 'red' }}>
            {
              categories.map(category => <DropdownItem key={category} label={category} value={category} />)
            }
          </Dropdown>
        </DropdownWrapper>
      </Form>
    </Container>
  );
}
