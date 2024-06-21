/* 
  /posts/[id]/comments.js
*/

import Link from "next/link";
import { useRouter } from "next/router";

export default function Comentarios() {
  const router = useRouter();

  return (
    <div>
      Comentários do post com id: {router.query.id}
      <br />
      <ul>
        <li>
          <Link href="/">Ir para a home</Link>
        </li>
        <li>
          <Link href={`/posts/${router.query.id}`}>Ir para o post</Link>
        </li>
      </ul>
    </div>
  );
}
