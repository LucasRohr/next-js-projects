import Link from "next/link";

export default function PostsPage() {
  return (
    <>
      Posts page
      <ul>
        <li>
          <Link href="/">Ir para a home</Link>
        </li>
        <li>
          <Link href={`/posts/next-js`}>Ir para post de Next.js</Link>
        </li>
      </ul>
    </>
  );
}
