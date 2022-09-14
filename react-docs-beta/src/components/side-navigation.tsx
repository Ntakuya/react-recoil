import { lazy, Suspense } from "react";
import FallBackUi from "./fall-back-ui";

const DescribingUiSideNavigation = lazy(
  () => import("../features/describing-ui/components/side-navigation")
);
const AddingInteractivySideNavigation = lazy(
  () => import("../features/adding-interactivity/components/side-navigation")
);

export function SideNavigation() {
  return (
    <div>
      <Suspense fallback={<FallBackUi />}>
        <DescribingUiSideNavigation parentPath="learn" />
        <AddingInteractivySideNavigation parentPath="adding-interactivity" />
      </Suspense>
    </div>
  );
}

export { SideNavigation as default };
