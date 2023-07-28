import { tokens } from "@/theme";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb={"30px"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        mb={"5px"}
      >
        {title}
      </Typography>

      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
