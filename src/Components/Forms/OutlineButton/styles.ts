import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: ${RFValue(170)}px;
  height: ${RFValue(56)}px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;