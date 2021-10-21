import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import bgImage from '../assets/images/bg.png';
import { logo } from '../assets/images'

// Material UI
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { Instagram, LinkedIn, Twitter, Facebook } from '@mui/icons-material';

// Comps
import ConnectWallet from '../components/ConnectWallet';

const Container = styled('div')({
	width: 'auto',
	height: '110vh',
	padding: '1rem 10%',
	backgroundColor: 'white',
	'& hr': {
		position: 'absolute',
		bottom: '-10px',
		opacity: .15,
		width: '100%',
		left: 0
	}
});

const Nav = styled('nav')({
	'& > div': {
	  justifyContent: 'space-between',
	  width: 'auto',
	}
});

const Footer = styled('nav')({
	marginTop: '2rem',
	'& > div': {
	  justifyContent: 'space-between',
	  width: 'auto',
	}
});

const Wrapper = styled('div')({
	display: 'flex',
	width: 'fit-content',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '0rem',
});

const Image = styled('img')({
	backgroundColor: 'white',
	padding: '.25rem',
	borderRadius: '50%',
	border: '2px solid #F2F0FF',
	marginRight: '1rem',
	boxShadow: '0 2px 5px 1px rgba(0,0,0,.05)'
});

const Body = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	height: '85%'
});

const Icons = styled('div')({
	display: 'flex',
	'& a': {
		marginLeft: '.75rem',
	}
});

const Icon = (props) => {
	return(
		<a target='_blank' rel="noreferrer" href={props.link}>
			<span style={{ color: 'black' }}>{props.icon}</span>
		</a>
	)
};

export default function Home() {

	const history = useHistory();

	React.useEffect(() => {
		const authCheck = localStorage.getItem("auth");
		authCheck === 'true' && history.push("/invest");
	},[])

	const iconLinks = [
		{link: 'https://www.instagram.com', icon: <Instagram /> },
		{link: 'https://www.linkedin.com', icon: <LinkedIn /> },
		{link: 'http://twitter.com', icon: <Twitter /> },
		{link: 'https://www.facebook.com', icon: <Facebook /> },
	];

	return (
		<Container>
			<Nav>
				<Wrapper>
					<Link className='linkClass flex' to='/'>
						<Image src={logo} width='33' alt="logo" />
						<Typography variant='h6' sx={{ fontWeight: 600 }}>
							Aperture Finance
						</Typography>
					</Link>
					<Wrapper style={{ marginLeft: 'auto' }}>
						<a style={{ margin: '0 2.5rem' }} href="https://aperture.netlify.app/" target='_blank' className='linkClass'>
							<Typography variant='body1' sx={{ fontWeight: 500 }}>Home</Typography>
						</a>
						<a href="http://vps.aperture.finance:8080/" target='_blank' className='linkClass'>
							<Typography variant='body1' sx={{ fontWeight: 500 }}>Investor Portal</Typography>
						</a>
					</Wrapper>
				</Wrapper>
			</Nav>
			<Body>
				<Typography variant='h3' sx={{ color: '#16141F', fontWeight: 600 }}>
					Your Personal Defi <span style={{color: '#5234F9'}}>Wallet</span>
				</Typography>
				<Typography sx={{margin: '1rem auto', width: '66%', color: 'rgb(101, 119, 147)', fontWeight: 500}} variant='h5'>
					Track all your Defi assets on <span style={{color: '#5234F9'}}>Aperture Wallet</span>. Connect your wallet to invest in the latest opportunities.
				</Typography>
				<ConnectWallet />
			</Body>
			<hr />
			<Footer>
				<Wrapper>
					<Link className='linkClass flex' to='/'>
						<img src={logo} width='33' alt="logo" />
					</Link>
					<Icons>
						{
							iconLinks.map((icon, i) => (
								<Icon link={icon.link} icon={icon.icon} key={i} />
							))
						}					
					</Icons>
				</Wrapper>
			</Footer>
		</Container>
	);
};
