import React from 'react';

// Material
import { styled } from '@mui/system';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { ethIcon, avaIcon, fantomIcon, binanceIcon, polygonIcon } from '../assets/images';


const AccordionDet = styled(AccordionDetails)({
  padding: '2rem',
  '& fieldset': {
    border: '0!important',
    boxShadow: '0 2px 5px 1px rgb(0 0 0 / 3%)!important',
  },
  '& .MuiSelect-root': {
    borderRadius: 8,
    marginTop: '1rem',
    '& .MuiSelect-select': {
      padding: '10px 1rem!important',
      width: '100px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
    }
  }
});

const Container = styled('div')({
  marginTop: '1rem'
});

export default function Portfolio(props) {

  const [currency, setCurrency] = React.useState('ETH');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  const currencies = [
    { icon: avaIcon, name: 'AVA' },
    { icon: binanceIcon, name: 'BNB' },
    { icon: fantomIcon, name: 'FTM' },
    { icon: polygonIcon, name: 'MATIC' },
    { icon: ethIcon, name: 'ETH' },
  ]

  return (
    <AccordionDet>
      <Typography variant='body2'>
        { !props.invest && `Deposit the underlying vault asset directly using almost any token in your wallet. Please be aware we use a default slippage limit of 1%. Withdrawals return the vault's underlying token into one of our supported assets.` }
      </Typography>
      { !props.invest &&
        <React.Fragment>
        <div>
          <Container>
            <Typography sx={{fontWeight: '500'}} variant='h6'>
              Deposit
            </Typography>
            <TextField
              id="outlined-select-currency"
              select
              value={currency}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  <img style={{height: 20, marginRight: 10}} src={option.icon} alt="currency icon" width='20' /> {option.name}
                </MenuItem>
              ))}
            </TextField>
            <FormControl sx={{ borderRadius: '8px', backgroundColor: 'white', margin: '15px 1rem 0', width: '200px' }} variant="outlined">
              <OutlinedInput
                sx={{height: '43px'}}
                id="outlined-adornment-weight"
                value='0'
                endAdornment={<InputAdornment sx={{ cursor: 'pointer' }} position="end">Max</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
            </FormControl>
            <Button sx={{ backgroundColor: '#7C65FA', height: '42px', marginTop: '16px'}} variant="contained">Deposit</Button>
          </Container>
        </div>
        <div>
          <Container>
            <Typography sx={{fontWeight: '500'}} variant='h6'>
              Withdraw
            </Typography>
            <FormControl sx={{ borderRadius: '8px', backgroundColor: 'white', margin: '15px 0 0', width: '200px' }} variant="outlined">
              <OutlinedInput
                sx={{height: '43px'}}
                id="outlined-adornment-weight"
                value='0'
                endAdornment={<InputAdornment sx={{ cursor: 'pointer' }} position="end">Max</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
            </FormControl>
            <TextField
              id="outlined-select-currency"
              select
              value={currency}
              onChange={handleChange}
              sx={{margin:'0 1rem'}}
            >
              {currencies.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  <img style={{height: 20, marginRight: 10}} src={option.icon} alt="currency icon" width='20' /> {option.name}
                </MenuItem>
              ))}
            </TextField>
            <Button sx={{ backgroundColor: '#7C65FA', height: '42px', marginTop: '16px'}} variant="contained">Withdraw</Button>
          </Container>
        </div>
      </React.Fragment>
      }
      {
        props.invest &&
        <React.Fragment>
        <div>
          <Container sx={{margin: 0}}>
            <Typography sx={{fontWeight: '500'}} variant='h6'>
              Invest
            </Typography>
            <TextField
              id="outlined-select-currency"
              select
              value={currency}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  <img style={{height: 20, marginRight: 10}} src={option.icon} alt="currency icon" width='20' /> {option.name}
                </MenuItem>
              ))}
            </TextField>
            <FormControl sx={{ borderRadius: '8px', backgroundColor: 'white', margin: '15px 1rem 0', width: '200px' }} variant="outlined">
              <OutlinedInput
                sx={{height: '43px'}}
                id="outlined-adornment-weight"
                value='0'
                endAdornment={<InputAdornment sx={{ cursor: 'pointer' }} position="end">Max</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
            </FormControl>
            <Button sx={{ backgroundColor: '#7C65FA', height: '42px', marginTop: '16px'}} variant="contained">Invest</Button>
          </Container>
        </div>
        </React.Fragment>
      }
    </AccordionDet>
  );
};