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
	.MuiTablePagination-selectLabel, .MuiTablePagination-input {
		display: none
	}

	/*-- Nav --*/

	.nav-container {
    min-width: 275px;
		width: 275px;
		border-right: 1px solid #F2F0FF;
		background-color: #f0f0f2;
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
		border-radius: 8px;
		padding: .5rem 1rem;
		background-color: white;
		border: 1px solid #f0f0f2;
		transition: .25s;
		display: flex;
		justify-content: space-between;
		&:hover {
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
		background-color: #f0f0f2;
		align-items: center;
		&:hover {
			cursor: pointer;
			background-color: #e6e7e9;
		}
	}
	.nav-container .nav-items .active {
		& * {
			color: #5234F9;
			font-weight: 600;
		}
	}
	.nav-container .item-icon > svg {
		font-size: 22px;
		margin-right: .5rem;
		color: #657794;
	}
	.nav-container .nav-settings {
		margin-top: auto;
		background-color: transparent;
    margin-bottom: 4rem;
    & div {
    	margin-top: .75rem;
    	display: flex;
    	width: 100%;
    }
    & hr {
    	border: 0;
    	border-top: 1px solid #cccccc;
    }
    & .nav-logo {
    	background-color: transparent;
    	box-shadow: none;
    	margin-right: .5rem;
    }
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
		// background-color: white;
		border-radius: 8px;
		border: 1px solid transparent;
		justify-content: flex-start;
		// box-shadow: 0 2px 5px 1px rgba(0,0,0,.05);
		padding: .75rem;
		&:hover {
			transition: .25s;
			border: 1px solid #f0f0f2;
			background-color: transparent;
			box-shadow: 0 2px 2.5px 1px rgb(0 0 0 / 1%)
		}
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
		width: 300px;
		margin-top: .25rem;
	}
	#gas-menu .MuiMenu-paper {
		min-width: 275px;
		margin: .25rem;
		margin-left: 0rem;
	}
	#currency-menu .MuiMenu-paper .currency-btn {
		cursor: pointer;
		padding-left: 2rem;
		align-items: center;
		display: flex;
		margin: .5rem;
		border-radius: 8px;
		&:hover {
			background-color: rgb(244 246 252 / 1);
		}
	}
	#gas-menu .MuiMenu-paper .gas-btn {
		margin: .25rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-width: 80px;
		cursor: pointer;
		&.active {
			border-color: #917EFB;
		}
		&.active > .MuiTypography-overline {
			color: #674DFA!important;
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
	.settingSlippage {
		padding: .5rem .75rem;
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

	/*-- Alert --*/

	.toggleWrapper {
		text-align: end;
		margin: 1rem 0;
		& .toggleGroup {
			background-color: #f5f8fb;
	    padding: .25rem;
	    border-radius: 11px;
		}
		& button {
			text-transform: capitalize;
	    padding: 0 16px;
	    font-size: 12px;
	    color: black;
	    height: 35px;
	    border: 0;
	    &:hover {
	    	border-radius: 8px!important;
	    }
		}
		& button.Mui-selected {
			background-color: white;
			text-transform: capitalize;
			font-weight: bold;
			box-xhadow: 0 2px 5px 1px rgba(0,0,0,.05);
	    border-radius: 8px!important;
	    padding: 0 16px;
	    font-size: 12px;
	    color: black;
	    height: 35px;
	    &:hover {
	    	background-color: white;
	    }
		}
	}


`;

export default GlobalStyle;