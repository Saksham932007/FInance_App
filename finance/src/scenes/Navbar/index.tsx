import { Box, useTheme, Typography, Link } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import Pix from "@mui/icons-material/Pix";
import { useState } from "react"; // Add missing useState import

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    // Remove semicolon and add parentheses
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE BUTTON */}
      <FlexBetween gap="0.75rem">
        <Pix sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>
      {/* RIGHT SIDE BUTTON */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            component="a"
            href="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color:
                selected === "dashboard" ? palette.primary[700] : "inherit",
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            component="a"
            href="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color:
                selected === "predictions" ? palette.primary[700] : "inherit",
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  ); // Remove semicolon here
};

export default Navbar;
