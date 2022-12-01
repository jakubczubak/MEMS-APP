import { Link } from 'react-router-dom'

export function Nav() {

    return <nav>
    <ul>
      <li>
        <Link to="/hot">HOT</Link>
      </li>
      <li>
        <Link to="/regural">REGURAL</Link>
      </li>
    </ul>
  </nav>
}