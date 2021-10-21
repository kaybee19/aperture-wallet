import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle'
import { styled } from '@mui/system';

// Comps
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
// import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Invest from './pages/Invest';
import Performance from './pages/Performance';
import News from './pages/News';
import Alarm from './pages/Alarm';
import Governance from './pages/Governance';
import NotFound from './pages/NotFound';

const Container = styled('div')({
  display: 'flex',
});


const Wrapper = styled('div')({
  width: 'calc(100% - 276px)',
  marginLeft: 'auto'
});

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <RouteWrapper exact path="/" page={Home} />
        <Route component={container} />
      </Switch>
    </BrowserRouter>
  );
}

function RouteWrapper({ page: Page, privateRoute, ...rest }) {

  const authCheck = localStorage.getItem("auth");
  return (
    <Route
      {...rest}
      render={
        (props) => (authCheck === null) && privateRoute ? <Redirect to="/" /> : <Page {...props} />
      }
    />
  );
}


const container = () => {

  const authCheck = localStorage.getItem("auth");

  return (
    <div>
      <Container>
        <Navbar />
        <Wrapper>
          <Header />
          <Route exact path='/invest' render={() => JSON.parse(authCheck) === null ? <Redirect to='/' /> : <Invest />} />
          <Route exact path='/performance' render={() => JSON.parse(authCheck) === null ? <Redirect to='/' /> : <Performance />} />
          <Route exact path='/news' render={() => JSON.parse(authCheck) === null ? <Redirect to='/' /> : <News />} />
          <Route exact path='/alarm' render={() => JSON.parse(authCheck) === null ? <Redirect to='/' /> : <Alarm />} />
          <Route exact path='/governance' render={() => JSON.parse(authCheck) === null ? <Redirect to='/' /> : <Governance />} />
          <Route render={() => JSON.parse(authCheck) === null ? <Redirect to='/' /> : <Redirect to='/invest' />} />
          {/*<Footer />*/}
        </Wrapper>
      </Container>
    </div>
    )
  };


export default App;