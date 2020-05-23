import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fontSizeState } from "../atoms/font-size";
import { fontSizeLabelState } from "../selectors/font-size-label-state";

export function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>
      <button onClick={() => setFontSize(fontSize + 1)} style={{ fontSize }}>
        Click to Enlarge
      </button>
    </>
  );
}
