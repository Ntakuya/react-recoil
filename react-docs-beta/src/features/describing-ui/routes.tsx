import { Route, Routes } from "react-router-dom";
import YourFirstComponent from "./pages/your-first-componnet-page/your-first-component";

export function DescribingUi() {
  return (
    <Routes>
      <Route path="" element={<div>smaple</div>} />
      <Route path="your-first-component" element={<YourFirstComponent />} />
    </Routes>
  );
}

export { DescribingUi as default };
