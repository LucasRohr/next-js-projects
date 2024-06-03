import { Link } from "../components";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Oops! This page doesn't exist :O</h1>
      <Link href="/" passHref>
        Go back to home
      </Link>
    </div>
  );
}
