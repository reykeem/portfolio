import React from "react";
import "../styles/topbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const actions = [
  { icon: <AccountCircleIcon />, name: "About" },
  { icon: <ArticleIcon />, name: "Resume" },
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raymondhkim/m",
  },
  { icon: <GitHubIcon />, name: "Github", link: "https://github.com/reykeem" },
];

function TopBar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const linkHandler = (link?: string) => {
    setOpen(false);
    link && window.open(link);
  };

  return (
    <div className="topbar">
      <div className="logo">
        <span>logo</span>
      </div>
      <Box
        sx={{
          transform: "translateZ(0px)",
          flexGrow: 1,
        }}
      >
        <SpeedDial
          direction="down"
          ariaLabel="Dropdown"
          sx={{ position: "absolute", flexDirection: "column", right: 0 }}
          icon={<MenuIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={() => linkHandler(action.link)}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}

export default TopBar;
