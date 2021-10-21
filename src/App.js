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
// import NotFound from './pages/NotFound';

const Container = styled('div')({
  display: 'flex'
});


const Wrapper = styled('div')({
  width: 'calc(100% - 276px)'
});

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Navbar />
          <Wrapper>
            <Header />
            <Switch>
              <Route exact path='/' component={Home}>
                { <Redirect to="/invest" /> }
              </Route>
              <Route exact path='/invest' component={Invest} />
              <Route exact path='/performance' component={Performance} />
              <Route exact path='/news' component={News} />
              <Route exact path='/alarm' component={Alarm} />
              <Route exact path='/governance' component={Governance} />
            </Switch>
            {/*<Footer />*/}
          </Wrapper>
      </Container>
    </BrowserRouter>
  );
}

export default App;
