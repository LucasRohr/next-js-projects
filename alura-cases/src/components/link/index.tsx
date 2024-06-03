import NextLink from "next/link";

export function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref {...props}>
      {children}
    </NextLink>
  );
}
