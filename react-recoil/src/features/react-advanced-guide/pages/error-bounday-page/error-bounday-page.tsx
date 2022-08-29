import { FC } from 'react';
import { ErrorBoundary, BuggyCounter } from '../../components/error-boundary';

export const ErrorBoundaryPage: FC = () => {
  return (
    <div>
      <h1>Error Bondary</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
};

export { ErrorBoundaryPage as default };
