import React, { useState, useEffect } from "react";
import "../styles/topbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

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
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raymondhkim/m",
  },
  { icon: <GitHubIcon />, name: "Github", link: "https://github.com/reykeem" },
];

const nav = [
  {
    name: "About",
    target: "#about",
  },
  {
    name: "Featured",
    target: ".featured",
  },
  {
    name: "Contact",
    target: ".contact",
  },
];

function TopBar() {
  const [open, setOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const linkHandler = (action: any) => {
    setOpen(false);
    action.link && window.open(action.link);
    if (action.target) {
      const targetElement = document.querySelector(action.target);
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const refHandler = (ref: any) => {
    const targetElement = document.querySelector(ref.target);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  const resumeHandler = () => {
    window.open(
      "https://drive.google.com/file/d/1rPQx72hB2MTAviJRoQm1jwYdfifhk8fK/view"
    );
  };

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollpos(currentScrollPos);
      if (prevScrollpos > currentScrollPos) {
        setNavHidden(false);
      } else {
        setNavHidden(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <div className={`navbar ${navHidden ? "hidden" : ""}`}>
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
            left: -10,
            top: -20,
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
              className="tooltip"
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              tooltipPlacement="right"
              onClick={() => linkHandler(action)}
              FabProps={{
                style: {
                  backgroundColor: "transparent",
                  color: "rgb(187, 220, 249)",
                },
              }}
            />
          ))}
        </SpeedDial>
      </Box>
      <div className="nav">
        {nav.map((ref) => (
          <span
            className="navigator"
            onClick={() => refHandler(ref)}
            key={ref.name}
          >
            {ref.name}
          </span>
        ))}
        <span onClick={() => resumeHandler()} id="resume">
          Resume
        </span>
      </div>
    </div>
  );
}

export default TopBar;
