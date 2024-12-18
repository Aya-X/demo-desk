import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import colors from "../../theme";

type ControlButtonPropsType = {
  icon: React.ReactNode;
  label: string;

  disabled?: boolean;
};

export default function ControlButton({
  icon,
  label,
  disabled = false,
}: ControlButtonPropsType) {
  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 1, sm: 2 },
        backgroundColor: disabled
          ? `${colors.primary[400]}30`
          : `${colors.primary[300]}20`,
        backdropFilter: "blur(8px)",
        color: colors.primary.contrastText,
        border: `1px solid ${colors.primary[200]}40`,
        boxShadow: `0 4px 16px 0 ${colors.primary[900]}40`,
        transform: "translateY(0)",

        "&:hover": {
          backgroundColor: disabled
            ? `${colors.primary[400]}40`
            : `${colors.primary[300]}40`,
          cursor: disabled ? "default" : "pointer",
          boxShadow: `0 8px 32px 0 ${colors.primary[900]}60`,
          transform: "translateY(-3px)",
          border: `1px solid ${colors.primary[200]}60`,
        },

        "&:active": disabled
          ? {}
          : {
              transform: "translateY(1px)",
              boxShadow: `0 2px 8px 0 ${colors.primary[900]}40`,
              backgroundColor: `${colors.primary[300]}50`,
            },

        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Box
        sx={{
          mb: { xs: 1, sm: 2 },
          transform: "scale(1)",
          transition: "transform 0.2s ease",
          color: colors.primary[100],
          "& > svg": {
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
          },
          "&:hover": {
            transform: "scale(1.1)",
            color: colors.primary[50],
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        variant="body1"
        align="center"
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.1rem",
            md: "1.2rem",
          },
          fontWeight: 500,
          color: colors.primary[100],
          transition: "all 0.2s ease",
          "&:hover": {
            color: colors.primary[50],
            textShadow: `0 0 8px ${colors.primary[900]}60`,
          },
        }}
      >
        {label}
      </Typography>
    </Paper>
  );
}
