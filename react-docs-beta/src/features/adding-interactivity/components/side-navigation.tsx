import { memo } from "react";
import { Link } from "react-router-dom";

const routes = [
  { path: "render-and-commit", component: "render-and-commit" },
  { path: "state-as-snapshot", component: "state-as-snapshot" },
  {
    path: "queueing-a-series-of-state-updates",
    component: "queueing-a-series-of-state-updates",
  },
];

export type AddingInteractivitySideNavaitionProps = {
  parentPath?: string;
};

export function AddingInteractivitySideNavaition(
  props: AddingInteractivitySideNavaitionProps
) {
  return (
    <ul>
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={`${props.parentPath}/${route.path}`}>
            {route.component}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const MemorizedAddingInteractivitySideNavaition = memo(
  AddingInteractivitySideNavaition
);

export { MemorizedAddingInteractivitySideNavaition as default };
