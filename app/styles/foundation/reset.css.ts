/**
 * @see https://github.com/Andy-set-studio/modern-css-reset/blob/master/src/reset.css
 */
import { globalStyle } from "@vanilla-extract/css";
import * as layers from "./layers.css";

/* Box sizing rules */
globalStyle("*, *::before, *::after", {
  "@layer": {
    [layers.reset]: {
      boxSizing: "border-box",
    },
  },
});

/* Prevent font size inflation */
globalStyle("html", {
  "@layer": {
    [layers.reset]: {
      MozTextSizeAdjust: "none",
      WebkitTextSizeAdjust: "none",
      textSizeAdjust: "none",
    },
    [layers.font]: {
      fontFamily: "GlobalNotoSans",
    },
  },
});

/* Remove default margin */
globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
  "@layer": {
    [layers.reset]: {
      margin: 0,
    },
  },
});

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
globalStyle("ul[role='list'], ol[role='list']", {
  "@layer": {
    [layers.reset]: {
      listStyle: "none",
    },
  },
});

/* Set core root defaults */
globalStyle("html:focus-within", {
  "@layer": {
    [layers.reset]: {
      scrollBehavior: "smooth",
    },
  },
});

/* Set core body defaults */
globalStyle("body", {
  "@layer": {
    [layers.reset]: {
      minHeight: "100vh",
      textRendering: "optimizeSpeed",
      lineHeight: 1.5,
    },
  },
});

/* Balance text wrapping on headings */
globalStyle("h1, h2, h3, h4", {
  "@layer": {
    [layers.reset]: {
      textWrap: "balance",
    },
  },
});

/* A elements that don't have a class get default styles */
globalStyle("a:not([class])", {
  "@layer": {
    [layers.reset]: {
      textDecorationSkipInk: "auto",
      color: "currentColor",
    },
  },
});

/* Make images easier to work with */
globalStyle("img, picture", {
  "@layer": {
    [layers.reset]: {
      maxWidth: "100%",
      display: "block",
    },
  },
});

/* Inherit fonts for inputs and buttons */
globalStyle("input, button, textarea, select", {
  "@layer": {
    [layers.reset]: {
      font: "inherit",
    },
  },
});

/* Make sure textareas without a rows attribute are not tiny */
globalStyle("textarea:not([rows])", {
  "@layer": {
    [layers.reset]: {
      minHeight: "10em",
    },
  },
});

/* Anything that has been anchored to should have extra scroll margin */
globalStyle(":target", {
  "@layer": {
    [layers.reset]: {
      scrollMarginBlock: "5ex",
    },
  },
});
