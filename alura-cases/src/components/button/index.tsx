import { ElementType } from "react";

import { theme } from "../../theme";
import { Text } from "../text";

type ButtonPropTypes = {
  children?: React.ReactNode;
  type?: string;
  as?: ElementType;
  styleSheet?: any;
};

export function Button({ as, styleSheet, ...props }: ButtonPropTypes) {
  const { buttonVariant = "primary", ...restStyleSheet } = styleSheet ?? {};
  const tag = "button";

  const finalStyleSheet = {
    cursor: "pointer",
    textVariant: theme.typography.variants.body2,
    color: theme.colors.neutral["000"],
    boxShadow: `0 5px 7px -5px ${theme.colors.neutral["999"]}43`,
    display: "block",
    outline: 0,
    width: theme.space["x1/1"],
    border: `${theme.space.xpx} solid ${theme.colors[buttonVariant][900]}`,
    borderRadius: theme.space.x2,
    paddingHorizontal: {
      xs: theme.space.x5,
      sm: theme.space.x10,
    },
    paddingVertical: theme.space.x3,
    transition: "all 0.2s ease-in-out",
    backgroundColor: theme.colors[buttonVariant][600],
    hover: {
      backgroundColor: theme.colors[buttonVariant][500],
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}73`,
    },
    focus: {
      backgroundColor: theme.colors[buttonVariant][700],
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}93`,
    },
    ...restStyleSheet,
  };

  return <Text as={tag} styleSheet={finalStyleSheet} {...props} />;
}
