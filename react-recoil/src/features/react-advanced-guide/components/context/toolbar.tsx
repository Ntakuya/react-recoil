import { FC } from 'react';
import { Theme } from '../../types/theme';
import ThemedButton from './themed-button';

export interface ToolbarProps {
  theme: Theme;
}

export const Toolbar: FC<ToolbarProps> = ({ theme }) => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};
