import React, { useState } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuBar from "../icons/Menu";
import { Box } from "@mui/system";
import Logo from "../icons/Logo";
import { Link } from "react-router-dom";

export default function Layout() {
  const pages = ["Productos", "Contactanos"];
  // const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const renderMobile = (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      {pages?.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography
            className="self-center text-lg font-semibold whitespace-nowrap dark:text-blue-900"
            textAlign="center"
          >
            {page}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
  return (
    <div>
      <AppBar position="static" className="bg-blue-900">
        <Container maxWidth="xl" className="bg-blue-900">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              noWrap
              sx={{ mr: 2, display: { xs: "-ms-flexbox", md: "flex " } }}
            >
              <Link to="/" className="flex">
                <Logo />
                <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                  Qsis Game
                </span>
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuBar />
              </IconButton>

              {renderMobile}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );

  /*
   <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  align: "center",
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
         */
}
