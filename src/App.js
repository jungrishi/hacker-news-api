import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './component/Header';
import Post from './component/Post';
import Story from './component/Story';



function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Router>
          <Route exact path="/" component={Post}/>
          <Route exact path="/stories/:storyId" component={Story} />
        </Router>
      </>
    </div>
  );
}
export default App;
