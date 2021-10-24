import React from 'react';

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Comps
import Wrapper from '../components/Wrapper';
import ProfileSettings from '../components/ProfileSettings';
import AppSettings from '../components/AppSettings';
import PrivacySettings from '../components/PrivacySettings';

const Body = styled('div')({
	marginTop:'2rem',
	paddingBottom: '1rem',
	'& hr': {
		border: 0,
		borderTop: '1px solid #F2F0FF'
	}
});


const Section = ({children, ...props}) => {
	return (
		<Body>
			<Typography variant='body1' sx={{fontWeight:500, color:'#8b8b8c'}}>{props.title}</Typography>
			<hr />
			{children}
		</Body>
	)
}

export default function Settings() {

	return (
		<div>
			<Grid sx={{ padding: '0 2rem', margin: 'auto', top: '-16px', left: '-16px', position: 'relative' }} container spacing={2}>
				<Grid item xs={12}>
					<Wrapper auto text='Settings'>
						<Grid xs={8}>
							<Section title='Profile Settings'>
								<ProfileSettings />
							</Section>
							<Section title='App Settings'>
								<AppSettings />
							</Section>
							<Section title='Privacy'>
								<PrivacySettings />
							</Section>
						</Grid>
					</Wrapper>
				</Grid>
			</Grid>
		</div>
	);
};