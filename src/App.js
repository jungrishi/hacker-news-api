import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom';

import Story from './component/Story';
import ListStory from './component/ListStory';
import './styles/listing.css';
import './styles/responsive.css';
import NotFound from './component/NotFound';



function App() {
  return (
    <div className="App">
      <>
      <Router basename="/hacker-news-api">
        <h1><Link to="/">Hacker News</Link></h1>
        
         <Switch >
          <Route exact path="/" component={ListStory} />
          <Route exact path="/stories/:storyId" component={Story} />
          <Route path="*" component={NotFound} />
         </Switch>
        </Router>
      </>
    </div>
  );
}
export default App;
