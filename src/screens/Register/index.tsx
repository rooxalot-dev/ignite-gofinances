import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { Header } from '../../Components/Header';
import { Input } from '../../Components/Forms/Input';
import { OutlineButton } from '../../Components/Forms/OutlineButton';
import { Button } from '../../Components/Forms/Button';
import { CategorySelect } from '../../Components/Forms/CategorySelect';

import { 
  Container,
  Form,
  Fields,
  ButtonIcon,
  TypeWrapper
} from './styles';

export const Register: React.FC = () => {
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
      <Header title="Cadastro"/>

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

          <CategorySelect />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
