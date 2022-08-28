import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CodeSpitingPage } from './pages/code-spliting/code-spliting';
import { ContextPage } from './pages/context-page/context-page';

export const ReactAdvancedGuideRoutes: FC = () => {
  return (
    <Routes>
      <Route path="code-spiliting" element={<CodeSpitingPage />} />
      <Route path="context" element={<ContextPage />} />
    </Routes>
  );
};

export default ReactAdvancedGuideRoutes;
