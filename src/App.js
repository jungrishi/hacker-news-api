import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Story from './component/Story';
import ListStory from './component/ListStory';



function App() {
  return (
    <div className="App">
      <>
        <h1>Hacker News</h1>
        <Router>
          <Route exact path="/" component={ListStory}/>
          <Route exact path="/stories/:storyId" component={Story} />
        </Router>
      </>
    </div>
  );
}
export default App;
