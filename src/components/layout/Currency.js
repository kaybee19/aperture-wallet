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
    { icon: usd, code: 'usd', full: 'US Dollar' },
    { icon: eur, code: 'eur', full: 'Euro' },
    { icon: cny, code: 'cny', full: 'Chinese Yuan' },
    { icon: inr, code: 'inr', full: 'Indian Rupee' },
    { icon: cad, code: 'cad', full: 'Canadian Dollar' },
    { icon: gbp, code: 'gbp', full: 'British Pound' },
    { icon: jpy, code: 'jpy', full: 'Japanese Yen' },
    { icon: rub, code: 'rub', full: 'Russian Ruble' },
    { icon: aud, code: 'aud', full: 'Australian Dollar' },
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
        <DownIcon />
      </Button>
      <Menu
        id="currency-menu"
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
          'aria-labelledby': 'currency-btn',
        }}
      >
      	<div>
        {
          currency.map((cur, i) => (
            <Grid item xs={12} key={i} onClick={handleClose} className='currency-btn'>
              <img src={cur.icon} width='20' alt='currency icon' />
              <Typography sx={{ margin: '0 .5rem' }} variant='overline'>{cur.code}</Typography>
              <Typography sx={{ margin: '0 .5rem', fontWeight: 500 }} variant='overline'>{cur.full}</Typography>
            </Grid>
          ))
        }
      	</div>
      </Menu>
    </div>
  );
}

