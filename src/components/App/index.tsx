import { useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  useMediaQuery,
  GlobalStyles,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import colors from "../../theme";
import HomePanel from "../HomePanel";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,
    },
    error: {
      main: colors.error.main,
      light: colors.error.light,
      dark: colors.error.dark,
      contrastText: colors.error.contrastText,
    },
    warning: {
      main: colors.warning.main,
      light: colors.warning.light,
      dark: colors.warning.dark,
      contrastText: colors.warning.contrastText,
    },
    info: {
      main: colors.info.main,
      light: colors.info.light,
      dark: colors.info.dark,
      contrastText: colors.info.contrastText,
    },
    success: {
      main: colors.success.main,
      light: colors.success.light,
      dark: colors.success.dark,
      contrastText: colors.success.contrastText,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
  },
});

export default function App() {
  const isPortrait = useMediaQuery("(orientation: portrait)");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <GlobalStyles styles={cursorStyles} />

      <div className="bubble-cursor bubble-cursor-outer" />
      <div className="bubble-cursor bubble-cursor-inner" />

      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: {
            xs: 1,
            sm: 2,
          },
          backgroundColor: (theme) => theme.palette.text.primary,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: {
              xs: "100%",
              sm: isPortrait ? "100%" : "calc(100vh * 1.777777778)",
            },
            maxHeight: {
              xs: "100%",
              sm: isPortrait ? "100%" : "calc(100vw * 0.5625)",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HomePanel />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const cursorStyles = {
  cursor: "none",
  "& *": {
    cursor: "none",
  },
  ":root": {
    "--cursor-x": "0px",
    "--cursor-y": "0px",
  },
  ".bubble-cursor": {
    position: "fixed",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 9999,
    willChange: "transform",
    transform:
      "translate(calc(var(--cursor-x) - 50%), calc(var(--cursor-y) - 50%))",
  },
  ".bubble-cursor-inner": {
    width: "12px",
    height: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(2px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    transition: "width 0.2s, height 0.2s",
  },
  ".bubble-cursor-outer": {
    width: "30px",
    height: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(1px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "width 0.3s, height 0.3s",
  },
  'a:hover ~ .bubble-cursor-inner, button:hover ~ .bubble-cursor-inner, [role="button"]:hover ~ .bubble-cursor-inner':
    {
      width: "24px",
      height: "24px",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
    },
  'a:hover ~ .bubble-cursor-outer, button:hover ~ .bubble-cursor-outer, [role="button"]:hover ~ .bubble-cursor-outer':
    {
      width: "40px",
      height: "40px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
};
