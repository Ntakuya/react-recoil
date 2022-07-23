import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontButton } from "./components/font-button";
import { Text } from "./components/text";
import { CharacterCounter } from "./components/charator-counter";
import { Sample } from "./components/sample";
import { ReactRoutes } from "./features/react/routes"

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="react" element={<ReactRoutes />} />
          <Route index element={
            <>
              <FontButton />
              <Text />
              <CharacterCounter />
              <Sample />
            </>}
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
