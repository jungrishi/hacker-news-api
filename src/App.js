import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom';

import Story from './component/Story';
import ListStory from './component/ListStory';
import './styles/listing.css';
import NotFound from './component/NotFound';



function App() {
  return (
    <div className="App">
      <>
      <Router>
        <h1><Link to="/hacker-news-api/">Hacker News</Link></h1>
        
         <Switch baseurl="/hacker-news-api/">
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
