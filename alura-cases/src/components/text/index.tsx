import React, { ElementType } from "react";

import { Box } from "../box";

type TextPropTypes = {
  children?: React.ReactNode;
  as?: ElementType;
  styleSheet?: any;
  htmlFor?: string;
};

export const Text = React.forwardRef(
  ({ as, styleSheet, ...props }: TextPropTypes, ref) => {
    const {
      textVariant = {
        fontSize: "inherit",
      },
      ...restStyleSheet
    } = styleSheet ?? {};

    const styleSheetUpdated = { ...textVariant, ...restStyleSheet };
    const tag = as || "span";

    return <Box ref={ref} as={tag} styleSheet={styleSheetUpdated} {...props} />;
  }
);
