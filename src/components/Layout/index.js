import React, { useState, useContext } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
  Badge,
} from "@mui/material";
import MenuBar from "../icons/Menu";
import { Box } from "@mui/system";
import Logo from "../icons/Logo";
import { Link } from "react-router-dom";
import { Store } from "../../Store.js";

export default function Layout() {
  const { state } = useContext(Store);
  const { cart } = state;
  const pages = ["Productos", "Contactanos"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
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
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
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
            className="self-center text-lg font-bold whitespace-nowrap dark:text-blue-900"
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

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Link to="/cart">
              {cart.cartItems.length > 0 && <div>{cart.cartItems.length}</div>}
              <Badge badgeContent={cart.cartItems.length} color="primary">
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="carrito">
                    <IconButton sx={{ mx: "auto" }}>
                      <Avatar alt="Remy Sharp" src="/images/carrito.png" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Badge>
            </Link>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/images/ps4.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
