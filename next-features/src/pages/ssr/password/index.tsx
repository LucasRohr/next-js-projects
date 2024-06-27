import { useState } from "react";

import { useRouter } from "next/router";
import { Box, TextField, Button } from "@skynexui/components";
import nookies from "nookies";

export default function PasswordScreen() {
  const [senha, setSenha] = useState("");
  const router = useRouter();

  return (
    <Box
      styleSheet={{
        border: "1px solid #F9703E",
        flexDirection: "column",
        maxWidth: { xs: "100%", sm: "400px" },
        marginTop: "20%",
        marginHorizontal: { xs: "16px", sm: "auto" },
        padding: "32px",
        borderRadius: "4px",
        boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (senha) {
            // Setting secret pass on cookie to get it on the server side (not recommended in real scenario, just for example sake)
            nookies.set(null, "SECRET_PASS", senha, {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
            });

            router.push("/ssr/logged-area");
          } else {
            alert("Please provide a password");
          }
        }}
      >
        <Box styleSheet={{ flexDirection: "column" }}>
          <TextField
            name="password"
            label="Qual é a senha secreta?"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button type="submit" label="Acessar" />
        </Box>
      </form>
    </Box>
  );
}
