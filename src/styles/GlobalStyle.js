import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/*----------------------------
	xs: 0px
	sm: 600px
	md: 900px
	lg: 1200px
	xl: 1536px
----------------------------*/

/*----------------------------
	Global styles
----------------------------*/

	/*-- Layout --*/

	.linkClass {
		text-decoration: none;
		color: inherit;
	}
	.g2-tooltip-value:before {
		content: '$';
		position: relative;
	}
	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/*-- Nav --*/

	.nav-container {
    min-width: 275px;
		width: 275px;
		border-right: 1px solid #F2F0FF;
		background-color: white;
		height: 100vh;
		position: fixed;
		z-index: 1;
	}
	.nav-container .nav-body {
		height: 100vh;
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
	}
	.nav-container .nav-logo {
		background-color: white;
		padding: .33rem;
		border-radius: 50%;
    box-shadow: 0 2px 5px 1px rgba(0,0,0,.05);
	}
	.nav-container .nav-fab {
    width: 25px;
    min-height: 25px;
    min-width: 25px;
    height: 25px;
    box-shadow: 0 2px 5px 1px rgba(0,0,0,.1);
    background-color: #F7F7FF;
	}
	.nav-container .nav-user {
		margin-top: 2.5rem;
		border-radius: 8px;
		padding: .5rem 1rem;
		background-color: #F4F6FC;
		transition: .25s;
		display: flex;
		justify-content: space-between;
		&:hover {
			background-color: #f0f5f9;
			box-shadow: 0 2px 2.5px 1px rgba(0,0,0,.01);
			cursor: pointer;
		}
	}
	.nav-container .user-card {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		width: 40px;
		margin-right: .5rem;
		border-radius: 50%;
    background-position: center;
    background-size: 80%;
    background-color: #f0f0f0;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,.05);
	}
	.nav-container .user-details {
		background-color: transparent;
		width: 125px;
		max-width: 125px;
	}
	.nav-container .user-details .nav-hr {
		height: 3.3px;
		border: 0;
		margin: .25rem 0;
		border-radius: 100px;
		background-color: #dfe9f8;
	}
	.nav-container .nav-util {
		display: flex;
		margin-top: .5rem;
		justify-content: space-between;
		align-items: center;
	}
	.nav-container .uitl-card {
    display: flex;
    align-items: center;
    justify-content: center;
		box-shadow: 0 2px 2.5px 1px rgba(0,0,0,.03);
		width: 47.5%;
		background-color: #F4F6FC;
		font-size: 10px;
		color: #668A99;
		text-align: center;
		padding: .15rem 0;
		text-transform: capitalize;
		&:hover {
			background-color: #f0f5f9;
			cursor: pointer;
		}
	}
	.nav-container .util-icon {
		margin-right: .25rem;
		font-size: 14px;
	}
	.nav-container .nav-items {
		margin-top: 2.5rem;
	}
	.nav-container .item {
		margin-top: .75rem;
		border-radius: 8px;
		padding: .75rem;
		transition: .25s;
		display: flex;
		background-color: rgb(244 246 252 / 25%);
		align-items: center;
		&:hover {
			cursor: pointer;
			background-color: #F4F6FC;
		}
	}
	.nav-container .nav-items .active {
		background-color: #674DFA;
		& * {
			color: white;
		}
	}
	.nav-container .item.nav-settings {
		margin-top: auto;
    margin-bottom: 2rem;
	}
	.nav-container .item-icon > svg {
		font-size: 22px;
		margin-right: .5rem;
		color: #657794;
	}

	/*-- Header --*/

	.header {
		display: flex;
		justify-content: space-between;
		padding: 1rem 2rem;
		& > span {
			display: flex;
		}
	}
	.header .header-button {
		background-color: white;
		border-radius: 8px;
		justify-content: flex-start;
		box-shadow: 0 2px 5px 1px rgba(0,0,0,.05);
		padding: .75rem;
		& svg {
			color: black;
		}
		& p {
			font-size: 16px;
			text-transform: capitalize;
			margin-left: .5rem;
			margin-right: auto;
			color: #16141F;
			font-weight: 500;
		}
	}
	#network-menu .MuiMenu-paper {
		width: 200px;
		border-radius: 8px;
		margin-top: .25rem;
		& .network-btn {
			padding: .75rem 1rem;
		}
	}

	#currency-btn.header-button, #gas-btn.header-button {
		min-width: fit-content;
		& span {
			text-transform: uppercase;
			padding-left: .5rem;
			color:  black;
			font-weight: 500;
			line-height: inherit;
			font-size: 14px;
		}
	}
	#currency-menu .MuiMenu-paper {
		width: 275px;
		margin-top: .25rem;
	}
	#gas-menu .MuiMenu-paper {
		min-width: 275px;
		margin: .25rem;
		margin-left: 0rem;
	}
	#currency-menu .MuiMenu-paper .currency-btn {
		cursor: pointer;
		align-items: center;
		justify-content: center;
		display: flex;
		margin: .5rem;
		border-radius: 8px;
		&:hover {
			background-color: rgb(244 246 252 / 1);
		}
	}
	#gas-menu .MuiMenu-paper .gas-btn {
		text-align: center;
		min-width: 80px;
		border: 1px solid #F2F0FF;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		padding: .25rem 0;
		cursor: pointer;
		&.active {
			border-color: #917EFB;
		}
		&.active > .MuiTypography-overline {
			color: #674DFA!important;
		}
		&:hover {
			border-color: #917EFB;
		}
		& span {
			text-transform: capitalize;
		}
	}
	#settings-btn.header-button {
		min-width: 25px;
	}
	#settings-menu .MuiMenu-paper {
		padding: .5rem;
		margin-top: .25rem;
		& hr {
			border: 0;
			border-top: 1.5px solid rgb(102 138 153 / 25%);
			margin: 0;
			margin-top: 1.25rem;
		}	
	}
	#settings-menu .MuiMenu-paper .settings-btn {
		padding: 1rem 1.5rem;
		border: 1px solid #F2F0FF;
		border-radius: 8px;
		margin: .25rem;
		&.active {
			border: 1px solid #674DFA;
			font-weight: 600;
		}
		&.active p {
			color: #674DFA;
			font-weight: 600;	
		}
		&:hover {
			cursor: pointer;
			border: 1px solid #674DFA;
			color: #674DFA;
		}
	}


`;

export default GlobalStyle;