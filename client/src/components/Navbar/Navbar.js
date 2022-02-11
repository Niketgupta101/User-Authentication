import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle, MenuOutlined, Notifications } from "@material-ui/icons";
import { useNavigate, useLocation } from 'react-router-dom';

import React, { useEffect, useState } from "react";

const Navbar = () => {
  let [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);
  const Navigate = useNavigate();
  const location = useLocation();

  const handleProfileMenuOpen = () => {

  }

  const handleLogin = () => {
    Navigate('/auth')
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])

  const handleLogout = () => {
    localStorage.clear();
    setUser(undefined);
  }

  return (
    <>
      <Box xs={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton size="medium" edge="start" color="inherit" sx={{ mr: 2 }}>
              <MenuOutlined />
            </IconButton>
            <Typography variant="h6" noWrap component={"div"} sx={{ display: { xs: 'none', sm: 'block' } }}>Registration Portal</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs:'none', sm:'flex' }, justifyContent:'flex-end'}}>
              { user ? (
                <><IconButton size="medium" color="inherit">
                <Badge badgeContent={2} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton size="medium" edge="end" color="inherit" onClick={handleProfileMenuOpen}>
                <AccountCircle />
              </IconButton>
              {/* <Button color="inherit" onClick={handleLogout}>Logout</Button> */}
              </>
              ):(
              <Button color="inherit" onClick={handleLogin}>Login</Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
