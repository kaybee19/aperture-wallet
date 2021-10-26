import React from "react";
import { Chart, Line, Point, Tooltip, LineAdvance, Axis } from "bizcharts";

// Material
import { styled } from '@mui/system';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const day = [
	{ day: "Sep 24", value: 81050, },
	{ day: "Sep 25", value: 84900, },
	{ day: "Sep 26", value: 86000, },
	{ day: "Sep 27", value: 95150, },
	{ day: "Sep 28", value: 89451, },
	{ day: "Sep 29", value: 92090, },
	{ day: "Sep 30", value: 96030, },
	{ day: "Oct 1", value: 93030, },
	{ day: "Oct 2", value: 90040, },
	{ day: "Oct 3", value: 90451, },
	{ day: "Oct 4", value: 100150, },
	{ day: "Oct 5", value: 100490, },
	{ day: "Oct 6", value: 110060, },
	{ day: "Oct 7", value: 130700, },
	{ day: "Oct 8", value: 150900, },
	{ day: "Oct 9", value: 170030, },
	{ day: "Oct 10", value: 150030, },
	{ day: "Oct 11", value: 140040, },
];

const week = [
	{ week: "Jun 14", value: 71150, },
	{ week: "Jun 21", value: 70150, },
	{ week: "Jun 28", value: 63150, },
	{ week: "Jul 5", value: 70150, },
	{ week: "Jul 12", value: 74150, },
	{ week: "Jul 19", value: 72150, },
	{ week: "Jul 26", value: 76990, },
	{ week: "Aug 2", value: 79000, },
	{ week: "Aug 9", value: 82500, },
	{ week: "Aug 16", value: 77150, },
	{ week: "Aug 23", value: 80150, },
	{ week: "Aug 30", value: 83150, },
	{ week: "Sep 6", value: 86150, },
	{ week: "Sep 13", value: 84150, },
	{ week: "Sep 20", value: 87150, },
	{ week: "Sep 27", value: 95150, },
	{ week: "Oct 4", value: 100150, },
	{ week: "Oct 11", value: 140040, },
];

const month = [
	{ month: "May 20", value: 60200, },
	{ month: "Jun 20", value: 66050, },
	{ month: "Jul 20", value: 61050, },
	{ month: "Aug 20", value: 63150, },
	{ month: "Sep 20", value: 72050, },
	{ month: "Oct 20", value: 73050, },
	{ month: "Nov 20", value: 78040, },
	{ month: "Dec 20", value: 90150, },
	{ month: "Jan 21", value: 82040, },
	{ month: "Feb 21", value: 78040, },
	{ month: "Mar 21", value: 70050, },
	{ month: "Apr 21", value: 75050, },
	{ month: "May 21", value: 72200, },
	{ month: "Jun 21", value: 63150, },
	{ month: "Jul 21", value: 76990, },
	{ month: "Aug 21", value: 83150, },
	{ month: "Sep 21", value: 95150, },
	{ month: "Oct 21", value: 140040, },
];


export default function Graph() {

  const [alignment, setAlignment] = React.useState('day');

  const handleChange = (event) => {
  	setAlignment(event.target.value);
  };

	return (
		<React.Fragment>

			<div className='toggleWrapper'>
		    <ToggleButtonGroup
		    	className='toggleGroup'
		      color="primary"
		      value={alignment}
		      exclusive
		      onChange={handleChange}
		    >
		      <ToggleButton value="day">Day</ToggleButton>
		      <ToggleButton value="week">Week</ToggleButton>
		      <ToggleButton value="month">Month</ToggleButton>
		    </ToggleButtonGroup>
	    </div>

			<Chart
				appendPadding={[20, 0, 40, 0]}
				autoFit
				height={500}
				data={alignment === 'day' ? day : (alignment === 'week' ? week : (alignment === 'month' ? month : null))}
				scale={{ value: { min: 75000, alias: 'Investment', type: 'pow' }}}
			>
        <Axis
          name="value"
          label={{
            formatter: val => `$${val}`,
          }}
        />
				<LineAdvance
					shape="smooth"
					point
					area
					position={`${alignment}*value`}
				/>

{/*				<Line position={`${alignment}*value`} />
				<Point position={`${alignment}*value`} />
				<Tooltip showCrosshairs />*/}
			</Chart>
		</React.Fragment>
	);
}
