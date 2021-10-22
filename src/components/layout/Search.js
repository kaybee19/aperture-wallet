import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  height: '100%',
  backgroundColor: '#f0f0f2!important',
  width: '100%',
  border: '1px solid #cccccc', 
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: '0 1rem',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '9px 0',
    paddingLeft: '1rem',
    width: '45ch',
    fontSize: '14px'
  },
}));

export default function PrimarySearchAppBar(props) {

  return (
    <Box sx={{ marginRight: '.75rem', maxHeight: '40px' }}>
      <Search style={props.invest && {boxShadow: 'none', backgroundColor: '#f5f8fb', width: '300px', marginBottom: '1rem'} }>
        <StyledInputBase
          placeholder="Search tokens, pools, and assets"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  );
}