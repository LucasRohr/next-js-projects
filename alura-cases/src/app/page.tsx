import { Link } from "../components";

export default function HomePage() {
  return (
    <div>
      <h1>Alura Cases Home</h1>
      <Link href="/faq" passHref>
        Go to FAQ
      </Link>
    </div>
  );
}
