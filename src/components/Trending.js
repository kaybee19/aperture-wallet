import React from 'react';

// Material
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Icons
import UpwardIcon from '@mui/icons-material/ArrowUpward';
import DownwardIcon from '@mui/icons-material/ArrowDownward';
import { ethIcon, yfiIcon, sushiIcon, uniIcon, daiIcon, btcIcon, tetherIcon } from '../assets/images'

const Container = styled('div')({
	margin: '1.5rem 0 0'
});

const Wrapper = styled('div')({
	display: 'flex',
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
  	top: '-5px',
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
	'&:last-child': {
		marginRight: 0,
		textAlign: 'end',
	},
	'& .percentClass': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		fontSize: '11px!important',
		fontWeight: 600
	}
});

const AssetContainer = (props) => {
	return (
		<Wrapper>
			<div style={{ position: 'relative' }}>
				<ForeImg width='33' src={props.img} alt="asset" />
			</div>
			<WrapperBox>
				<Flex>
					<Typography sx={{fontWeight: 500}} variant='body2'>{props.asset}</Typography>
					<Typography sx={{fontSize: '11px!important', color: '#657793'}} variant='body2'>{props.assetType}</Typography>
				</Flex>
				<Flex>
					<Typography sx={{fontWeight: 500}} variant='body1'>+{props.value.toLocaleString()}%</Typography>
					<Typography className='percentClass' sx={{color: '#50af94'}} variant='body2'>
						( +${props.investment.toLocaleString()} )
					</Typography>
				</Flex>
			</WrapperBox>
		</Wrapper>
	)
}

export default function MyAssets() {

	const assets = [
		{ img: sushiIcon, asset: 'MATIC/ETH', assetType: 'Binance', investment: 10128, value: 48.1, percent: 100 },
		{ img: uniIcon, asset: 'DAI/ETH', assetType: 'Ethereum', investment: 25129, value: 40.2, percent: 40 },
		{ img: tetherIcon, asset: 'USDT/ETH', assetType: 'Ethereum', investment: 37509, value: 36.2, percent: 15 },
		{ img: tetherIcon, asset: 'USDT/BTC', assetType: 'Polygon', investment: 21091, value: 31.8, percent: -5 },
		{ img: yfiIcon, asset: 'YFI/BTC', assetType: 'Bitcoin', investment: 25728, value: 27.7, percent: -10 },
	]

	return (
		<Container>
			<div>
				
			</div>
			{
				assets.map((ass, i) => (
					<AssetContainer
						img={ass.img}
						asset={ass.asset}
						assetType={ass.assetType}
						investment={ass.investment}
						value={ass.value}
						percent={ass.percent}
					/> )
				)
			}
		</Container>
	);
};