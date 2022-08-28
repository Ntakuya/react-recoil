import { FC } from 'react';
import { Theme } from '../../types/theme';
import { ThemeContext } from './theme-context';
import { Toolbar } from './toolbar';

export const Context: FC = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar theme={Theme.dark} />
    </ThemeContext.Provider>
  );
};
