import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();

  return (
    <>
      Id do post atual: {router.query.id}
      <ul>
        <li>
          <Link href="/">Ir para a home</Link>
        </li>
        <li>
          <Link href={`${router.query.id}/comments`}>Ir para comentarios</Link>
        </li>
      </ul>
      <img src="/images/avatar-github.jpeg" alt="avatar" />
    </>
  );
}
