import React from 'react';
import { useHistory } from "react-router-dom";

// Material UI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Icons
import { fortmatic, keystone, ledger, metamask, opera, xdefi } from '../assets/images';

const MyButton = styled(Button)({
	padding: '1rem',
	borderRadius: 8,
	marginTop: '1rem',
	backgroundColor: '#5234F9',
	textTransform: 'capitalize',
	'&:hover': {
		backgroundColor: '#674DFA',
		transition: .25
	}
});

 const Icons = styled(Grid)({
 	display: 'flex',
 	alignItems: 'center',
 	paddingBottom: '1rem',
 	margin: '.5rem 0',
 	'&:hover': {
 		cursor: 'pointer',
 		borderRadius: 8,
 		boxShadow: '0 2px 5px 1px rgba(0,0,0,.1)',
 	}
 });

export default function ConnectWallet() {
  const [open, setOpen] = React.useState(false);
	const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const icons = [
  	{icon: fortmatic, name: 'Fortmatic'},
  	{icon: keystone, name: 'Keystone'},
  	{icon: ledger, name: 'Ledger'},
  	{icon: metamask, name: 'MetaMask'},
  	{icon: opera, name: 'Opera'},
  	{icon: xdefi, name: 'XDEFI Wallet'},
  ];

  const setAuth = () => {
  	localStorage.setItem("auth", true);
		history.push("/invest");
  }

	return (
		<div>		
			<div onClick={handleClickOpen}>
				<MyButton size='large' variant="contained">Connect your wallet</MyButton>
			</div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {"Select a Wallet to Connect"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ margin: '2rem 1rem' }}>
          	<Grid container spacing={2}>
	            {
	            	icons.map((icon, i) => (
	            		<Icons item xs={6} onClick={setAuth}>
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
};
