import React, {useState} from 'react';
import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import DrawerList from './DrawerList';

export default function NavBar(): JSX.Element {
  const [state, setState] = useState(false);
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || 
          (event as React.KeyboardEvent).key === 'Shift')) {
      return;
      }
    setState(open);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/">
                  {/* Lior Sandov */}
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor={'right'}
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250, height: '100%', backgroundColor: '#121212' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <DrawerList />
        </Box>
      </Drawer>
    </>
  );
}