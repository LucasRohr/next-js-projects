import { Box, Text, Image } from "@skynexui/components";
import data from "../../../mock/posts.json";
import { Post } from "../../../components/post-component";

// Default Pages Router home page
// The posts examples focus on SSG (ssg/posts)
export default function PostsHomePage() {
  const infos = {
    nome: "Lucas Rohr Carreño",
    githubUser: "LucasRohr",
  };

  const posts = data.posts;

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
          border: "2px solid #F9703E",
        }}
      />
      <Text
        variant="heading1"
        tag="h1"
        styleSheet={{ color: "#F9703E", justifyContent: "center" }}
      >
        {infos.nome}
      </Text>

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
    </Box>
  );
}
