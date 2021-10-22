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
import { styled } from '@mui/system';

// Icons
import ArrowUp from '@mui/icons-material/ArrowDropUp';
import InvestIcon from '@mui/icons-material/AccountBalanceWallet';
import PerformanceIcon from '@mui/icons-material/CompareArrows';
import NewsIcon from '@mui/icons-material/ChromeReaderMode';
import AlarmIcon from '@mui/icons-material/NotificationsNone';
import GovernIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import RedeemIcon from '@mui/icons-material/Redeem';
import PersonIcon from '@mui/icons-material/PersonOutline';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

const PaperWrap = styled(Paper)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
});

const ArrowType = styled(Typography)({
  display: 'flex',
	alignItems: 'center'
});

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
					<PaperWrap className='user-details' elevation={0}>
						<div>
							<Typography sx={{ fontWeight: '500', fontSize: 10, color: '#668A99' }}>My Portfolio</Typography>
							<Typography sx={{ fontWeight: '500', color: '#16141F', marginTop: '10px' }} variant='h6'>$47,021</Typography>
						</div>
						<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
							<Typography sx={{ fontWeight: '500', fontSize: 10, color: '#668A99' }} variant='caption'>Profit</Typography>
							<ArrowType sx={{ color: '#16141F', fontWeight: '500'}} variant='caption'><ArrowUp sx={{ fontSize: '22px', color: '#50af94' }} />23.5%</ArrowType>
							<Typography sx={{ fontSize: 10, color: '#668A99' }} variant='caption'>0x49ef...6dc8</Typography>
						</Box>
					</PaperWrap>
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