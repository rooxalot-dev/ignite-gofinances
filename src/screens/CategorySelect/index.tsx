import React, { useState } from 'react';
import { Text } from 'react-native';

import { Header } from '../../Components/Header';
import { Container, CategoryList, CategoryWrapper, Icon, Title, Separator, ButtonWrapper } from './styles';

import { categories } from '../../utils/categories';
import { Button } from '../../Components/Forms/Button';

export interface Category {
  key: string;
  name: string;
  icon: string;
}

type CategorySelectProps = {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
};

export const CategorySelect: React.FC<CategorySelectProps> = ({
  setCategory,
  category,
  closeSelectCategory,
}: CategorySelectProps) => {
  const [selectedCategory, setSelectedCategory] = useState(category);

  const handleChangeCategory = (category: Category) => {
    setSelectedCategory(category.key);
    setCategory(category);
  }

  const handleSelectCategory = () => {
    const category = categories.find((category) => category.key === selectedCategory);
    setCategory(category as Category);
    closeSelectCategory();
  }

  return (
    <>
      <Header title="Categorias"/>

      <Container>
        <CategoryList 
          data={categories}
          keyExtractor={(category) => category.key}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({item}) => (
            <CategoryWrapper onPress={() => handleChangeCategory(item)} selected={item.key === selectedCategory}>
              <Icon name={item.icon}/>
              <Title>{item.name}</Title>
            </CategoryWrapper>
          )}
        />

        <ButtonWrapper>
          <Button title="Selecionar" onPress={() => handleSelectCategory()} />
        </ButtonWrapper>
      </Container>
    </>
  );
}