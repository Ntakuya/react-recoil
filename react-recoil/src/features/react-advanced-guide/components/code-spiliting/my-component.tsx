import { FC, lazy, startTransition, Suspense, useState } from 'react';
import Tab from './tab';
import Gimmer from './gimmer';

const Photos = lazy(() => import('./photos'));
const Comments = lazy(() => import('./comments'));

export const MyComponent: FC = () => {
  const [tab, setTab] = useState('photos');

  const handleTabSelect = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <div>
      <Tab selectTab={handleTabSelect} />
      <Suspense fallback={<Gimmer />}>
        {tab === 'photos' ? <Photos /> : <Comments />}
      </Suspense>
    </div>
  );
};
export default MyComponent;
