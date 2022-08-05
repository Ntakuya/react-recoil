import React, { lazy, Suspense } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontButton } from "./components/font-button";
import { Text } from "./components/text";
import { CharacterCounter } from "./components/charator-counter";
import { Sample } from "./components/sample";

const ReactRoutes = lazy(() => import("./features/react/routes"))

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index element={
            <>
              <FontButton />
              <Text />
              <CharacterCounter />
              <Sample />
            </>}
          />
          <Route path="react/*" element={
            <Suspense fallback={<div>loading...</div>}>
              <ReactRoutes />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
