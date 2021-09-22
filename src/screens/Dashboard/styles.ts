import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    padding-top: ${getStatusBarHeight()}px;
    width: 100%;
    height: ${RFPercentage(42)}px;
    max-height: 380px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderWrapper = styled.View`
    padding: 0 24px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export const LogoutButton = styled.TouchableOpacity`
    
`;

export const LogoutButtonIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.secondary};
`;

export const CardContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24 },
})`
  width: 100%;
  margin-top: ${RFValue(-150)}px;
`;
