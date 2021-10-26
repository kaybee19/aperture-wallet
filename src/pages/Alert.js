import React from 'react';

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// Comps
import Wrapper from '../components/Wrapper';
import Alerts from '../components/Alerts';
import CreateAlert from '../components/CreateAlert';

const AlertButton = styled(Button)({
    borderRadius: '8px',
    border: '1px solid #F7F7FF',
    justifyContent: 'flex-start',
    padding: '0.25rem 0.5rem',
    color: 'black',
    fontWeight: 500,
    backgroundColor: 'white!important',
    '&:hover': {
    	boxShadow: '0 2px 2.5px 1px rgb(0 0 0 / 1%)',
    	border: '1px solid #f0f0f2'
    }
});

export default function Alert() {

  const [alignment, setAlignment] = React.useState('all');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleChange = (event) => {
  	setAlignment(event.target.value);
  };

	return (
		<Grid sx={{ padding: '0 2rem', margin: 'auto', top: '-16px', left: '-16px', position: 'relative' }} container spacing={2}>
			<Grid item xs={12}>
				<Wrapper auto text='Alerts'>
		      <AlertButton className='header-button' onClick={handleClickOpen} sx={{float:'left'}}>
		        <Typography variant='overline'>New Alert</Typography>
		      </AlertButton>
		      <Dialog open={open} onClose={handleClose}>
		      	<CreateAlert />
		      </Dialog>
					<div className='toggleWrapper'>
				    <ToggleButtonGroup
				    	className='toggleGroup'
				      color="primary"
				      value={alignment}
				      exclusive
				      onChange={handleChange}
				    >
				      <ToggleButton value="all">All</ToggleButton>
				      <ToggleButton value="active">Active</ToggleButton>
				      <ToggleButton value="expired">Expired</ToggleButton>
				    </ToggleButtonGroup>
			    </div>
			    <Alerts />
				</Wrapper>
			</Grid>
		</Grid>
	);
};