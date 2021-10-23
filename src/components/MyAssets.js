import React from 'react';

// Material
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Icons
import UpwardIcon from '@mui/icons-material/ArrowUpward';
import DownwardIcon from '@mui/icons-material/ArrowDownward';
import { ethIcon, yfiIcon, daiIcon, btcIcon, tetherIcon } from '../assets/images'

// Comps
import Badge from './layout/Badge';

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
  	backgroundColor: '#f0f0f2',
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
	minWidth: '100px',
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
					<Typography sx={{fontWeight: 500}} variant='body2'>${props.value.toLocaleString()}</Typography>
					<Typography className='percentClass' sx={{color: props.percent > 0 ? '#50af94' : '#FB4D3D'}} variant='body2'>
						{	props.percent > 0 ? <UpwardIcon sx={{fontSize: 12, marginRight: .25}} /> : <DownwardIcon sx={{fontSize: 12, marginRight: .25}} /> }
						( {props.percent}% )
					</Typography>
				</Flex>
			</WrapperBox>
		</Wrapper>
	)
}

export default function MyAssets() {

	const assets = [
		{ img: ethIcon, backImg: btcIcon, badge: true, token: 'ETH', asset: 'Δ-neutral-mSQ', assetType: 'Binance Smart Chain', investment: 10000, value: 20000, percent: 100 },
		{ img: ethIcon, backImg: daiIcon, token: 'ETH', asset: 'DAI/ETH', assetType: 'Ethereum', investment: 25000, value: 35100, percent: 40 },
		{ img: tetherIcon, backImg: ethIcon, token: 'USDT', asset: 'USDT/ETH', assetType: 'Solana', investment: 37500, value: 42000, percent: 15 },
		{ img: btcIcon, backImg: ethIcon, badge: true, token: 'BTC', asset: 'Δ-neutral-mSPY', assetType: 'Binance Smart Chain', investment: 21000, value: 20940, percent: -5 },
		{ img: yfiIcon, backImg: ethIcon, token: 'YFI', asset: 'YFI/ETH', assetType: 'Ethereum', investment: 25700, value: 22000, percent: -10 },
	]

	return (
		<Container>
			<div>
				
			</div>
			{
				assets.map((ass, i) => (
					<AssetContainer
						img={ass.img}
						badge={ass.badge}
						backImg={ass.backImg}
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