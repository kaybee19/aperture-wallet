import React from 'react';

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';

// Comps
import Wrapper from '../components/Wrapper';
import GovernCard from '../components/GovernCard';

const Boxed = styled(Box)({
	width: '100%',
	textAlign: 'end',
	'& .Mui-checked':{
		color: '#674DFA!important'
	}
});

const Select = styled('select')({
	marginLeft: '1rem',
	width: '100px',
	padding: '.33rem',
	border: '1px solid #f0f0f2',
	borderRadius: 4,
	'&:focus, &:active': {
		outline: 'none'
	}
});


export default function Governance() {

  const [alignment, setAlignment] = React.useState('grid');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

	const govern = [
		{id: 128, status: 'in progress', title: 'alpahbet inc. (GOOGL)', votes: 85, time: 'Nov 15, 2021'},
		{id: 127, status: 'in progress', title: 'baidu inc (BIDY)', votes: 165, time: 'Nov 15, 2021'},
		{id: 126, status: 'in progress', title: 'sony group (SONY)', votes: 75, time: 'Oct 31, 2021'},
		{id: 125, status: 'rejected', title: 'workhorse group inc (WKHS)', votes: 75, time: 'Oct 15, 2021'},
		{id: 124, status: 'passed', title: 'etsy inc (ETSY)', votes: 170, time: 'Oct 15, 2021'},
		{id: 123, status: 'passed', title: 'nike, inc (NKE)', votes: 205, time: 'Oct 1, 2021'},
		{id: 122, status: 'rejected', title: 'solana (SOL)', votes: 95, time: 'Oct 1, 2021'},
		{id: 121, status: 'executed', title: 'monero (XMR)', votes: 180, time: 'Sep 15, 2021'},
	]

	return (
		<Grid sx={{ padding: '0 2rem', margin: 'auto', top: '-16px', left: '-16px', position: 'relative' }} container spacing={2}>
			<Grid item xs={12}>
				<Wrapper auto text='Governance'>
					<Typography variant='body2'>Vote on protocols for change on the Aperture Finance protocol.</Typography>
					<Boxed>
      			<Checkbox size="small" />
      			<Typography variant='caption'>Hide voted polls</Typography>
      			<Select>
					    <option value="volvo">All</option>
					    <option value="saab">In Progress</option>
					    <option value="saab">Passed</option>
					    <option value="opel">Rejected</option>
					    <option value="audi">Executed</option>
      			</Select>
					</Boxed>
					<Grid container spacing={2} style={{marginTop: '2rem'}}>
						{
							govern.map((card, i) => (
								<GovernCard card={card} />
							))
						}
					</Grid>
			    <TablePagination
			    	sx={{marginTop: '1rem'}}
			      component="div"
			      count={100}
			      page={page}
			      onPageChange={handleChangePage}
			      rowsPerPage={rowsPerPage}
			      onRowsPerPageChange={handleChangeRowsPerPage}
			    />
				</Wrapper>
			</Grid>
		</Grid>
	);
};