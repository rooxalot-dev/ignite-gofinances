import React from 'react';

import { Category } from '../../models/Category';
import { 
  Container, 
  TransactionTitle, 
  TransactionValue, 
  TransactionFooter, 
  TransactionCategory, 
  TransactionCategoryIcon,
  TransactionCategoryTitle,
  TransactionDate
} from './styles';

type TransactionCardProps = {
  type: 'positive' | 'negative',
  title: string;
  value: string;
  category: Category;
  date: string;
};

const TransactionCard: React.FC<TransactionCardProps> = ({
  type,
  title,
  value,
  category,
  date,
}) => {
  return (
    <Container>
      <TransactionTitle>{title}</TransactionTitle>
      <TransactionValue type={type}>
        { type === 'negative' && '- ' }
        { value }
      </TransactionValue>

      <TransactionFooter>
        <TransactionCategory>
          <TransactionCategoryIcon name={category.icon}/>
          <TransactionCategoryTitle>{category.name}</TransactionCategoryTitle>
        </TransactionCategory>

        <TransactionDate>{date}</TransactionDate>
      </TransactionFooter>
    </Container>
  );
}

export default TransactionCard;