import Head from "next/head";

type HeadTitlePropTypes = {
  children?: React.ReactNode;
};

export function HeadTitle({ children }: HeadTitlePropTypes) {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  );
}
