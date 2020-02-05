import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Auth, Home} from './pages';

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <Route path={['/register', '/login']} component={Auth}/>
        <Route path={'/home'} component={Home}/>
      </div>
    </Router>
  );
}

export default App;
