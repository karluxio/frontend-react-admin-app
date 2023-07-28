import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { SidebarContext } from "@/scenes";

export const SidebarHeaderLogo = ({ logo, username, role }) => {
  const { colors } = useContext(SidebarContext);

  return (
    <Box mb="25px">
      {/* USER PHOTO */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <img
          alt="profile-user"
          width="100px"
          height="100px"
          src={logo}
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
      </Box>

      {/* USER NAME AND ROLE */}
      <Box textAlign="center">
        <Typography
          variant="h4"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "10px 0 0 0" }}
        >
          {username}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          {role}
        </Typography>
      </Box>
    </Box>
  );
};
