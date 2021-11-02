import React from 'react';

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Comps
import Wrapper from '../components/Wrapper';
import Trending from '../components/Trending';
import Portfolio from '../components/Portfolio';
import Investment from '../components/Investment';

export default function Invest() {

	return (
		<div>
			<Grid sx={{ padding: '0 2rem', margin: 'auto', top: '-16px', left: '-16px', position: 'relative' }} container spacing={2}>
				<Grid item xs={12} md={12}>
					<Wrapper auto text='Portfolio'>
						<Portfolio />
					</Wrapper>
				</Grid>
{/*				<Grid item xs={12} xs={4}>
					<Wrapper text='Trending Assets' auto>
						<Trending />
					</Wrapper>
				</Grid>*/}
				<Grid item xs={12} md={12}>
					<Wrapper text='Explore Investments' auto>
						<Investment />
					</Wrapper>
				</Grid>
			</Grid>
		</div>
	);
};