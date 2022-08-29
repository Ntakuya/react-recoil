import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

const routes = [
  { to: 'accessibility', children: 'Accessibility' },
  { to: 'code-spiliting', children: 'Code-Spiliting' },
  { to: 'context', children: 'Context' },
  { to: 'error-boundary', children: 'Error Boundary' },
];

export interface SideNavProps {
  basePath: string;
}

export const SideNav: FC<SideNavProps> = ({ basePath }) => {
  return (
    <ul>
      {routes.map((route) => (
        <li key={route.to}>
          <Link to={`${basePath}/${route.to}`}>{route.children}</Link>
        </li>
      ))}
    </ul>
  );
};

export default memo(SideNav);
