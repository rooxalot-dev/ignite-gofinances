import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

type IconProps = {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Form = styled.View`
  padding: 24px;
  flex: 1;
  justify-content: space-between;
`;

export const Fields = styled.View`
`;


export const TypeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const ButtonIcon = styled(Feather)<IconProps>`
  font-size: ${ RFValue(20)}px;
  margin-right: 14px;
  color: ${({ theme, type }) => {
    switch (type) {
      case 'positive':
        return theme.colors.success;
      default:
        return theme.colors.attention;
    };
  }};
`;

