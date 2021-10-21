import * as React from 'react';

// Material
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Icons
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ethIcon, avaIcon, fantomIcon, binanceIcon, polygonIcon } from '../../assets/images';

export default function HeaderNetwork() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const icons = [
    { icon: avaIcon, name: 'Avalanche' },
    { icon: binanceIcon, name: 'Binanace' },
    { icon: fantomIcon, name: 'Fantom' },
    { icon: polygonIcon, name: 'Polygon' },
    { icon: ethIcon, name: 'Ethereum' },
  ]

  return (
    <div>
      <Button
        id="network-btn"
        className='header-button'
        aria-controls="network-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={icons[4].icon} width='25' alt="network icon" />
        <Typography variant='body1'>{icons[4].name}</Typography>
        <DownIcon fontSize='small' />
      </Button>
      <Menu
        id="network-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'network-btn',
        }}
      >
        {
          icons.map((icon, i) => (
            <MenuItem key={i} onClick={handleClose} className='network-btn'>
              <img src={icon.icon} width='20' alt='network icon' />
              <Typography sx={{ marginLeft: 1 }} variant='body2'>{icon.name}</Typography>
            </MenuItem>
          ))
        }
      </Menu>
    </div>
  );
}

