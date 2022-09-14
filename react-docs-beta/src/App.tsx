import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FallBackUi from "./components/fall-back-ui";
import SideNavigation from "./components/side-navigation";

const DescribingUI = lazy(() => import("./features/describing-ui/routes"));
const AddingInteractivityRoute = lazy(
  () => import("./features/adding-interactivity/routes")
);

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div>
          <SideNavigation />
        </div>
        <div>
          <Routes>
            <Route
              path="learn/*"
              element={
                <Suspense fallback={<FallBackUi />}>
                  <DescribingUI />
                </Suspense>
              }
            ></Route>
            <Route
              path="adding-interactivity/*"
              element={
                <Suspense fallback={<FallBackUi />}>
                  <AddingInteractivityRoute />
                </Suspense>
              }
            />
            <Route path="*" element={<Navigate to="learn" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
