import React from 'react'

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default class AppSettings extends React.Component {

	render() {
		
		return (
			<Grid container>
				<Grid item xs={5}>
	        <Typography sx={{ fontWeight: 500, color: '#668A99', paddingBottom: '.75rem' }} variant='subtitle2'>Slippage Tolerance</Typography>
						<Grid container>
	          {
	            [2,3,4].map((val, i) => (
	              <Grid key={i} className={`${i === 1 && 'active'} settingSlippage`}>
	                <Typography sx={{ fontWeight: 500 }} variant='body1'>{val}%</Typography>
	              </Grid>
	            ))
	          }
	        </Grid>
				</Grid>
				<Grid item xs={5}>
					<Typography variant='overline' sx={{fontWeight: 500, color:'#668A99'}}>Allowance</Typography>
					<div className='flex' style={{justifyContent: 'flex-start', marginTop: '.5rem'}}>
						<Typography variant='body2'>Infinite Allowance</Typography>
						<Switch {...label} color="secondary" />
					</div>
				</Grid>
			</Grid>
		)
	}
}