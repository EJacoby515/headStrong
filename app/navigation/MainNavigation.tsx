import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Import your screens here
import HomeScreen from '../(main)/(tabs)/home';
import Track from '../(main)/(tabs)/Track';
import Connect from '../(main)/(tabs)/Connect';
import Resources from '../(main)/(tabs)/Resources';
import ProfileScreen from '../(main)/(tabs)/profile';

const Tab = createBottomTabNavigator();

type IconName = React.ComponentProps<typeof Feather>['name'];

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: IconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Track':
              iconName = 'activity';
              break;
            case 'Connect':
              iconName = 'users';
              break;
            case 'Resources':
              iconName = 'book-open';
              break;
            case 'Profile':
              iconName = 'user';
              break;
            default:
              iconName = 'circle'; // Fallback icon
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6FAFE8',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Track" component={Track} />
      <Tab.Screen name="Connect" component={Connect} />
      <Tab.Screen name="Resources" component={Resources} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigation;