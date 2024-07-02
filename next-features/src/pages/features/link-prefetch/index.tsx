import Link from "next/link";

export default function LinkPrefetchPage() {
  return (
    <div>
      <li>
        {/* Prefetch true will always pre-load the page the link represents on the page the link is rendered */}
        <Link href="/features" prefetch={true}>
          Home
        </Link>
      </li>
      <li>
        {/* Prefetch false will just pre-load the page the link represents on link hover */}
        <Link href="/about" prefetch={false}>
          About
        </Link>
      </li>
      <li>
        <Link href="/link-prefetch">Link Prefetch</Link>
      </li>
    </div>
  );
}
