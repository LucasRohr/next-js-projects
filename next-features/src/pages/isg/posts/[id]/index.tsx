import { Box, Text } from "@skynexui/components";
import Link from "next/link";
import { useRouter } from "next/router";

// Function to return how many and what dynamic routes will need to be pre-rendered in static generation
// Only works alongside getStaticProps
export const getStaticPaths = async () => {
  // Bellow is the fetch behavior for SSG render, to use ISG, stop passing a paths array to Next

  // const apiPosts = await fetch(
  //   `https://fakeapi-omariosouto.vercel.app/api/posts`
  // );
  // const parsedPosts = await apiPosts.json();

  // const parsedPaths = parsedPosts.posts.map((post) => ({
  //   params: { id: post.id.toString() },
  // }));

  return {
    paths: [],
    fallback: "blocking", // false to return 404 in case it isn't in the paths list above, true to handle with useRouter
  };
};

// Function to return pre-render data for the page content
// Will be applied to each path on the getStaticPaths return
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const apiPost = await fetch(
    `https://fakeapi-omariosouto.vercel.app/api/posts/${id}`
  );
  const parsedPost = await apiPost.json();

  return {
    props: {
      id: parsedPost.id,
      title: parsedPost.title,
      date: parsedPost.date,
      content: parsedPost.content,
      video: parsedPost.video,
    },
    revalidate: 10,
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
    return "Loading...";
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
