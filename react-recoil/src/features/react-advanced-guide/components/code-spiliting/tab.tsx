import { FC } from 'react';

export interface TabProps {
  selectTab: (tab: string) => void;
}

export const Tab: FC<TabProps> = ({ selectTab }) => {
  return (
    <div>
      <div onClick={() => selectTab('photos')}>Photos</div>
      <div onClick={() => selectTab('comments')}>Comments</div>
    </div>
  );
};

export default Tab;
