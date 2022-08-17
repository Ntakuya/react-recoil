import { Route, Routes } from 'react-router-dom';
import {
  HandlingEventPage,
  IntroducingPage,
  StateAndLifeCyclePage,
} from './pages';
import { ListsAndKeysPage } from './pages/lists-and-keys-page';

export function ReactDocsRoute() {
  return (
    <Routes>
      <Route path="" element={<IntroducingPage />} />
      <Route path="state-and-lifecycle" element={<StateAndLifeCyclePage />} />
      <Route path="handling-event" element={<HandlingEventPage />} />
      <Route path="lists-and-keys" element={<ListsAndKeysPage />} />
    </Routes>
  );
}
