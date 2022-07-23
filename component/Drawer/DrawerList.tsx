import * as React from 'react';
import Link from 'next/link'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MergeTypeIcon from '@mui/icons-material/MergeType';

export interface DrawerListProps {
  icon: JSX.Element;
  label: string;
  link?: string
}

const data: DrawerListProps[] = [
  { icon: <AllInclusiveIcon />, label: 'על עצמי בקטנה', link: '/AboutMe'},
  { icon: <ColorLensIcon />, label: 'רשימת שירים מלאה', link: '/MySong'},
]

export default function ListItems() :JSX.Element {
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: 'dark',
          background: { paper: '#121212' },
        },
      })}
    >
      <Paper elevation={0} sx={{ width: '100%', height: '100%' }}>
        {data.map((item) => (
          <Link href={item.link ? item.link : '/'} key={item.label} passHref>
            <ListItemButton
              key={item.label}
              sx={{ py: 0, minHeight: 52, color: 'rgba(255,255,255,.8)' }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', textAlign: 'right' }}
              />
            </ListItemButton>
          </Link>
        ))}
      </Paper>
    </ThemeProvider>
  );
}