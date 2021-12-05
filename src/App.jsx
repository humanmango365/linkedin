import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { getUserAuth } from './app/actions/index'
import { connect } from 'react-redux';

function App({getUserAuth}) {

  useEffect(() => {
    getUserAuth();
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path='/'  element={<Home />}/>
          
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserAuth: () => dispatch(getUserAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
