import { Link } from 'react-router-dom';

interface AboutProps {
  text?: string;
}

export default function About({ text = '' }: AboutProps) {
  return (
    <div>
      <h1>About {text}</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
