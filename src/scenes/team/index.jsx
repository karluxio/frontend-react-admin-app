import { Header } from "@/components";
import { Box } from "@mui/material";

export const Team = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TEAM" subtitle="Welcome to your team" />
      </Box>
    </Box>
  );
};
