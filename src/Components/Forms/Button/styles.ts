import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
`;