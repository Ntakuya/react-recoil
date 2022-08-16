import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './pages/index';
import { IntroducingPage } from './pages/introducing-page';
import { ReactDocsRoute } from '../react-docs';

export function ReactRoutes() {
  return (
    <Routes>
      <Route path="" element={<IndexPage />} />
      <Route path="a" element={<IntroducingPage />} />
      <Route path="react-docs/*" element={<ReactDocsRoute />} />
    </Routes>
  );
}

export default ReactRoutes;
