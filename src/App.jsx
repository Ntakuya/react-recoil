import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { FontButton } from "./components/font-button";
import { Text } from "./components/text";
import { CharacterCounter } from "./components/charator-counter";
import { Sample } from "./sample";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <FontButton />
        <Text />
        <CharacterCounter />
        <Sample />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
