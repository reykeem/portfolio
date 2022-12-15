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
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import { makeStyles } from "@material-ui/core/styles";

const actions = [
  {
    icon: <AccountCircleIcon />,
    name: "About",
    target: "#about",
  },
  {
    icon: <AutoAwesomeIcon />,
    name: "Featured",
    target: ".featured",
  },
  {
    icon: <RecentActorsIcon />,
    name: "Contact",
    target: ".contact",
  },
  { icon: <ArticleIcon />, name: "Resume" },
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raymondhkim/m",
  },
  { icon: <GitHubIcon />, name: "Github", link: "https://github.com/reykeem" },
];

const styles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "transparent",
  },
}));

function TopBar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const linkHandler = (action: any) => {
    setOpen(false);
    action.link && window.open(action.link);
    if (action.target) {
      const targetElement = document.querySelector(action.target);
      console.log("target:", targetElement);
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const classes = styles();

  return (
    <div className="topbar">
      <div className="logo">{/* <span>logo</span> */}</div>
      <Box
        sx={{
          transform: "translateZ(0px)",
          flexGrow: 1,
        }}
      >
        <SpeedDial
          direction="down"
          ariaLabel="Dropdown"
          sx={{
            position: "absolute",
            flexDirection: "column",
            right: 0,
          }}
          icon={<MenuIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          FabProps={{
            sx: {
              bgcolor: "transparent",
              color: "rgb(187, 220, 249)",
              "&:hover": {
                bgcolor: "transparent",
              },
            },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={() => linkHandler(action)}
              FabProps={{
                style: {
                  color: "rgb(187, 220, 249)",
                  backgroundColor: "transparent",
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}

export default TopBar;
