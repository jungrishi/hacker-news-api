import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './component/Header';
import Story from './component/Story';
import ListStory from './component/ListStory';



function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Router>
          <Route exact path="/" component={ListStory}/>
          <Route exact path="/stories/:storyId" component={Story} />
        </Router>
      </>
    </div>
  );
}
export default App;
