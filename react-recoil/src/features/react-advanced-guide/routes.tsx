import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CodeSpitingPage } from './pages/code-spliting/code-spliting';

export const ReactAdvancedGuideRoutes: FC = () => {
  return (
    <Routes>
      <Route path="code-spiliting" element={<CodeSpitingPage />} />
    </Routes>
  );
};

export default ReactAdvancedGuideRoutes;
