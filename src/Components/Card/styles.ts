import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type TypeProps = {
  type: 'positive' | 'negative' | 'total';
}

export const Container = styled.View<CardProps>`
    background-color: ${({ theme, type }) => type === 'total' ? theme.colors.secondary : theme.colors.shape};
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    padding: ${RFValue(18)}px ${RFValue(24)}px;
    margin-right: ${RFValue(16)}px;
    border-radius: 6px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CardTitle = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const CardIcon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(34)}px;
    color: ${({ theme, type }) => {
      let color = '';

      switch (type) {
        case 'positive':
          color = theme.colors.success;
          break;
        case 'negative':
          color = theme.colors.attention;
          break;
        default:
          color = theme.colors.shape;
          break;
      }

      return color;
    }};
`;

export const CardContent = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(40)}px;
`;

export const CardValue = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(34)}px;
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.title};
`;

export const CardCents = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(34)}px;
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.title};
    line-height: 55px;
`;

export const CardDescription = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text};
`;
