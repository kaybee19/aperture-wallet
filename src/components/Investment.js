import React from 'react';

// Material
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import TablePagination from '@mui/material/TablePagination';

// Icons
import UpwardIcon from '@mui/icons-material/ArrowUpward';
import KeyboardDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowDown from '@mui/icons-material/ArrowDropDown';
import DownwardIcon from '@mui/icons-material/ArrowDownward';
import { ethIcon, yfiIcon, avaIcon, binanceIcon, polygonIcon, daiIcon, btcIcon, tetherIcon } from '../assets/images'

// Comps
import Search from './layout/Search';
import Badge from './layout/Badge';
import AccordionDet from './AccordionDet';


const Container = styled('div')({
	margin: '1.5rem 0 0',
	'& .MuiTablePagination-selectLabel, .MuiTablePagination-input': {
		display: 'none'
	}
});

const Wrapper = styled('div')({
	display: 'flex',
	width: '100%',
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
		width: '125px',
	},
	'&:last-child': {
		textAlign: 'end',
		marginRight: '2rem',
	},
	'& .percentClass': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		fontWeight: 500
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
						<Typography className='percentClass' variant='body2'>
							${	props.liquidity.toLocaleString() }
						</Typography>
					</Flex>
					<Flex>
						<Typography className='percentClass' sx={{ fontWeight: 'bold' }} variant='body2'>
							{props.percent}% (1y)
						</Typography>
					</Flex>
					<div>
						<KeyboardDown sx={{paddingTop: '.25rem', color:'#657793'}} />
					</div>
				</WrapperBox>
			</Wrapper>
			</AccordionSum>
			<AccordionDet invest />
		</AccordionBox>
	)
}

export default function Investment() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

	const assets = [
		{ img: avaIcon, backImg: binanceIcon, token: 'AVA', asset: 'AVA/BNB', assetType: 'Ethereum', liquidity: 2012875178, value: 22000, percent: .25 },
		{ img: yfiIcon, backImg: ethIcon, token: 'YFI', asset: 'YFI/ETH', assetType: 'Ethereum', liquidity: 1526781091, value: 22000, percent: .16 },
		{ img: ethIcon, backImg: daiIcon, token: 'ETH', asset: 'ETH/DAI', assetType: 'Ethereum', liquidity: 915273091, value: 35100, percent: .14 },
		{ img: tetherIcon, backImg: ethIcon, token: 'USDT', asset: 'USDT/ETH', assetType: 'Solana', liquidity: 761829012, value: 42000, percent: .16 },
		{ img: btcIcon, backImg: ethIcon, badge: true, token: 'BTC', asset: 'Δ-neutral-mQQQ', assetType: 'Polygon', liquidity: 701928321, value: 836866944, percent: .63 },
		{ img: ethIcon, backImg: btcIcon, badge: true, token: 'ETH', asset: 'Δ-neutral-mHOOD', assetType: 'Binance Smart Chain', liquidity: 673890218, value: 20000, percent: .29 },
		{ img: binanceIcon, backImg: daiIcon, token: 'BNB', asset: 'BNB/DAI', assetType: 'Ethereum', liquidity: 621829031, value: 35100, percent: .54 },
		{ img: btcIcon, backImg: ethIcon, token: 'BTC', asset: 'mcBTC', assetType: 'Polygon', liquidity: 581902129, value: 836866944, percent: .13 },
		{ img: polygonIcon, backImg: btcIcon, badge: true, token: 'MATIC', asset: 'Δ-neutral-mCOIN', assetType: 'Binance Smart Chain', liquidity: 542678254, value: 20000, percent: .41 },
		{ img: tetherIcon, backImg: ethIcon, token: 'USDT', asset: 'USDT/ETH', assetType: 'Solana', liquidity: 498301923, value: 42000, percent: .35 },
	];

	return (
		<Container>
			<Box sx={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Search invest />
		    <TablePagination
		      component="div"
		      count={100}
		      page={page}
		      onPageChange={handleChangePage}
		      rowsPerPage={rowsPerPage}
		      onRowsPerPageChange={handleChangeRowsPerPage}
		    />
			</Box>
			<Grid sx={{borderBottom: '1px solid #F2F0FF'}} container>
				<Grid item xs={12} md={5}><Typography sx={{marginLeft: '6rem', fontWeight: 600}} variant='overline'>Pools</Typography></Grid>
				<Grid item xs={12} md={3}><Typography sx={{marginLeft: '2.5rem', fontWeight: 600}} variant='overline'>Liquidity</Typography></Grid>
				<Grid item xs={12} md={3}><Typography sx={{marginLeft: '3.5rem', fontWeight: 600}} variant='overline'>APR</Typography></Grid>
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
						liquidity={ass.liquidity}
						value={ass.value}
						percent={ass.percent}
					/> )
				)
			}
		</Container>
	);
};