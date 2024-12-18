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
          ? `${colors.primary[400]}30`
          : `${colors.primary[300]}20`,
        backdropFilter: "blur(10px)",
        color: colors.primary.contrastText,
        border: `1px solid ${colors.primary[200]}40`,
        boxShadow: `0 8px 32px 0 ${colors.primary[900]}40`,
        transform: "scale(1)",

        "&:hover": {
          backgroundColor: disabled
            ? `${colors.primary[400]}40`
            : `${colors.primary[300]}40`,
          cursor: disabled ? "default" : "pointer",
          boxShadow: `0 12px 48px 0 ${colors.primary[900]}60`,
          transform: "scale(1.02)",
          border: `1px solid ${colors.primary[200]}60`,
        },

        "&:active": disabled
          ? {}
          : {
              transform: "scale(0.98)",
              boxShadow: `0 4px 16px 0 ${colors.primary[900]}40`,
              backgroundColor: `${colors.primary[300]}50`,
            },

        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          opacity: 0.9,
          mb: 2,
          fontSize: {
            xs: "1.1rem",
            sm: "1.2rem",
            md: "1.3rem",
          },
          color: colors.primary[100],
          fontWeight: 400,
          transition: "all 0.2s ease",
          "&:hover": {
            opacity: 1,
            color: colors.primary[50],
          },
        }}
      >
        星期四 | 台北
      </Typography>

      <Typography
        variant="h2"
        sx={{
          fontWeight: "900",
          fontSize: {
            xs: "4rem",
            sm: "5rem",
            md: "6rem",
          },
          color: colors.primary[50],
          transition: "all 0.2s ease",
          "&:hover": {
            color: colors.primary[50],
            textShadow: `0 0 12px ${colors.primary[900]}60`,
          },
        }}
      >
        {time}
      </Typography>
    </Paper>
  );
}
