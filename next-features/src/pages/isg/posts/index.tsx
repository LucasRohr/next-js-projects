import { Box, Text, Image } from "@skynexui/components";
import data from "../../../mock/posts.json";
import { Post } from "../../../components/post-component";
import { useRouter } from "next/router";

// Default Pages Router home page
// The posts examples focus on SSG (ssg/posts)
export default function PostsHomePage() {
  const router = useRouter();

  const infos = {
    nome: "Lucas Rohr Carreño - ISG",
    githubUser: "LucasRohr",
  };

  const queryDate = router.query.date;

  // useRouter query to apply search params filter
  const posts = queryDate
    ? data.posts.filter((post) => post.date === queryDate)
    : data.posts;

  const hasPosts = posts.length > 0;

  const renderPosts = () => {
    if (!hasPosts) {
      return (
        <Text
          variant="heading1"
          tag="h1"
          styleSheet={{ color: "#703ef9", justifyContent: "center" }}
        >
          No posts found with the given date!
        </Text>
      );
    }

    return (
      <Box
        styleSheet={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          marginTop: "16px",
          gridGap: "16px",
        }}
      >
        {posts.map(({ title, content, id }) => (
          <Post
            key={id}
            title={title}
            content={content}
            id={id}
            renderType="isg"
          />
        ))}
      </Box>
    );
  };

  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "800px",
        paddingHorizontal: "16px",
      }}
    >
      <Image
        src={`https://github.com/${infos.githubUser}.png`}
        styleSheet={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          margin: "0 auto",
          border: "2px solid #703ef9",
        }}
      />
      <Text
        variant="heading1"
        tag="h1"
        styleSheet={{ color: "#703ef9", justifyContent: "center" }}
      >
        {infos.nome}
      </Text>

      {renderPosts()}
    </Box>
  );
}
