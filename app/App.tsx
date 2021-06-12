import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import HomeList from './components/HomeList/HomeList';
import MetricsPage from './components/MetricsPage/MetricsPage';
import { ThemeContext } from './theme-context';
import { StyleSheet, useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from './colourThemes';
import { SafeAreaView } from 'react-native-safe-area-context';

const App: React.FC = () => {
  const theme = useColorScheme() === 'dark' ? DarkTheme : LightTheme;

  const Drawer = createDrawerNavigator();

  const styles = StyleSheet.create({
    safeAreaStyles: {
      flex: 1,
      backgroundColor: theme.MasterGrey100,
    }
  });

  const NavigationDarkTheme = {
    dark: true,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(61, 61, 61)',
      card: 'rgb(61, 61, 61)',
      text: 'rgb(255, 255, 255)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer
      theme={useColorScheme() === 'dark' ? NavigationDarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={theme}>
        <SafeAreaView style={styles.safeAreaStyles}>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeList}/>
            <Drawer.Screen name="Metrics" component={MetricsPage}/>
          </Drawer.Navigator>
        </SafeAreaView>
      </ThemeContext.Provider>
    </NavigationContainer>
    
    );
};

export default App;
