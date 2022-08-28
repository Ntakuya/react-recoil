import { FC, lazy, Suspense } from 'react';
import MyComponent from '../../components/code-spiliting/my-component';

const OtherComponent = lazy(
  () => import('../../components/code-spiliting/other-component')
);
const AnotherComponent = lazy(
  () => import('../../components/code-spiliting/another-component')
);

export const CodeSpitingPage: FC = () => {
  return (
    <div>
      <p>sample</p>
      <Suspense fallback={<div>loading other and another components...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
      <MyComponent />
    </div>
  );
};

export default CodeSpitingPage;
