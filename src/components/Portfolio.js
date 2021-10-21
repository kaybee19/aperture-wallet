import React from 'react';

// Material
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

// Icons
import UpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowDown from '@mui/icons-material/ArrowDropDown';
import DownwardIcon from '@mui/icons-material/ArrowDownward';
import { ethIcon, yfiIcon, daiIcon, btcIcon, tetherIcon } from '../assets/images'

// Comps
import AccordionDet from './AccordionDet';
import Badge from './layout/Badge';

const Container = styled('div')({
	margin: '1.5rem 0 0'
});

const Wrapper = styled('div')({
	display: 'flex',
	width: '100%',
	alignItems: 'flex-start',
	padding: '1rem 0 0',
	top: 0,
  justifyContent: 'space-evenly',
  '&:hover': {
  	backgroundColor: '#f3f6fb',
  	borderRadius: 8,
  	cursor: 'pointer',
  	transition: '.25s',
  	position: 'relative',
  	'& > *': {
  		borderBottom: '1px solid transparent',
  	}
  }
});

const WrapperBox = styled(Box)({
	display: 'flex',
	borderBottom: '1px solid #F2F0FF',
	width: 'calc(100% - 60px)',
	paddingBottom: '.75rem',
	'&:last-child': {
		// borderBottom: '1px solid #F2F0FF',
	}
});

const AccordionBox = styled(Accordion)({
	boxShadow: 'none!important',
	'&:before': {
		backgroundColor: 'transparent!important',
	},
	'&.Mui-expanded': {
		margin: '0px 0px 16px!important'
	},
	'& .MuiCollapse-root': {
		backgroundColor: '#f3f6fb',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    margin: '0 1rem',
	}
});
const AccordionSum = styled(AccordionSummary)({
	'& .MuiAccordionSummary-content': {
		margin: 0,
		'&.Mui-expanded': {
			margin: '0!important'
		}
	}
});

const ForeImg = styled('img')({
	position: 'relative',
	zIndex: 2,
	borderRadius: '50%',
	border: '1px solid white',
	backgroundColor: 'white',
	boxShadow: '0 2px 5px 1px rgba(0,0,0,.25)'
});

const BgImage = styled('img')({
	position: 'absolute',
	zIndex: 1,
	left: 10,
	opacity: .75
});

const Flex = styled('div')({
	display: 'flex',
	margin: 'auto',
	minWidth: '80px',
	flexDirection: 'column',
	'&:first-child': {
		marginLeft: '2rem',
	},
	'&:last-child': {
		textAlign: 'end',
		marginRight: '2rem',
	},
	'& .percentClass': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		fontWeight: 600
	}
});

const AssetContainer = (props) => {
	return (
    <AccordionBox>
	    <AccordionSum
	      // expandIcon={<ExpandMoreIcon />}
	      aria-controls={`panel${props.i}-content`}
	    >
			<Wrapper>
				<div style={{ position: 'relative' }}>
					<BgImage width='33' src={props.backImg} alt="asset" />
					<ForeImg width='30' src={props.img} alt="asset" />
				</div>
				<WrapperBox>
					<Flex>
						<Typography sx={{ position: 'relative', width: 'fit-content', fontWeight: 500}} variant='body2'>
							{props.asset}
							{props.badge && <Badge />}
						</Typography>
						<Typography sx={{fontSize: '11px!important', color: '#657793'}} variant='body2'>{props.assetType}</Typography>
					</Flex>
					<Flex>
						<Typography className='percentClass' sx={{ fontWeight: 'bold', color: props.tvl > 0 ? '#50af94' : '#FB4D3D' }} variant='body2'>
							{	props.tvl > 0 ? <UpwardIcon sx={{fontSize: 14, marginRight: .25}} /> : <DownwardIcon sx={{fontSize: 14, marginRight: .25}} /> }
							( {props.tvl}% )
						</Typography>
					</Flex>
					<Flex>
						<Typography className='percentClass' sx={{ fontWeight: 'bold' }} variant='body2'>
							{props.percent}%
						</Typography>
					</Flex>
					<div>
						<KeyboardDown sx={{paddingTop: '.25rem', color:'#657793'}} />
					</div>
				</WrapperBox>
			</Wrapper>
			</AccordionSum>
			<AccordionDet />
		</AccordionBox>
	)
}

export default function Portfolio() {

	const assets = [
		{ img: ethIcon, backImg: btcIcon, badge: true, token: 'ETH', asset: 'whETH', assetType: 'Terra', tvl: 10, value: 20000, percent: 100 },
		{ img: ethIcon, backImg: daiIcon, token: 'ETH', asset: 'DAI/ETH', assetType: 'Sushiswap', tvl: 25, value: 35100, percent: 40 },
		{ img: tetherIcon, backImg: ethIcon, token: 'USDT', asset: 'USDT/ETH', assetType: 'Uniswap V2', tvl: 37, value: 42000, percent: 15 },
		{ img: btcIcon, backImg: ethIcon, badge: true, token: 'BTC', asset: 'stBTC', assetType: 'Terra', tvl: -11, value: 20940, percent: -5 },
		{ img: yfiIcon, backImg: ethIcon, token: 'YFI', asset: 'YFI/ETH', assetType: 'Sushiswap', tvl: -15, value: 22000, percent: -10 },
	]

	return (
		<Container>
			<Grid sx={{borderBottom: '1px solid #F2F0FF'}} container>
				<Grid item={12} md={1}></Grid>
				<Grid item xs={12} md={3}><Typography sx={{marginLeft: '2.5rem', fontWeight: 600}} variant='overline'>Asset</Typography></Grid>
				<Grid item xs={12} md={3}><Typography sx={{marginLeft: '4.5rem', fontWeight: 600}} variant='overline'>TVL</Typography></Grid>
				<Grid item xs={12} md={3}><Typography sx={{marginLeft: '5.5rem', fontWeight: 600}} variant='overline'>APR</Typography></Grid>
			</Grid>
			{
				assets.map((ass, i) => (
					<AssetContainer
						img={ass.img}
						key={i}
						i={i}
						badge={ass.badge}
						backImg={ass.backImg}
						asset={ass.asset}
						assetType={ass.assetType}
						tvl={ass.tvl}
						value={ass.value}
						percent={ass.percent}
					/> )
				)
			}
		</Container>
	);
};