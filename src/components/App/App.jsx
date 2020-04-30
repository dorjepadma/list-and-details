import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../../containers/CharactersList.jsx';

export default function App() {
  return ( 
    <>
      <p>The Characters of Avatar:</p>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterList} />
        </Switch>
      </Router>
    </>
  );
} 
