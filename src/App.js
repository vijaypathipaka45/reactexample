import React from 'react';
import './App.css';
import Header from './components/header_footer/HeaderComponent';
import Footer from './components/header_footer/FooterComponent';
import FormPage from './components/login/LoginComponent';
import Calculations from './components/models/CalculationPage';
import Example from './components/models/Example';
import {withRouter,BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Counter from './components/models/Counter';
import {history} from './components/_helpers/history'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
  <div className="App">     
     
       {/* <Header/> */}
      {/* <FormPage/> */}
      {/* <Calculations/> */}
      {/* <Example/>
       <Footer/> */}

{/* <Router>   */}
     
      <Route component={Header}/>
      <Route path="/" exact component={FormPage} />  
      <Route path="/calculation" component={Calculations} /> 
      <Route path="/counter" component={Counter} />  
      <Route component={Footer}/> 
      
  {/* </Router>  */}


       
      </div>

      </BrowserRouter>
   );
}

export default App;