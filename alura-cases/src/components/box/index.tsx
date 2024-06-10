"use client";

import React, { ElementType } from "react";

import { renderCSS } from "../../utils";
import { theme } from "../../theme";

type BoxPropTypes = {
  children?: React.ReactNode;
  as?: ElementType;
  styleSheet?: any;
  action?: string;
};

export const Box = React.forwardRef(
  ({ as, styleSheet, ...props }: BoxPropTypes, ref) => {
    const Tag = as || "div";
    const styleSheetProps = styleSheet ?? {};
    const { className, srOnly, hover, focus } = styleSheetProps;

    return (
      <>
        <Tag
          ref={ref}
          {...props}
          className={`${className ?? ""} ${srOnly ? "sr-only" : ""}`}
        />
        <style jsx>{`
          ${Tag} {
            ${renderCSS(styleSheet, "xs")};
          }
          ${Tag}:hover {
            ${renderCSS(hover, "xs")};
          }
          ${Tag}:focus {
            ${renderCSS(focus, "xs")};
          }
          @media screen and (min-width: ${theme.breakpoints[
              "Breakpoints.sm"
            ]}px) {
            ${Tag} {
              ${renderCSS(styleSheet, "sm")};
            }
            ${Tag}:hover {
              ${renderCSS(hover, "sm")};
            }
            ${Tag}:focus {
              ${renderCSS(focus, "sm")};
            }
          }
          @media screen and (min-width: ${theme.breakpoints[
              "Breakpoints.md"
            ]}px) {
            ${Tag} {
              ${renderCSS(styleSheet, "md")};
            }
            ${Tag}:hover {
              ${renderCSS(hover, "md")};
            }
            ${Tag}:focus {
              ${renderCSS(focus, "md")};
            }
          }
          @media screen and (min-width: ${theme.breakpoints[
              "Breakpoints.lg"
            ]}px) {
            ${Tag} {
              ${renderCSS(styleSheet, "lg")};
            }
            ${Tag}:hover {
              ${renderCSS(hover, "lg")};
            }
            ${Tag}:focus {
              ${renderCSS(focus, "lg")};
            }
          }
          @media screen and (min-width: ${theme.breakpoints[
              "Breakpoints.xl"
            ]}px) {
            ${Tag} {
              ${renderCSS(styleSheet, "xl")};
            }
            ${Tag}:hover {
              ${renderCSS(hover, "xl")};
            }
            ${Tag}:focus {
              ${renderCSS(focus, "xl")};
            }
          }
        `}</style>
      </>
    );
  }
);
