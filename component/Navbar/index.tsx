import React, {useState} from 'react';
import styles from '../../styles/Navbar.module.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image'
import tiktok from '../../public/tiktok-brands.svg';
import { Drawer } from '@mui/material';
import DrawerList from '../Drawer/DrawerList';
import Link from 'next/link';


export default function ButtonAppBar() {
    
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
            <div className={styles.mainNavbar}>
                <AppBar position="static" sx={{ backgroundColor:'#ffffff00' }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <div className={styles.navbarIcons}>
                            <IconButton>
                                <a href='https://www.youtube.com/c/OzTiramOfficial' target="_blank">
                                    <YouTubeIcon />
                                </a>
                            </IconButton>
                            {/* <IconButton >
                                <div className='tiktok-img'>
                                    <Image
                                        src={tiktok}
                                        alt="Picture of the author"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            </IconButton> */}
                            <IconButton>
                                <a 
                                    href='https://www.instagram.com/oztiram/?fbclid=IwAR2atW8XHTG8_0X4ouSm5oHYnNdJFN8mx5HW_ssTCvtFK0SjPjRRwjtYsIY'
                                    target="_blank"
                                >
                                    <InstagramIcon />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href='https://www.facebook.com/oz.tiram' target="_blank">
                                    <FacebookIcon />
                                </a>
                            </IconButton>
                            <IconButton>
                                <a href="https://wa.me/0524563229" target="_blank">
                                    <WhatsAppIcon />
                                </a>
                            </IconButton>
                            <IconButton>
                            <a href='tel:0524563229'>
                                <PhoneIcon />
                            </a>
                            </IconButton>
                        </div>
                        <div className={styles.name}>
                            <div>
                                <Link href="/">
                                    עוז תירם
                                </Link>
                            </div>
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
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
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