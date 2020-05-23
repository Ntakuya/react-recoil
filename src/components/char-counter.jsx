import React from "react";
import { useRecoilValue } from "recoil";
import { charCountState } from "../selectors/char-count-state";

export function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
