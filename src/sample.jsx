import React from "react";
import { atom, selector, useRecoilState } from "recoil";

const sampleState = atom({
  key: "sampleState",
  default: "",
});

const sampleSelector = selector({
  key: "sampleState.Selector",
  get: ({ get }) => {
    return get(sampleState) + "px";
  },
  set: ({ set }, newVal) => {
    return set(sampleState, newVal.replace(/px/i, ""));
  },
});

export const Sample = () => {
  const [atomState, setAtomState] = useRecoilState(sampleSelector);
  const [selectorState, setSelectorState] = useRecoilState(sampleSelector);

  const changeAtom = ({ target }) => {
    setAtomState(target.value);
  };

  const changeSelector = ({ target }) => {
    setSelectorState(target.value);
  };

  return (
    <>
      <div>
        atom: <span>{atomState}</span>
        <div>
          <input value={atomState} onChange={changeAtom} />
        </div>
      </div>
      <div>
        selecotor: <span>{selectorState}</span>
        <div>
          <input value={selectorState} onChange={changeSelector} />
        </div>
      </div>
    </>
  );
};
