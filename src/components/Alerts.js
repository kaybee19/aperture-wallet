import React from 'react';

// Material
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
});

const Wrapper = styled('div')({
	display: 'flex',
	width: '100%',
	alignItems: 'flex-start',
	padding: '1rem 0 0',
	top: 0,
  justifyContent: 'space-evenly',
  '&:hover': {
  	borderRadius: 8,
  	cursor: 'pointer',
  	transition: '.25s',
  	position: 'relative',
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

const Body = styled('div')({
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

const AlertButton = styled(Button)({
  borderRadius: '8px',
  border: '1px solid #F7F7FF',
  justifyContent: 'flex-start',
  padding: '0.25rem 0.5rem',
  color: '#FB4D3D',
  fontWeight: 500,
  backgroundColor: 'white!important',
  '&:hover': {
  	border: '1px solid #FB4D3D'
  },
  '&.expired': {
  	paddingLeft: 0,
  	paddingRight: 0,
  	border: 0,
  	color: '#668A99',
  	'& span': {
  		fontWeight: 600
  	}
  }
});

const AssetContainer = (props) => {
	return (
    <Body>
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
						<Typography sx={{whiteSpace:'pre'}} className='percentClass' variant='body2'>
							{props.percent > 0 ? 'Sell' : 'Buy'} <span style={{color:'#8b8b8c'}}> @{props.trade}</span>
						</Typography>
						<Typography sx={{fontSize: '12px!important', color: '#657793'}} variant='body2'>${props.value.toLocaleString()}</Typography>
					</Flex>
					<Flex>
						<Typography className='percentClass' sx={{ color: props.percent > 0 ? '#50af94' : '#FB4D3D', fontWeight: 'bold' }} variant='body2'>
							{	props.percent > 0 ? <UpwardIcon sx={{fontSize: 14, marginRight: .25}} /> : <DownwardIcon sx={{fontSize: 14, marginRight: .25}} /> }
							( {props.percent}% )
						</Typography>
					</Flex>
					<Flex>
						<Typography className='percentClass' sx={{ fontWeight: 'bold' }} variant='body2'>
							${props.percent > 0 ? (props.value+5000).toLocaleString() : (props.value-5000).toLocaleString()}
						</Typography>
					</Flex>
					<div>
			      <AlertButton className={`${props.status === 'expired' && 'expired'} header-button`} sx={{float:'left'}}>
			        <Typography variant='overline'>{props.status === 'expired' ? 'Expired' : 'Cancel'}</Typography>
			      </AlertButton>
					</div>
				</WrapperBox>
			</Wrapper>
			</AccordionSum>
		</Body>
	)
}

export default function Alerts() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

	const alertMockup = [
		{ img: ethIcon, status: 'active', backImg: btcIcon, badge: true, token: 'ETH', asset: 'Δ-neutral-mSQ', assetType: 'Terra', trade: 1.721, value: 22000, percent: -25 },
		{ img: ethIcon, status: 'active', backImg: daiIcon, token: 'ETH', asset: 'ETH/DAI', assetType: 'Ethereum', trade: 3.091, value: 35100, percent: 14 },
		{ img: polygonIcon, status: 'active', backImg: btcIcon, badge: true, token: 'MATIC', asset: 'Δ-neutral-mCOIN', assetType: 'Terra', trade: 1.526, value: 22000, percent: 16 },
		{ img: btcIcon, status: 'active', backImg: ethIcon, badge: true, token: 'BTC', asset: 'Δ-neutral-mQQQ', assetType: 'Terra', trade: 0.719, value: 37500, percent: 63 },
		{ img: tetherIcon, status: 'expired', backImg: ethIcon, token: 'USDT', asset: 'USDT/ETH', assetType: 'Solana', trade: 7.618, value: 42000, percent: 26 },
		{ img: ethIcon, status: 'expired', backImg: btcIcon, badge: true, token: 'ETH', asset: 'Δ-neutral-mHOOD', assetType: 'Terra', trade: 6.738, value: 20000, percent: -29 },
	];

	return (
		<Container>
			<Grid sx={{borderBottom: '1px solid #F2F0FF'}} container>
				<Grid item xs={12} md={4}><Typography sx={{marginLeft: '6rem', fontWeight: 600}} variant='overline'>Asset</Typography></Grid>
				<Grid item xs={12} md={2}><Typography sx={{marginLeft: '1rem', fontWeight: 600}} variant='overline'>Alert</Typography></Grid>
				<Grid item xs={12} md={3}><Typography sx={{marginLeft: '3.75rem', fontWeight: 600}} variant='overline'>Profit</Typography></Grid>
				<Grid item xs={12} md={2}><Typography sx={{marginLeft: '1rem', fontWeight: 600}} variant='overline'>TVL</Typography></Grid>
			</Grid>
			{
				alertMockup.map((ass, i) => (
					<AssetContainer
						img={ass.img}
						key={i}
						i={i}
						badge={ass.badge}
						status={ass.status}
						backImg={ass.backImg}
						asset={ass.asset}
						assetType={ass.assetType}
						trade={ass.trade}
						value={ass.value}
						percent={ass.percent}
					/> )
				)
			}
	    <TablePagination
	    	sx={{marginTop:'2rem'}}
	      component="div"
	      count={10}
	      page={page}
	      onPageChange={handleChangePage}
	      rowsPerPage={rowsPerPage}
	      onRowsPerPageChange={handleChangeRowsPerPage}
	    />
		</Container>
	);
};