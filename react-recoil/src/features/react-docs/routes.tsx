import { Route, Routes } from 'react-router-dom';
import {
  HandlingEventPage,
  IntroducingPage,
  StateAndLifeCyclePage,
  ListsAndKeysPage,
  LiftingStateUpPage,
} from './pages';
import { ThinkingInReactPage } from './pages/thinking-in-react';

export function ReactDocsRoute() {
  return (
    <Routes>
      <Route path="" element={<IntroducingPage />} />
      <Route path="state-and-lifecycle" element={<StateAndLifeCyclePage />} />
      <Route path="handling-event" element={<HandlingEventPage />} />
      <Route path="lists-and-keys" element={<ListsAndKeysPage />} />
      <Route path="lists-and-keys" element={<ListsAndKeysPage />} />
      <Route path="lifting-state-up" element={<LiftingStateUpPage />} />
      <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
    </Routes>
  );
}
