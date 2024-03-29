import { Route, Routes } from "react-router-dom";
import { RenderAndCommitPage } from "./pages/render-and-commit-page";
import { StateAsASnapshotPage } from "./pages/state-as-a-snapshot-page";
import { QueueingASeriesOfStateUpdatesPage } from "./pages/queueing-a-series-of-state-updates";

export function AddingInteractivityRoute() {
  return (
    <Routes>
      <Route path="" element={<div>smaple</div>} />
      <Route path="render-and-commit" element={<RenderAndCommitPage />} />
      <Route path="state-as-snapshot" element={<StateAsASnapshotPage />} />
      <Route
        path="queueing-a-series-of-state-updates"
        element={<QueueingASeriesOfStateUpdatesPage />}
      />
    </Routes>
  );
}

export { AddingInteractivityRoute as default };
