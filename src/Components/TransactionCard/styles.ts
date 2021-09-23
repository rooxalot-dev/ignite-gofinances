import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface TypeProps {
  type: 'positive' | 'negative';
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: ${RFValue(128)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 4px;
  margin-bottom: 16px;
  padding: ${RFValue(16)}px ${RFValue(24)}px;
`;

export const TransactionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const TransactionValue = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) => type === 'positive' ? theme.colors.success : theme.colors.attention };
`;

export const TransactionFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(20)}px;
`;

export const TransactionCategory = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TransactionCategoryIcon = styled(Feather)`
  margin-right: 16px;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TransactionCategoryTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TransactionDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;
