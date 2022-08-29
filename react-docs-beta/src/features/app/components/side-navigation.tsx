import { lazy, Suspense } from "react";
import FallBackUi from "../../../components/fall-back-ui";

const DescribingUiSideNavigation = lazy(
  () => import("../../describing-ui/components/side-navigation")
);

export function SideNavigation() {
  return (
    <div>
      <Suspense fallback={<FallBackUi />}>
        <DescribingUiSideNavigation parentPath="learn" />
      </Suspense>
    </div>
  );
}

export { SideNavigation as default };
