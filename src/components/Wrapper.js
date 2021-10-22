import React from 'react';
import { styled } from '@mui/system';

// Material
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Container = styled(Paper)({
	width: 'calc(100% - 125px)',
	boxShadow: 'none',
	border: '1px solid #f0f0f2',
	margin: 'auto',
  padding: '1.5rem 2rem 2rem'
});


export default function Wrapper({children, ...props}) {

	return (
		<Container style={ props.auto && {width:'auto'} } elevation={4}>
			<Typography variant='h6'>{props.text}</Typography>
			<Box>
				{children}
			</Box>
		</Container>
	);
};
