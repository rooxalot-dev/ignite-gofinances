import React from 'react';
import { View, Text } from 'react-native';

interface WelcomeProps {
    title: string
}

export const Welcome: React.FC<WelcomeProps> = ({title}: WelcomeProps) => {
  return (
    <View>
        <Text>React Native Bare Workflow com Typescript</Text>
        <Text style={{
            marginTop: 8,
            textAlign: 'center', 
            fontSize: 20, 
            fontWeight: 'bold'
        }}>{title}</Text>
    </View>
  );
}