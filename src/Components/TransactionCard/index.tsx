import React from 'react';

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
  category: string;
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
      <TransactionValue type={type}>{value}</TransactionValue>

      <TransactionFooter>
        <TransactionCategory>
          <TransactionCategoryIcon name="dollar-sign"/>
          <TransactionCategoryTitle>{category}</TransactionCategoryTitle>
        </TransactionCategory>

        <TransactionDate>{date}</TransactionDate>
      </TransactionFooter>
    </Container>
  );
}

export default TransactionCard;