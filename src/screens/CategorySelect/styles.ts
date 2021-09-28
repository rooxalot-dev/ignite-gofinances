import styled, { css } from 'styled-components/native';
import { FlatList, TouchableOpacityProps } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Category } from '.';
import { RFValue } from 'react-native-responsive-fontsize';

type CategoryWrapperProps = TouchableOpacityProps & {
  selected: boolean;
};


export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  justify-content: space-between;
  padding: 16px 0;
`;

export const CategoryList = styled(FlatList as new () => FlatList<Category>)`
  margin-top: 16px;
`;

export const CategoryWrapper = styled.TouchableOpacity<CategoryWrapperProps>`
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  border-radius: 5px;
  ${({theme, selected}) => selected && css`
    background-color: ${theme.colors.secondaryLight}
  `};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({theme, }) => theme.colors.text};
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 8px 16px;
`;