import React from 'react'

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Toggle = styled('div')({
	'& .Mui-checked': {
		color: '#16141F'
	}
});

const RadioGroupComp = styled(RadioGroup)({
	flexWrap: 'nowrap',
});

export default class ProfileSettings extends React.Component {

	render() {
		
		return (
			<Grid container>
				<Grid item xs={5}>
					<Typography variant='overline' sx={{fontWeight: 500, color:'#668A99'}}>Theme</Typography>
					<Toggle>
						<Typography variant='caption'>Light</Typography>
						<Switch {...label} color="default" />
						<Typography variant='caption'>Dark</Typography>
					</Toggle>
				</Grid>
				<Grid item xs={5}>
					<Typography variant='overline' sx={{fontWeight: 500, color:'#668A99'}}>Language</Typography>
		      <RadioGroupComp row defaultValue="english">
		        <FormControlLabel value="english" control={<Radio color="secondary" size="small" />} label="English" />
		        <FormControlLabel value="chinese" control={<Radio color="secondary" size="small" />} label="Chinese" />
		      </RadioGroupComp>
				</Grid>
			</Grid>
		)
	}
}