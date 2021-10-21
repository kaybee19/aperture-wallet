import React from 'react';
import { styled } from '@mui/system';

// Material
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Container = styled(Paper)({
	width: 'calc(100% - 125px)',
	boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 5%), 0px 4px 5px 0px rgb(0 0 0 / 3.5%), 0px 1px 10px 0px rgb(0 0 0 / 3%)',
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
