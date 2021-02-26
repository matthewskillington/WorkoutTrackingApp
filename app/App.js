import React, {useEffect, useState} from 'react';
import HomeList from './components/HomeList/HomeList';
import { ThemeContext } from './theme-context';
import { useColorScheme } from 'react-native';
import { DarkTheme, LightTheme } from './colourThemes';

const App: () => React$Node = () => {
  const theme = useColorScheme() === 'dark' ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider
      value={theme}>
        <HomeList />
    </ThemeContext.Provider>
    );
};

export default App;
