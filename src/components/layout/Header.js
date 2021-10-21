import React from 'react';

// Material
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Icons
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SettingsIcon from '@mui/icons-material/Settings';

// Comps
import Gas from './Gas';
import Search from './Search';
import Settings from './Settings';
import Currency from './Currency';
import HeaderNetwork from './HeaderNetwork';

export default function Header() {

	return (
		<div className='header'>
			<HeaderNetwork />
			<span>
			<Search />
				<Currency />
				<Gas />
				<Settings />
			</span>
		</div>
	);
};
