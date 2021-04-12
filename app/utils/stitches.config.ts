import { createCss } from "@stitches/react"
import { CSSProperties } from "react"

export const { styled, css, global, getCssString } = createCss({
  prefix: "",
  theme: {
    colors: {
      bg: "white",
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
    },
    fonts: {
      $untitled: "Untitled Sans, apple-system, sans-serif",
      $mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    xss: `(min-width: 468px)`,
    xs: `(min-width: 640px)`,
    sm: `(min-width: 768px)`,
    md: "(min-width: 992px)",
    lg: `(min-width: 1024px)`,
    xl: `(min-width: 1280px)`,
    xxl: `(min-width: 1440px)`,
  },
  utils: {
    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value) => ({
      paddingTop: value,
    }),
    pr: (config) => (value) => ({
      paddingRight: value,
    }),
    pb: (config) => (value) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value) => ({
      paddingLeft: value,
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (config) => (value) => ({
      width: value,
      height: value,
    }),
    linearGradient: (config) => (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    br: (config) => (value) => ({
      borderRadius: value,
    }),
    flexBetweenCenter: (config) => (value: CSSProperties["flexDirection"] = "row") => ({
      flexDirection: value,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    flexCenterCenter: (config) => (value: CSSProperties["flexDirection"] = "row") => ({
      flexDirection: value,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
  },
})
