import type { AppProps } from "next/app";

// Custom App: purpose is to apply default styles, scripts, providers and overall configs throughout all pages
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style>
        {`
          * {
            font-family: sans-serif;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
