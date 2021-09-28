import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type OutlineButtonProps = TouchableOpacityProps & {
  checked: boolean;
  checkedBackgroundColor?: string;
};

export const Container = styled.TouchableOpacity<OutlineButtonProps>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: ${RFValue(170)}px;
  height: ${RFValue(56)}px;
  background-color: ${({ theme, checked, checkedBackgroundColor }) => 
    !checked ? 'transparent' : (checkedBackgroundColor ?? theme.colors.text)
  };

  border-width: ${({ checked }) => !checked ? 1 : 0}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;