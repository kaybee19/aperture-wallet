import * as React from 'react';

// Material
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';

// Icons
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import { usd, eur, cny, inr, cad, gbp, jpy, rub, aud } from '../../assets/images';

export default function Currency() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const currency = [
    { icon: usd, code: 'usd' },
    { icon: eur, code: 'eur' },
    { icon: cny, code: 'cny' },
    { icon: inr, code: 'inr' },
    { icon: cad, code: 'cad' },
    { icon: gbp, code: 'gbp' },
    { icon: jpy, code: 'jpy' },
    { icon: rub, code: 'rub' },
    { icon: aud, code: 'aud' },
  ];

  return (
    <div>
      <Button
        id="currency-btn"
        className='header-button'
        aria-controls="currency-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={currency[0].icon} width='20' alt="currency icon" />
        <Typography variant='overline'>{currency[0].code}</Typography>
      </Button>
      <Menu
        id="currency-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'currency-btn',
        }}
      >
      	<Grid container justifyContent='space-evenly'>
      		
        {
          currency.map((cur, i) => (
            <Grid item xs={12} md={3} key={i} onClick={handleClose} className='currency-btn'>
              <img src={cur.icon} width='20' alt='currency icon' />
              <Typography sx={{ marginLeft: 1 }} variant='overline'>{cur.code}</Typography>
            </Grid>
          ))
        }
      	</Grid>
      </Menu>
    </div>
  );
}

