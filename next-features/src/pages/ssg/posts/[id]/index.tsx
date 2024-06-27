import { Box, Text } from "@skynexui/components";
import Link from "next/link";
import { useRouter } from "next/router";
import data from "../../../../mock/posts.json";

// Function to return how many and what dynamic routes will need to be pre-rendered in static generation
// Only works alongside getStaticProps
export const getStaticPaths = async () => {
  const parsedPaths = data.posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths: parsedPaths,
    fallback: false, // false to return 404 in case it isn't in the paths list above, true to handle with useRouter
  };
};

// Function to return pre-render data for the page content
// Will be applied to each path on the getStaticPaths return
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const post = data.posts.find((post) => post.id === id);

  return {
    props: {
      id: post.id,
      title: post.title,
      date: post.date,
      content: post.content,
      video: post.video,
    },
  };
};

export default function PostPage(props) {
  const router = useRouter();

  const post = {
    title: props.title,
    date: props.date,
    content: props.content,
    video: props.video,
  };

  // Alternate way to handle fallback pages, without getStaticPaths option
  if (router.isFallback) {
    return "404";
  }

  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        margin: "32px auto",
        maxWidth: "700px",
        paddingHorizontal: "16px",
      }}
    >
      {/* Header */}
      <Text
        variant="heading2"
        tag="h1"
        styleSheet={{
          color: "#F9703E",
          justifyContent: "center",
          lineHeight: "1.2",
        }}
      >
        {post.title}
      </Text>
      <Text
        styleSheet={{
          color: "#F9703E",
          justifyContent: "center",
          borderBottom: "1px solid #F9703E",
          paddingVertical: "16px",
          marginVertical: "16px",
        }}
      >
        {post.date}
      </Text>

      {/* Content */}
      <Box
        styleSheet={{
          flexDirection: "column",
        }}
      >
        <Text>{post.content}</Text>

        {post.video && (
          <iframe
            style={{ marginTop: "32px", minHeight: "400px" }}
            src={post.video}
          />
        )}
      </Box>

      {/* Footer */}
      <Box
        styleSheet={{
          marginTop: "16px",
          paddingVertical: "16px",
          borderTop: "1px solid #F9703E",
          color: "#F9703E",
        }}
      >
        <Link href="/" passHref>
          <Text tag="a" styleSheet={{ hover: { textDecoration: "underline" } }}>
            Voltar para a home
          </Text>
        </Link>
      </Box>
    </Box>
  );
}
