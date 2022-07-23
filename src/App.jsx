import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import { FontButton } from "./components/font-button";
import { Text } from "./components/text";
import { CharacterCounter } from "./components/charator-counter";
import { Sample } from "./sample";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <>
          <FontButton />
          <Text />
          <CharacterCounter />
          <Sample />
        </>
      </RecoilRoot>
    </div>
  );
}

export default App;
