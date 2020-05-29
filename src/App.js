import React from 'react';
import './App.scss';
import BreedGenerator from './components/BreedGenerator';
import FactGenerator from './components/FactGenerator'
import Header from './components/Header';
import Home from './components/Home';
import Picture from './components/Picture'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
      <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pics" component={Picture} />
        <Route exact path="/breeds" component={BreedGenerator} /> 
        <Route exact path="/facts" component={FactGenerator} /> 

      </Switch>

      </>
  );
}

export default App;
