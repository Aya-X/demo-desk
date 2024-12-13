import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import colors from "../../theme";

type TimeButtonPropsType = {
  time: string;
  disabled?: boolean;
};

export default function TimeButton({
  time,
  disabled = false,
}: TimeButtonPropsType) {
  return (
    <Paper
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        backgroundColor: disabled
          ? `rgba(75, 122, 149, 0.7)`
          : `rgba(88, 147, 184, 0.7)`,
        backdropFilter: "blur(10px)",
        color: colors.text.primary,
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        transform: "scale(1)",

        "&:hover": {
          backgroundColor: disabled
            ? `rgba(75, 122, 149, 0.7)`
            : `rgba(88, 147, 184, 0.9)`,
          cursor: disabled ? "default" : "pointer",
          boxShadow: "0 12px 48px 0 rgba(31, 38, 135, 0.55)",
          transform: "scale(1.02)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        },

        "&:active": disabled
          ? {}
          : {
              transform: "scale(0.98)",
              boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.45)",
              backgroundColor: `rgba(88, 147, 184, 0.95)`,
            },

        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          opacity: 0.7,
          mb: 2,
          fontSize: {
            xs: "1.1rem",
            sm: "1.2rem",
            md: "1.3rem",
          },
          transition: "opacity 0.2s ease",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        星期四 | 台北
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontWeight: "light",
          fontSize: {
            xs: "4rem",
            sm: "5rem",
            md: "6rem",
          },
          transition: "text-shadow 0.2s ease",
          "&:hover": {
            textShadow: "0 0 12px rgba(255, 255, 255, 0.4)",
          },
        }}
      >
        {time}
      </Typography>
    </Paper>
  );
}
