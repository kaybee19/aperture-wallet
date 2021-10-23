import React from 'react'
import { styled } from '@mui/system';

// Material
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterDiv = styled('footer')({
	padding: '2rem',
	display: 'flex',
	justifyContent: 'space-between',
	color: '#8b8b8c'
})

const HR = styled('hr')({
	border: 0,
	marginTop: '2rem',
	borderTop: '1px solid #f0f0f2',
})

export default function Footer() {

	return (
		<div>
			<HR />
			<FooterDiv>
				<div style={{flexDirection:'column', display:'flex'}}>
					<Typography sx={{cursor: 'pointer', fontWeight: 500}} variant='caption'>Privacy Policy</Typography>
					<Typography sx={{cursor: 'pointer', fontWeight: 500}} variant='caption'>Terms & Conditions</Typography>
				</div>
				<a className='linkClass' href="mailto:contact@aperture.finance"><Typography sx={{cursor: 'pointer', fontWeight: 500}} variant='caption'>Contact Us</Typography></a>
				<Typography sx={{fontWeight: 500}} variant='caption'>© Aperture Finance 2021</Typography>
			</FooterDiv>
		</div>
	)
}
