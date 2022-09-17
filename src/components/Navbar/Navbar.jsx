import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import LoginIcon from "@mui/icons-material/Login";
import StartIcon from "@mui/icons-material/Start";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import CircleIcon from '@mui/icons-material/Circle';
import CustomizedDialogs from '../Credential/Creadential';

const pages = [
  <Link to="/service" className="link">
    Service
  </Link>,
  <CustomizedDialogs />
];

const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="https://pbs.twimg.com/profile_images/1453339438029869059/Mpk9QXje_400x400.jpg"
            alt="logo"
            style={{ height: "20px", width: "20px" }}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Fiverr<CircleIcon sx={{fontSize: "10px", color: "#1DBF73"}} />
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
              <MenuIcon />
            </IconButton>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Fiverr
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {props.auth ? (
            <>
              <Typography>
                <Link to="/login" className="link">
                  <Button
                    size="medium"
                    variant="extended"
                    startIcon={<LoginIcon />}
                    style={{ marginLeft: "10px" }}
                  >
                    Sign In
                  </Button>
                </Link>
              </Typography>
              <Link to="/register" className="link">
                <Fab
                  size="medium"
                  variant="extended"
                  color="primary"
                  style={{ marginLeft: "10px" }}
                >
                  Join&nbsp;
                  <StartIcon />
                </Fab>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="link">
                <Fab
                  size="medium"
                  variant="extended"
                  color="primary"
                  style={{ marginLeft: "10px" }}
                >
                  Dashboard&nbsp;
                  <DashboardIcon />
                </Fab>
              </Link>
              <Link to="/logout" className="link">
                <Button
                  size="medium"
                  variant="extended"
                  endIcon={<LogoutIcon />}
                  style={{ marginLeft: "10px" }}
                >
                  Logout
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
