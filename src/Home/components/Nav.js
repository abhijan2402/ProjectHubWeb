import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { hover } from '@testing-library/user-event/dist/hover';
// const pages = ['Home','Feedback','Services','Call Us'];
import './nav.css'
const pages = [
  { name: 'Home', path: "/" },
  { name: 'Feedback', path: "Feedback" },
  { name: 'Services', path: "service" },
  // { name: 'Call Us', path: "contact" },
  { name: 'Orders', path: "OrderPage" },
  // { name: 'Cart', path: "Cart" },
];



const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" style={{ backgroundColor: "#FF7A00", borderRadius: "10px" }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 50,
              display: { xs: 'none', md: 'flex' },
              // display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,

              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ProjectHub
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: "none" } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className="link" styles={{ listStyle: "none", pointerEvents: 'none', textDecoration: "none", color: "red", fontSize: "90px" }} to={page.path}>
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,

              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ProjectHub
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "right", marginRight: "3%" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block', margin: "4px", textAlign: "right" }}
              >
                <Link style={{ textDecoration: "none", color: "white" }} to={page.path}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
          <Box style={{ margin: "5px", position: "absolute", right: "-2%" }}>
            <Link style={{ textDecoration: "none", color: "white" }} to={'/Cart'}>
              <LocalMallIcon fontSize='large' />
            </Link>
          </Box>


          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
