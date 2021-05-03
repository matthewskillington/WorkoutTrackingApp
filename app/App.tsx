import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeList from './components/HomeList/HomeList';
import MetricsPage from './components/MetricsPage/MetricsPage';
import { ThemeContext } from './theme-context';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from './colourThemes';

const App: React.FC = () => {
  const theme = useColorScheme() === 'dark' ? DarkTheme : LightTheme;

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <ThemeContext.Provider
        value={theme}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeList}/>
          <Drawer.Screen name="Metrics" component={MetricsPage}/>
        </Drawer.Navigator>
      </ThemeContext.Provider>
    </NavigationContainer>
    
    );
};

export default App;
