import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../../containers/CharactersList.jsx';
import CharacterDetail from '../../containers/CharacterDetail.jsx';

export default function App() {
  return ( 
    <>
      <p>The Characters of Avatar:</p>
      <Router>
        <Switch>
          <Route exact path='/' component={CharacterList} />
          <Route path='/details' component={CharacterDetail}/> 
        </Switch>
      </Router>
    </>
  );
} 
