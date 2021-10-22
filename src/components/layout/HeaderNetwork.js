import * as React from 'react';

// Material
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Icons
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import { fortmatic, keystone, ledger, metamask, opera, xdefi, ethIcon, avaIcon, fantomIcon, binanceIcon, polygonIcon } from '../../assets/images';


const MyButton = styled(Button)({
  padding: '1rem',
  borderRadius: 8,
  textTransform: 'capitalize',
  boxShadow: 'none!important',
  borderColor: '#917EFB!important',
  backgroundColor: 'white!important',
  color: '#7C65FA',
  maxHeight: '48px',
  '&:hover': {
    borderColor: '#5234F9!important',
    backgroundColor: '#f6f8fb!important',
    transition: .25
  }
});

const Icons = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '1rem',
  margin: '.5rem',
  borderRadius: 8,
  border: '1px solid #F2F0FF',
  '&:hover': {
    backgroundColor: '#f6f8fb',
    cursor: 'pointer',

  }
 });

export default function HeaderNetwork() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchor, setAnchor] = React.useState(null);

  const open = Boolean(anchorEl);
  const dialog = Boolean(anchor);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpen = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchor(null);
  };

  const icons = [
    { icon: avaIcon, name: 'Avalanche' },
    { icon: binanceIcon, name: 'Binance' },
    { icon: fantomIcon, name: 'Fantom' },
    { icon: polygonIcon, name: 'Polygon' },
    { icon: ethIcon, name: 'Ethereum' },
  ]

  const networks = [
    {icon: fortmatic, name: 'Fortmatic'},
    {icon: keystone, name: 'Keystone'},
    {icon: ledger, name: 'Ledger'},
    {icon: metamask, name: 'MetaMask'},
    {icon: opera, name: 'Opera'},
    {icon: xdefi, name: 'XDEFI Wallet'},
  ];

  return (
    <div>
      <MyButton
        size='large'
        variant="outlined"
        id="network-btn"
        className='header-button'
        aria-controls="network-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Connect wallet
      </MyButton>
      <Menu
        id="network-menu"
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
          'aria-labelledby': 'network-btn',
        }}
      >
        {
          icons.map((icon, i) => (
            <MenuItem key={i} onClick={handleOpen} className='network-btn'>
              <img src={icon.icon} width='20' alt='network icon' />
              <Typography sx={{ marginLeft: 1 }} variant='body2'>{icon.name}</Typography>
            </MenuItem>
          ))
        }
      </Menu>
      <Dialog
        open={dialog}
        onClose={handleClose}
      >
        <DialogTitle>
          {"Select a Wallet to Connect"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ margin: '2rem 1rem' }}>
            <Grid container spacing={2} justifyContent='space-around'>
              {
                networks.map((icon, i) => (
                  <Icons onClick={handleClose} item xs={5}>
                    <img style={{ marginRight: '1rem' }} src={icon.icon} width='33' alt="icon" />
                    <Typography variant='body1' sx={{fontWeight: 500}}>{icon.name}</Typography>
                  </Icons>
                ))
              }
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

