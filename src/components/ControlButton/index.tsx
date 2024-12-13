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
        // 玻璃效果基礎樣式
        backgroundColor: disabled
          ? `rgba(47, 153, 174, 0.65)`
          : `rgba(95, 192, 211, 0.65)`,
        backdropFilter: "blur(8px)",
        color: colors.text.primary,
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.25)",
        transform: "translateY(0)",

        "&:hover": {
          backgroundColor: disabled
            ? `rgba(47, 153, 174, 0.65)`
            : `rgba(95, 192, 211, 0.85)`,
          cursor: disabled ? "default" : "pointer",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.45)",
          transform: "translateY(-3px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        },

        "&:active": disabled
          ? {}
          : {
              transform: "translateY(1px)",
              boxShadow: "0 2px 8px 0 rgba(31, 38, 135, 0.35)",
              backgroundColor: `rgba(95, 192, 211, 0.95)`,
            },

        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Box
        sx={{
          mb: { xs: 1, sm: 2 },
          transform: "scale(1)",
          transition: "transform 0.2s ease",
          "& > svg": {
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
          },
          "&:hover": {
            transform: "scale(1.1)",
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
          transition: "text-shadow 0.2s ease",
          "&:hover": {
            textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
          },
        }}
      >
        {label}
      </Typography>
    </Paper>
  );
}
