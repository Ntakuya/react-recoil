import { createContext } from 'react';
import { Theme } from '../../types/theme';

export const ThemeContext = createContext<Theme>('light');

ThemeContext.displayName = 'ThemeContext';
