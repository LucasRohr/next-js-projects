import { ElementType } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconSet from "@fortawesome/free-solid-svg-icons";

import { Box } from "../box";
import { capitalize } from "../../utils";

type IconPropTypes = {
  as?: ElementType;
  styleSheet?: any;
};

export function Icon({
  as,
  styleSheet: initialStyleSheet,
  ...props
}: IconPropTypes) {
  const { iconVariant, hover, focus, ...restStyleSheet } = initialStyleSheet;

  const styleSheet = {
    width: "1.5ch",
    height: "1.5ch",
    ...restStyleSheet,
  };

  return (
    <>
      <Box styleSheet={styleSheet}>
        <FontAwesomeIcon
          icon={iconSet[`fa${capitalize(iconVariant)}`]}
          crossOrigin="anonymous"
          {...props}
        />
      </Box>
    </>
  );
}
