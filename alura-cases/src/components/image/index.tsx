import { ElementType } from "react";
import { Box } from "../box";

type ImagePropTypes = {
  src?: string;
  alt?: string;
  as?: ElementType;
  styleSheet?: any;
};

export function Image({ as, ...props }: ImagePropTypes) {
  const tag = "img";

  return <Box as={tag} {...props} />;
}
