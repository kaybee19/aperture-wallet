import React from 'react'

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default class PrivacySettings extends React.Component {

	render() {
		
		return (
			<Grid container>
				<Grid sx={{marginBottom:'1rem'}} item xs={12}>
					<Typography variant='overline' sx={{fontWeight: 500, color:'#668A99'}}>App usage</Typography>
					<div className='flex' style={{justifyContent: 'space-between'}}>
						<span style={{maxWidth:600}}>
							<Typography sx={{fontSize:13}} variant='body2'>Improve our app experience by sharing anonymous statistics about how you use Aperture Finance.</Typography>
							<Typography sx={{fontSize:13}} variant='body2'>We will not associate any of this to you and your personal data will not be sent to us.</Typography>
						</span>
						<Switch sx={{marginLeft:'1rem'}} color='secondary' defaultChecked />
					</div>
				</Grid>
				<Grid sx={{marginBottom:'1rem'}} item xs={12}>
					<Typography variant='overline' sx={{fontWeight: 500, color:'#668A99'}}>Support</Typography>
					<div className='flex' style={{justifyContent: 'space-between'}}>
						<span style={{maxWidth:600}}>
							<Typography sx={{fontSize:13}} variant='body2'>We use the chat for easy communication with our DeFi users.</Typography>
							<Typography sx={{fontSize:13}} variant='body2'>To speak with a friendly Aperture Finance team member, please activate the support chat here.</Typography>
						</span>
						<Switch sx={{marginLeft:'1rem'}} color='secondary' defaultChecked />
					</div>
				</Grid>
			</Grid>
		)
	}
}