import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 10px;
`;

export const UserInfo = styled.View`
    margin-left: 18px;
`;

export const UserGreeting = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular}; 
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.background};
    line-height: ${RFValue(24)}px;
`;

export const UserName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold}; 
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.background};
`;

