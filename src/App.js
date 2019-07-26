import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ListStory from './component/ListStory';
import Story from './component/Story';
import NotFound from './component/NotFound';

import './styles/listing.css';
import './styles/responsive.css';



function App() {
  return (
    <div className="App">
      <>
        <Router basename="/hacker-news-api">
          <Switch >
            {/* <Header /> */}
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
