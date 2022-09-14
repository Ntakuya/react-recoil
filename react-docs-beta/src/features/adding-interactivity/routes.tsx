import { Route, Routes } from "react-router-dom";
import { RenderAndCommitPage } from "./pages/render-and-commit-page";
import { StateAsASnapshotPage } from "./pages/state-as-a-snapshot-page";

export function AddingInteractivityRoute() {
  return (
    <Routes>
      <Route path="" element={<div>smaple</div>} />
      <Route path="render-and-commit" element={<RenderAndCommitPage />} />
      <Route path="state-as-snapshot" element={<StateAsASnapshotPage />} />
    </Routes>
  );
}

export { AddingInteractivityRoute as default };
