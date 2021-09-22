import React from 'react';

import { 
    Container,
    CardHeader,
    CardTitle,
    CardIcon,
    CardContent,
    CardValue,
    CardDescription
} from './styles';

interface CardProps {
    type: 'positive' | 'negative' | 'total';
    title: string;
    value: string;
    description?: string;
}

export const Card: React.FC<CardProps> = ({ type, title, value, description }: CardProps) => {
  let iconName = '';
  switch (type) {
    case 'positive':
      iconName = 'arrow-up-circle'
      break;
    case 'negative':
      iconName = 'arrow-up-circle'
      break;
    default:
      iconName = 'dollar-sign'
      break;
  }

  return (
    <Container type={type}>
        <CardHeader>
            <CardTitle type={type}>{title}</CardTitle>
            <CardIcon name={iconName} type={type}/>
        </CardHeader>
        <CardContent>
            <CardValue type={type}>{value}</CardValue>
        </CardContent>
        <CardDescription type={type}>
            {description}
        </CardDescription>
    </Container>
);
}