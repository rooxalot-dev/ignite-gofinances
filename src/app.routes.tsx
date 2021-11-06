import React from 'react';
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
          tabBarIcon: ({ focused, size}) => {
            const menuItem = menu.find((item) => item.name === route.name);
            const iconName = menuItem?.iconName || '';
            const iconColor = !focused ? theme.colors.text : theme.colors.secondary;

            return <Feather name={iconName} size={20} color={iconColor} />;
          },
        })}  
      >
        <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Listagem' }} />
        <Tab.Screen name="Register" component={Register} options={{ title: 'Cadastrar' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

