import { TextInput } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled(TextInput)`
  height: ${ RFValue(56)}px;
  padding: 16px 18px;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${ RFValue(14)}px;
  border-radius: 5px;
  margin-bottom: 8px;
`;