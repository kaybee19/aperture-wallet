import * as React from 'react';

// Material
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';

// Icons
import GasIcon from '@mui/icons-material/LocalGasStation';

export default function Gas() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const gasType = [
    { type: 'standard', code: '63' },
    { type: 'fast', code: '70' },
    { type: 'instant', code: '77' },
  ];

  return (
    <div style={{ margin: '0 .75rem' }}>
      <Button
        id="gas-btn"
        className='header-button'
        aria-controls="gas-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <GasIcon fontSize='small' />
        <Typography variant='overline'>{gasType[0].code}</Typography>
      </Button>
      <Menu
        id="gas-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'gas-btn',
        }}
      >
      	<Typography sx={{ fontWeight: 500, color: '#668A99', padding: '.75rem' }} variant='caption'>Select A Gas Setting</Typography>
      	<Grid container justifyContent='space-evenly'>
        {
          gasType.map((cur, i) => (
            <Grid item xs={12} md={3} key={i} onClick={handleClose} className={`gas-btn ${i === 0 && 'active'}`}>
              <Typography sx={{ color: '#668A99', fontWeight: 600, textTransform: 'uppercase' }} variant='overline'>{cur.type}</Typography>
              <Typography sx={{ color: '#668A99' }} variant='caption'>({cur.code} Gwei)</Typography>
            </Grid>
          ))
        }
      	</Grid>
      </Menu>
    </div>
  );
}

