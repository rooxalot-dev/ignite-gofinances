import { Platform, TouchableOpacityProps, ViewProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type OutlineButtonProps = RectButtonProps & {
  checked: boolean;
  checkedBackgroundColor?: string;
};

type ContainerBorderHelper = ViewProps & {
  checked: boolean;
  checkedBackgroundColor?: string;
};

export const Container = styled(RectButton)<OutlineButtonProps>`
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

export const ContainerBorderHelper = styled.View<ContainerBorderHelper>`
  ${() => Platform.OS !== 'ios' && css<ContainerBorderHelper>`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-width: ${({ checked }) => !checked ? 1 : 0}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
  ` }
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;