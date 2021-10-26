import React from 'react'

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const DialogCont = styled(DialogContent)({
	display: 'flex',
	justifyContent: 'space-between',
	marginTop: '1rem',
	'& .MuiOutlinedInput-input': {
		padding: '12px 14px',
	},
	'& .Mui-focused fieldset': {
		outline: 'none!important',
		borderColor: 'rgba(0, 0, 0, 0.23)!important'
	},
  '& div:last-child .MuiFormControl-root': {
  	marginRight: '0rem',
  },
});

const AlertButton = styled(Button)({
  borderRadius: '8px',
  border: '1px solid #917EFB',
  justifyContent: 'flex-start',
  padding: '0.25rem 0.5rem',
  fontWeight: 500,
  color: '#674DFA',
  marginRight: '1rem',
  marginBottom: '1rem',
  backgroundColor: 'white!important',
  '&:hover': {
  	border: '1px solid #917EFB'
  },
  '&.expired': {
  	paddingLeft: 0,
  	paddingRight: 0,
  	border: 0,
  	color: '#917EFB',
  	'& span': {
  		fontWeight: 600
  	}
  }
});

export default function CreateAlert() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    // setCurrency(event.target.value);
  };

	return (
		<React.Fragment>
	    <DialogTitle>
	      Create New Alert
	    </DialogTitle>
	    <DialogCont>
	    	<div>
	    		<Typography variant='body2' sx={{fontWeight:500, color:'rgb(139, 139, 140)'}}>Alert Type</Typography>
		      <TextField
		        id="outlined-select-currency"
		        select
		        sx={{width: 125, margin:'1rem 1.5rem', marginLeft: 0}}
		        onChange={handleChange}
		      >
		        {['Buy', 'Sell'].map((option) => (
		          <MenuItem key={option} value={option}>
		            {option}
		          </MenuItem>
		        ))}
		      </TextField>
	    	</div>
	    	<div>
	    		<Typography variant='body2' sx={{fontWeight:500, color:'rgb(139, 139, 140)'}}>Asset</Typography>
		      <TextField
		        id="outlined-select-currency"
		        select
		        sx={{width: 125, margin:'1rem 1.5rem', marginLeft: 0}}
		        onChange={handleChange}
		      >
		        {['Δ-neutral-mSQ', 'DAI/ETH', 'SDT/ETH', 'Δ-neutral-mSPY', 'YFI/ETH'].map((option) => (
		          <MenuItem key={option} value={option}>
		            {option}
		          </MenuItem>
		        ))}
		      </TextField>
	    	</div>
	    	<div>
	    		<Typography variant='body2' sx={{fontWeight:500, color:'rgb(139, 139, 140)'}}>Value</Typography>
		      <TextField type="number" sx={{width: 125, margin:'1rem 1.5rem', marginLeft: 0}} variant="outlined" />
	    	</div>
	    </DialogCont>
      <DialogActions>
	      <AlertButton className='header-button' sx={{float:'left'}}>
	        <Typography variant='overline'>Create</Typography>
	      </AlertButton>
      </DialogActions>

		</React.Fragment>
	)
}
