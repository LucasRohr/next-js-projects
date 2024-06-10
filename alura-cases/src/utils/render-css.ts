// Utility functions to render CSS-in-JS code in a dynamic way

// Return prop value as a CSS formatted property
function renderCSSValue(cssPropName: string, cssPropValue: string) {
  if (cssPropName.includes("horizontal")) {
    return `
        ${cssPropName.replace("horizontal", "left")}: ${cssPropValue};
        ${cssPropName.replace("horizontal", "right")}: ${cssPropValue};
      `;
  }
  if (cssPropName.includes("vertical")) {
    return `
        ${cssPropName.replace("vertical", "top")}: ${cssPropValue};
        ${cssPropName.replace("vertical", "bottom")}: ${cssPropValue};
      `;
  }

  return cssPropName + ":" + cssPropValue + ";";
}

// Return component props as CSS, mapping all properties
function renderCSS(props: Object, currentBreakpoint: string) {
  if (!props) return "";

  return Object.keys(props)
    .map((prop) => {
      const cssPropName = prop
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase();
      const cssPropValue = props[prop];
      const isCssPropValueAnObject =
        Object.prototype.toString.call(cssPropValue) === "[object Object]";
      const currentCssPropValue = cssPropValue[currentBreakpoint];

      if (currentBreakpoint == "xs" && !isCssPropValueAnObject) {
        return renderCSSValue(cssPropName, cssPropValue);
      }

      if (currentCssPropValue) {
        return renderCSSValue(cssPropName, currentCssPropValue);
      }
    })
    .filter(Boolean)
    .join("");
}

export { renderCSS };
