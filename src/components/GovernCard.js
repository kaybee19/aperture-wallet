import React from 'react'

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

// Icons
import Executed from '@mui/icons-material/CheckCircle';
import Rejected from '@mui/icons-material/Cancel';
import Passed from '@mui/icons-material/PlayCircleFilled';
import Progress from '@mui/icons-material/ChangeCircle';

const GridWrapper = styled(Grid)({
	borderRadius: '8px',
	padding: '1.5rem',
	border: '1px solid #f0f0f2',
	overflow: 'clip',
	marginBottom: '2rem',
	cursor: 'pointer',
	'& .flex': {
		alignItems: 'baseline',
		justifyContent: 'space-between'
	},
	'&:hover': {
		transition: '.25s',
		border: '1px solid #cccccc',
	}
});

const LinearBox = styled(Box)({
	position: 'relative',
	'& .MuiLinearProgress-root': {
		height: '7px',
	},
	'& .MuiLinearProgress-root:before': {
		position: 'absolute',
		content: '"Quorum"',
		height: '100%',
		width: '30%',
		backgroundColor: '#f15e7e'
	},
	'&:before': {
		position: 'absolute',
    content: '""',
    height: '10px',
    width: '1px',
    top: '-10px',
    fontSize: '10px',
    left: '29.85%',
    backgroundColor: '#76818f',
    display: 'flex',
    justifyContent: 'flex-end',
	},
	'&:after': {
		position: 'absolute',
		content: '"Quorum (30%)"',
		height: '100%',
		width: '100%',
		top: '-24px',
		fontSize: '10px',
		left: '26%',
	}
});

export default function GovernCard(props) {

	const { card } = props;

	return (
		<Grid item xs={12} md={6}>
			<GridWrapper style={{ opacity: card.status !== 'in progress' ? .5 : 1 }}>
				<Typography sx={{color:'#76808f', fontWeight: 500}} variant='body2'>ID: {card.id}</Typography>
				<Box sx={{display:'flex', alignItems: 'center', marginTop: '1rem'}}>
					{
						card.status === 'passed' ? <Passed sx={{color:'#50af94'}} /> : (card.status === 'rejected' ? <Rejected sx={{color:'#FB4D3D'}} /> : (card.status === 'executed' ? <Executed sx={{color:'#674DFA'}} /> : <Progress sx={{color:'#674DFA'}} />))
					}
					<Typography sx={{marginLeft:'.5rem', textTransform:'uppercase', fontWeight:500, color:'#76808f'}} variant='body2'>
						{card.status}
					</Typography>
				</Box>
				<Typography sx={{textTransform:'capitalize', fontWeight:500, marginTop:'.5rem'}} variant='body1'>[WHITELIST] {card.title}</Typography>
				<LinearBox sx={{margin: '3rem 0 2rem'}}>
		      <LinearProgress variant="determinate" value={card.votes/5} />
				</LinearBox>
				<Typography sx={{textTransform:'capitalize', color:'#76808f', fontSize:'12px'}} variant='oveline'>End: {card.time}, 12:00 AM</Typography>
			</GridWrapper>
		</Grid>
	)
}