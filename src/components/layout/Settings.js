import * as React from 'react';
import { styled } from '@mui/system';

// Material
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';

// Icons
import SettingsIcon from '@mui/icons-material/Settings';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  paddingTop: '.75rem' 
});

export default function Settings() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="settings-btn"
        className='header-button'
        aria-controls="settings-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SettingsIcon />
      </Button>
      <Menu
        id="settings-menu"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'settings-btn',
        }}
      >
        <Typography sx={{ fontWeight: 500, color: '#668A99', paddingBottom: '.75rem' }} variant='subtitle2'>Slippage Tolerance</Typography>
        <Grid container>
          {
            [2,3,4].map((val, i) => (
              <Grid key={i} className={`${i === 1 && 'active'} settings-btn`}>
                <Typography sx={{ fontWeight: 500 }} variant='body1'>{val}%</Typography>
              </Grid>
            ))
          }
        </Grid>
        <hr />
        <Wrapper>
          <Typography sx={{ fontWeight: 500, color: '#668A99' }} variant='subtitle2'>Theme</Typography>
          <Switch {...label} color="default" />
        </Wrapper>
      </Menu>
    </div>
  );
}

