import { Route, Routes } from "react-router-dom";
import { RenderAndCommitPage } from "./pages/render-and-commit-page";

export function AddingInteractivityRoute() {
  return (
    <Routes>
      <Route path="" element={<div>smaple</div>} />
      <Route path="render-and-commit" element={<RenderAndCommitPage />} />
    </Routes>
  );
}

export { AddingInteractivityRoute as default };
