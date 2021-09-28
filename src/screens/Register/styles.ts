import styled from 'styled-components/native';
import { Picker } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

type IconProps = {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${ RFValue(115)}px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
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

export const DropdownWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  margin-bottom: 8px;
  border-radius: 5px;
`;

export const Dropdown = styled.Picker.attrs({
  mode: 'dropdown',
})`
  height: ${ RFValue(56)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${ RFValue(14)}px;
`;

export const DropdownItem = styled(Picker.Item)``;

