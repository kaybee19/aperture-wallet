import React from 'react'

// Material
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTime from '@mui/icons-material/AccessTime';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const GridWrapper = styled(Grid)({
	minHeight: '425px',
	borderRadius: '8px',
	border: '1px solid #f0f0f2',
	overflow: 'clip',
	marginTop: '2rem',
	cursor: 'pointer',
	'& .flex': {
		alignItems: 'baseline',
		justifyContent: 'space-between'
	}
});

const Image = styled('img')({
	width: '100%',
	height: 'auto'
});

const text = [
	`Bitcoin futures ETFs have been notified by the SEC of no objection, which means that the world's largest capital market is officially open to cryptos, and the biggest regulatory risks have been eliminated in the short term, clearing the way for mainstream institutions to enter the market.`,
	`Under the influence of the temporary increase of the US debt ceiling, the high market risk appetite, and the endorsement of institutions entering the market, US debt and US dollar both fell. Although many central banks have released the news of bringing forward interest rate hikes, the high inflation pressure shows that the overall liquidity of the market is expected to remain at a high level for a long time.`,
	`The Federal Reserve is facing concerns about inflation risks and stagnant economic growth, but the Fed's tough attitude on interest rates and expectations of earlier debt reduction (at a time when prices are soaring and output is stagnant) point to stagflation. Under such circumstances, the demand for inflation-resistant assets such as Bitcoin has further increased.`,
	`At the same time, the SEC's approval of Bitcoin futures ETFs and the liberalization of crypto transactions in Russia, India, and other countries indicate that crypto investment is officially accepted by major capital markets under the background of gradual improvement of compliance. On this basis, some highly regulated institutional investors (such as pension funds) have also begun to consider participating in crypto-related transactions.`
];

function NewsDialog(data) {

	let { props } = data;

	return(
		<div>
	    <DialogTitle>
	      {props.header}
	    </DialogTitle>
	    <Image src={props.img} alt="news image" />
	    <DialogContent>
      	<div style={{marginBottom: '1rem'}}><Typography variant='overline'>By {props.by}</Typography></div>
      	{text.map((t,i) => <Typography sx={{color:'rgb(118, 128, 143)'}} key={i} variant='body2'>{t}<br/><br/></Typography>)}
	    </DialogContent>
	  </div>
	)
}

export default function Story(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


	return (
		<Grid item xs={12} md={4}>
			<GridWrapper onClick={handleClickOpen}>
				<Image src={props.img} alt="news image" />
				<Box style={{padding: '.75rem'}}>
					<Typography sx={{fontWeight:500, fontSize:'1.15rem', paddingBottom:'.5rem'}} variant='body1'>{props.header}</Typography>
					<Typography sx={{color:'rgb(118, 128, 143)', minHeight: '75px', fontSize: '13px'}} variant='body2'>{props.body}</Typography>
					<span className='flex'><Typography sx={{ padding: '1rem 0 .5rem', fontSize: '.75rem', color:'rgb(118, 128, 143)', fontWeight:500 }} variant='body2'>By {props.by}</Typography><Typography variant='caption' sx={{marginRight:'1rem'}}>{props.hour} ago</Typography></span>
					{/*<AccessTime sx={{fontSize:'12px',marginRight:'4px',top:'1px',position:'relative'}} /><Typography variant='caption'>{props.min} mins</Typography>*/}
				</Box>
			</GridWrapper>
      <Dialog scroll='paper' fullWidth maxWidth='sm' open={open} onClose={handleClose}>
      	<NewsDialog props={props} />
      </Dialog>
		</Grid>
	)
}