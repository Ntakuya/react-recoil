import { Link } from 'react-router-dom';

const navStyled = {};

export function SideNavigateion() {
  return (
    <nav style={navStyled}>
      <ul>
        <li>
          <Link to="">root</Link>
        </li>
        <li>
          <Link to="/react">react</Link>
        </li>
        <li>
          <Link to="/react/a">react a</Link>
        </li>
        <li>
          <Link to="/react/react-docs">react docs</Link>
        </li>
        <li>
          <Link to="/react/react-docs/state-and-lifecycle">
            state and lifecycle
          </Link>
        </li>
        <li>
          <Link to="/react/react-docs/handling-event">handling event</Link>
        </li>
      </ul>
    </nav>
  );
}
