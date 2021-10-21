import React from 'react';

// Material
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';

// Comps
import Wrapper from '../components/Wrapper';
import MyAssets from '../components/MyAssets';
import Graph from '../components/Graph';

export default function Performance() {

	return (
		<div>
			<Grid sx={{ padding: '0 2rem', margin: 'auto', top: '-16px', left: '-16px', position: 'relative' }} container spacing={2}>
				<Grid item xs={12} md={4}>
					<Wrapper auto text='My Assets'>
						<MyAssets />
					</Wrapper>
				</Grid>
				<Grid item xs={12} md={8}>
					<Wrapper auto text='Performance'>
						<Graph />
					</Wrapper>
				</Grid>
			</Grid>
		</div>
	);
};