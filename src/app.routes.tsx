import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { menu } from './utils/menu';
import { Dashboard } from './screens/Dashboard';
import { Register } from './screens/Register';

export const AppRoutes: React.FC = () => {
  const theme = useTheme();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: theme.colors.secondary,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarStyle: {
            height: 88,
            paddingVertical: Platform.OS === 'ios' ? 20 : 0
          },
          tabBarIcon: ({ size, color }) => {
            const menuItem = menu.find((item) => item.name === route.name);
            const iconName = menuItem?.iconName || '';

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}  
      >
        <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Listagem' }} />
        <Tab.Screen name="Register" component={Register} options={{ title: 'Cadastrar' }} />
        <Tab.Screen name="Resume" component={Register} options={{ title: 'Resumo' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

