import React, { useState } from 'react';
import { TouchableWithoutFeedback, Alert, Keyboard, Modal } from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { Header } from '../../Components/Header';
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
  const schemaValidator = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    amount: Yup.number().typeError('Preço deve ser um valor numérico').positive('Preço deve ser positivo').required('Preço é obrigatório'),
    transactionType: Yup.string().required('Tipo de transação é obrigatório'),
    category: Yup.string().required('Categoria é obrigatória'),
  });

  const { control, handleSubmit } = useForm({ resolver: yupResolver(schemaValidator) });
  const theme = useTheme();

  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [transactionType, setTransactionType] = useState('');
  const [selectedcategory, setSelectedCategory] = useState('');
  const [errors, setErrors] = useState<null | FieldValues>(null);

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
    setErrors(null);

    if (transactionType === '') {
      return Alert.alert('Atenção' , 'Selecione o tipo de transação.');
    }

    if (selectedcategory === '') {
      return Alert.alert('Atenção' , 'Selecione a categoria.');
    }

    async function successRegister(form: FormData) {
      const data = {
        name: form.name,
        amount: form.amount,
        transactionType,
        category: selectedcategory
      };

      console.log('data', data);
    };

    async function errorRegister(errors: FieldValues) {
      console.log('errors', errors);
      setErrors(errors);
    }

    handleSubmit(successRegister, errorRegister)();
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header title="Cadastro"/>

        <Form>
          <Fields>
            <FormInput 
              control={control}
              name="name" 
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors && errors.name && errors.name.message}
            />

            <FormInput 
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors && errors.amount && errors.amount.message}
            />

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
    </TouchableWithoutFeedback>
  );
}
