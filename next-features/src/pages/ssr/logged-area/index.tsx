import { useRouter } from "next/router";
import type { GetServerSideProps } from "next";
import { Box, Button, Text } from "@skynexui/components";
import nookies from "nookies";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = nookies.get(context);

  const SECRET_PASSWORD = "jooj123";
  const isAuthorized = cookies.SECRET_PASS === SECRET_PASSWORD;

  if (!isAuthorized) {
    return {
      redirect: {
        permanent: false,
        destination: "/ssr/password/?status=401",
      },
    };
  }

  return {
    props: {},
  };
};

export default function LoggedScreen(props) {
  const router = useRouter();

  return (
    <Box
      styleSheet={{
        border: "1px solid #F9703E",
        flexDirection: "column",
        maxWidth: "400px",
        marginTop: "20%",
        marginHorizontal: "auto",
        padding: "32px",
        borderRadius: "4px",
        boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
      }}
    >
      <Text styleSheet={{ marginVertical: "32px" }}>
        Você acessou uma área protegida!
      </Text>

      <Button
        label="Logout"
        onClick={() => {
          nookies.destroy(null, "SECRET_PASS");
          router.push("/ssr/password");
        }}
        colorVariant="primary"
        variant="secondary"
      />
    </Box>
  );
}
