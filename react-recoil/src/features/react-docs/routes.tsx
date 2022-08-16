import { Route, Routes } from 'react-router-dom';
import {
  HandlingEventPage,
  IntroducingPage,
  StateAndLifeCyclePage,
} from './pages';

export function ReactDocsRoute() {
  return (
    <Routes>
      <Route path="" element={<IntroducingPage />} />
      <Route path="state-and-lifecycle" element={<StateAndLifeCyclePage />} />
      <Route path="handling-event" element={<HandlingEventPage />} />
    </Routes>
  );
}
