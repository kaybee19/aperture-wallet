import * as React from 'react';

// Material
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';

// Icons
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import GasIcon from '@mui/icons-material/LocalGasStation';
import BoltIcon from '@mui/icons-material/Bolt';

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
    { type: 'slow', code: '63' },
    { type: 'average', code: '70' },
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
        <DownIcon />
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
      	<Typography sx={{ fontWeight: 500, padding: '1rem 2rem 0rem' }} variant='body2'>Realtime Gas Prices</Typography>
        <div style={{marginTop: '1rem'}}>
          {
            gasType.map((cur, i) => (
              <Grid item xs={12} key={i} onClick={handleClose} className={`gas-btn ${i === 0 && 'active'}`}>
                <div>
                  <Typography sx={{ color: '#668A99', fontWeight: 600, textTransform: 'uppercase' }} variant='overline'>{cur.type} </Typography>
                  <Typography sx={{ color: '#668A99' }} variant='caption'>({cur.code} Gwei)</Typography>
                </div>
                <div>
                  {Array(i+1).fill().map((m) => <BoltIcon style={{ position: 'relative', fontSize: '20px', color: '#7C65FA'}} />)}
                </div>
              </Grid>
            ))
          }
        </div>
      </Menu>
    </div>
  );
}

