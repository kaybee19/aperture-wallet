import React from 'react';
import { cryptoGhost, cryptoGreen, cryptoMag, cryptoPurple, cryptoYellow, cryptoRed, cryptoRaz } from '../assets/images';

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

// Icons
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// Comps
import Wrapper from '../components/Wrapper';
import Stories from '../components/Stories';

const Container = styled('div')({
	marginTop: '1.5rem',
});

export default function News() {

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

  const content = [
  	{ img: cryptoGhost, header: 'Bitcoin Nears $62,000 as Pullback Continues', body: 'All of this comes as reports from Bloomberg suggest that the first-ever Bitcoin exchange-traded fund in the U.S. “risks becoming too popular for its own good.”', by: 'Doe Jane', hour: '10h', min: '2' },
  	{ img: cryptoGreen, header: 'Walmart to Offer Bitcoin Purchases at 200 Stores', body: 'All of the spectators sitting in one of the arena’s 80 sections have been given $500 each — with some estimates suggesting this PR stunt would have cost a cool $150,000.', by: 'John Doe', hour: '12h', min: '2' },
  	{ img: cryptoMag, header: `McDonald's China Told to Expand Digital Yuan Trial`, body: 'The association took particular issue with a claim that there has not been “a satisfactory explanation for how Diem will prevent illicit financial flows and other criminal activity.”', by: 'Doe Jane', hour: '23h', min: '3' },
  	{ img: cryptoPurple, header: 'Bitcoin Hits New All-Time High, Breaking $66,000', body: 'At present, the average prediction of its panel indicates that BTC will be worth $249,578 by 2025 — approximately quadruple what it is right now.', by: 'John Doe', hour: '1d', min: '2' },
  	{ img: cryptoYellow, header: 'Mariah Carey Endorses Bitcoin on Instagram', body: 'Bitcoin was hovering at about $64,000 at the time of writing, meaning that a jump of just 1.34% would propel the world’s biggest cryptocurrency into record territory.', by: 'Doe Jane', hour: '1d', min: '3' },
  	{ img: cryptoRed, header: 'Bitcoin Nears Record Highs as $1B Traded on ETF', body: 'The iconic singer has announced that she is partnering with Gemini, an exchange run by billionaire twins Cameron and Tyler Winklevoss.', by: 'John Doe', hour: '2d', min: '2' },
  ]

	return (
		<Grid sx={{ padding: '0 2rem', margin: 'auto', top: '-16px', left: '-16px', position: 'relative' }} container spacing={2}>
			<Grid item xs={12}>
				<Wrapper auto text='News'>
					<Typography variant='body2'>Discover knowledgeable insights from leaders in the blockchain and crypto industries.</Typography>
					<Container>
						<ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
				      <ToggleButton value="grid" aria-label="left aligned">
				        <GridViewIcon />
				      </ToggleButton>
				      <ToggleButton value="list" aria-label="centered">
				        <FormatListBulletedIcon />
				      </ToggleButton>
				    </ToggleButtonGroup>
					</Container>
					<Grid container justifyContent='space-between' spacing={2}>
						{
							content.map((con, i) => (
								<Stories img={con.img} header={con.header} body={con.body} by={con.by} hour={con.hour} min={con.min} />
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