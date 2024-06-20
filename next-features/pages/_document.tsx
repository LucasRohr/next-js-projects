import { Html, Head, Main, NextScript } from "next/document";

// Custom Document: purpose is to config root HTML tags, sush as Html and body, configuring language, aria and etc
export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
