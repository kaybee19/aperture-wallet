import React from 'react';

// Material
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const Body = styled('div')({
  position: 'absolute',
  left: '0',
  right: '-40px',
  top: '-2px',
  display: 'flex',
  justifyContent: 'right',
  padding: '0px 4px',
  boxShadow: '0 2px 5px 1px rgba(0,0,0,.075)',
  borderRadius: '8px',
  marginLeft: 'auto',
  backgroundColor: '#EAC435',
  width: 'fit-content',
  color: 'white',
});

export default function Badge() {

	return (
		<Body>
			<Typography variant='caption' sx={{fontSize: '10px', fontWeight: '600'}}>earn+</Typography>
		</Body>
	);
};