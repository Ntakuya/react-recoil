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
        <li>
          <Link to="/react/react-docs/lists-and-keys">Lists and Keys</Link>
        </li>
        <li>
          <Link to="/react/react-docs/lifting-state-up">Lifting State Up</Link>
        </li>
        <li>
          <Link to="/react/react-docs/thinking-in-react">
            Thinking In React
          </Link>
        </li>
      </ul>
    </nav>
  );
}
