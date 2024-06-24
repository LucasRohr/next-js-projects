import { Box, Text } from "@skynexui/components";
import Link from "next/link";

export function Post({ title, content, id }) {
  return (
    <Box
      styleSheet={{
        flexDirection: "column",
        border: "1px solid #F9703E",
        padding: "16px",
        boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
        transition: ".3s",
        borderRadius: "4px",
        hover: {
          boxShadow: "1px 1px 5px 5px rgba(255,69,0,0.2)",
        },
      }}
    >
      <Link href={`posts/${id}`} passHref>
        <Text
          tag="a"
          variant="heading4"
          styleSheet={{
            display: " block",
            color: "#F9703E",
            marginBottom: "8px",
          }}
        >
          {title}
        </Text>
      </Link>
      <Text>{content.substring(0, 140)}...</Text>
    </Box>
  );
}
