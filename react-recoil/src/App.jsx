import React, { lazy, Suspense } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontButton } from "./components/font-button";
import { Text } from "./components/text";
import { CharacterCounter } from "./components/charator-counter";
import { Sample } from "./components/sample";
import { SideNavigateion } from "./app/components"

const ReactRoutes = lazy(() => import("./features/react/routes"))
const layoutStyled = {
  display: "flex",
  minHeight: "100vh"
}
const sideNavStyled = {
  flex: "0 0 200px",
  height: "100vh"
}
const mainStyled = {
  flex: "1 1 auto",
  height: "100vh"
}

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div style={layoutStyled}>
          <div style={sideNavStyled} >
            <SideNavigateion/>
          </div>
          <main style={mainStyled}>
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
        </main>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
