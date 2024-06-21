// === next-features ===
// This project aims to explore various Next.js features and comment them for future reference

import Link from "next/link";

// Default Pages Router home page
export default function Page() {
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/posts">Ir para posts</Link>
        </li>
      </ul>
    </>
  );
}
