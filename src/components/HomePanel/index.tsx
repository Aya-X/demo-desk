import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";

import {
  Phone,
  MusicNote,
  Bluetooth,
  Email,
  Close,
  DoNotDisturb,
  Home,
  Mic,
  Wifi,
  Settings,
  CleaningServices,
  MoreHoriz,
} from "@mui/icons-material";

import colors from "../../theme";
import ControlButton from "../ControlButton";
import TimeButton from "../TimeButton";

export default function HomePanel() {
  const currentDate = new Date();
  const timeString = currentDate.toLocaleTimeString("zh-TW", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Paper
      sx={{
        p: { xs: 1, sm: 2 },
        width: "100%",
        height: "100%",
        background: `linear-gradient(135deg, 
          ${colors.primary.dark} 0%, 
          ${colors.secondary.dark} 100%
        )`,
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Grid size={6}>
          <TimeButton time={timeString} />
        </Grid>

        <Grid size={3}>
          <ControlButton icon={<Phone />} label="通話" />
        </Grid>
        <Grid size={3}>
          <ControlButton icon={<MusicNote />} label="音樂" />
        </Grid>

        <Grid size={1.5}>
          <ControlButton icon={<Bluetooth />} label="藍牙" />
        </Grid>
        <Grid size={1.5}>
          <ControlButton icon={<Email />} label="信箱" />
        </Grid>
        <Grid size={3}>
          <ControlButton icon={<Close />} label="關閉螢幕" />
        </Grid>

        <Grid size={3}>
          <ControlButton icon={<DoNotDisturb />} label="開啟勿擾" />
        </Grid>
        <Grid size={3}>
          <ControlButton icon={<Home />} label="環境控制" />
        </Grid>

        <Grid size={1.5}>
          <ControlButton icon={<Mic />} label="語音" />
        </Grid>
        <Grid size={1.5}>
          <ControlButton icon={<Wifi />} label="WiFi" />
        </Grid>
        <Grid size={3}>
          <ControlButton icon={<Settings />} label="系統設定" />
        </Grid>

        <Grid size={3}>
          <ControlButton icon={<CleaningServices />} label="打掃房間" />
        </Grid>
        <Grid size={3}>
          <ControlButton icon={<MoreHoriz />} label="更多服務" />
        </Grid>
      </Grid>
    </Paper>
  );
}
