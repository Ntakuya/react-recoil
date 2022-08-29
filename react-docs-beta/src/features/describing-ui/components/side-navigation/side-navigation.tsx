import { memo } from "react";
import { Link } from "react-router-dom";

const routes = [{ path: "your-first-component", component: "string" }];

export type DescribingUISideNavaitionProps = {
  parentPath?: string;
};

export function DescribingUISideNavaition(
  props: DescribingUISideNavaitionProps
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

export const MemorizedDescribingUISideNavaition = memo(
  DescribingUISideNavaition
);

export { MemorizedDescribingUISideNavaition as default };
