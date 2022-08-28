import { FC, HTMLAttributes, useContext } from 'react';
import { Theme } from '../../types/theme';
import { ThemeContext } from './theme-context';

export interface ThemedButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const ThemedButton: FC<ThemedButtonProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div>theme is {theme}</div>
      <button>sample</button>
    </>
  );
};

export default ThemedButton;
