import React from 'react';
import { useLocation, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import user from '../../assets/images/user.png'

// Material
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fab from '@mui/material/Fab';

// Icons
import InvestIcon from '@mui/icons-material/AccountBalanceWallet';
import PerformanceIcon from '@mui/icons-material/CompareArrows';
import NewsIcon from '@mui/icons-material/ChromeReaderMode';
import AlarmIcon from '@mui/icons-material/NotificationsNone';
import GovernIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import RedeemIcon from '@mui/icons-material/Redeem';
import PersonIcon from '@mui/icons-material/PersonOutline';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

export default function Navbar() {

  let location = useLocation();
  let getPage = location.pathname.substring(1);

	const icons = [
		{ img: <InvestIcon />, text: 'invest' },
		{ img: <PerformanceIcon />, text: 'performance' },
		{ img: <NewsIcon />, text: 'news' },
		{ img: <AlarmIcon />, text: 'alarm' },
		{ img: <GovernIcon />, text: 'governance' },
	]

	return (
		<div className='nav-container'>
			<nav className='nav-body'>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<img src={logo} className='nav-logo' alt='aperture logo' width='33' />
					<Typography sx={{ fontWeight: 'bold', marginLeft: '1rem', fontSize: '18px' }} variant='body1'>Aperture Finance</Typography>
{/*					<Fab className='nav-fab' size="small">
						<ChevronLeft />
					</Fab>*/}
				</Box>
				<Box className='nav-user'>
					<Paper sx={{backgroundImage: `url(${user})`}} className='user-card' elevation={0}>
						{/*<Typography variant='h4'>J</Typography>*/}
					</Paper>
					<Paper className='user-details' elevation={0}>					
						<Typography sx={{ fontWeight: 'bold' }} variant='caption'>John Doe</Typography>
						<hr className='nav-hr' />
						<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Typography sx={{ fontSize: 10, color: '#668A99' }} variant='caption'>0x49ef...6dc8</Typography>
							<Typography sx={{ fontSize: 10, color: '#668A99' }} variant='caption'>Lv. 1</Typography>
						</Box>
					</Paper>
				</Box>
				<Box className='nav-util'>
					<Paper elevation={0} className='uitl-card'><PersonIcon className='util-icon' /> Profile</Paper>
					<Paper elevation={0} className='uitl-card'><RedeemIcon className='util-icon' />Rewards</Paper>
				</Box>
				<Box className='nav-items'>
					{
						icons.map((icon, i) => (
							<Link to={icon.text} className='linkClass'>
								<Paper elevation={0} className={`${getPage === icon.text && 'active'} item`}>
									<span className='item-icon'>{icon.img}</span>
									<Typography sx={{ color: '#668A99', fontWeight: '500', textTransform: 'capitalize' }} variant='body2'>{icon.text}</Typography>
								</Paper>
							</Link>
						))
					}
				</Box>
				<hr />
				<Paper elevation={0} className='item nav-settings'>
					<span className='item-icon'><SettingsIcon /></span>
					<Typography sx={{ color: '#668A99', fontWeight: '500' }} variant='body2'>Settings</Typography>
				</Paper>
			</nav>
		</div>
	);
};

// 