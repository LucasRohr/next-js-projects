import { ElementType } from "react";

import { Text } from "../text";
import { theme } from "../../theme";

type InputPropTypes = {
  id: string;
  type?: string;
  placeholder?: string;
  as?: ElementType;
  styleSheet?: any;
};

export function Input({ as, styleSheet, ...props }: InputPropTypes) {
  const tag = "input";

  const finalStyleSheet = {
    transition: "all 0.2s ease-in-out",
    outline: 0,
    textVariant: theme.typography.variants.body2,
    color: theme.colors.neutral[900],
    boxShadow: `0 5px 7px -5px ${theme.colors.neutral[999]}43`,
    display: "block",
    width: theme.space["x1/1"],
    border: `1px solid ${theme.colors.neutral[300]}`,
    borderRadius: theme.space.x2,
    paddingHorizontal: theme.space.x5,
    paddingVertical: theme.space.x3,
    focus: {
      border: `1px solid ${theme.colors.primary[500]}`,
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}43`,
    },
    ...styleSheet,
  };

  return <Text as={tag} styleSheet={finalStyleSheet} {...props} />;
}
