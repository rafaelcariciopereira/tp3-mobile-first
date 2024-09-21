import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {Array.from({ length: 14 }, (_, i) => (
          <li key={i + 3}>
            <Link to={`/exercicio_${i + 3}`}>Exercicio {i + 3}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
