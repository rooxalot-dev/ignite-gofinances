import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { Header } from '../../Components/Header';
import { Input } from '../../Components/Forms/Input';
import { FormInput } from '../../Components/Forms/FormInput';
import { OutlineButton } from '../../Components/Forms/OutlineButton';
import { Button } from '../../Components/Forms/Button';
import { CategorySelect } from '../../Components/Forms/CategorySelect';

import { Category, CategorySelect as Categories } from '../CategorySelect';

import { 
  Container,
  Form,
  Fields,
  ButtonIcon,
  TypeWrapper
} from './styles';

type FormData = {
  name: string;
  amount: string;
};


export const Register: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const theme = useTheme();

  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [transactionType, setTransactionType] = useState('');
  const [selectedcategory, setSelectedCategory] = useState('');

  const handleChangeTransactionType = (type: string) => {
    if (transactionType === type) {
      setTransactionType('');
      return;
    }

    setTransactionType(type);
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category.name);
  };

  const handleRegister = () => {
    handleSubmit((form: FormData) => {
      const data = {
        name: form.name,
        amount: form.amount,
        transactionType,
        category: selectedcategory
      };

      console.log('data', data);
    })();
  }

  return (
    <Container>
      <Header title="Cadastro"/>

      <Form>
        <Fields>
          <FormInput control={control} name="name" placeholder="Nome"/>
          <FormInput control={control} name="amount" placeholder="Preço"/>

          <TypeWrapper>
            <OutlineButton 
              title="Income" 
              icon={() => <ButtonIcon type="positive" name="arrow-up-circle" />}
              checked={transactionType === 'Income'}
              checkedBackgroundColor={theme.colors.successLight}
              onPress={() => {handleChangeTransactionType('Income')}} 
            />

            <OutlineButton 
              title="Outcome" 
              icon={() => <ButtonIcon type="negative" name="arrow-down-circle" />}
              checked={transactionType === 'Outcome'}
              checkedBackgroundColor={theme.colors.attentionLight}
              onPress={() => {handleChangeTransactionType('Outcome')}} 
            />
          </TypeWrapper>

          <CategorySelect category={selectedcategory} onPress={() => setCategoryModalVisible(true)} />
        </Fields>

        <Button title="Enviar" onPress={(e) => handleRegister()} />
      </Form>


      <Modal 
        visible={categoryModalVisible}
        animationType="slide">
        <Categories 
          category={selectedcategory} 
          setCategory={handleSelectCategory} 
          closeSelectCategory={() => setCategoryModalVisible(false)}
        />
      </Modal>
    </Container>
  );
}
