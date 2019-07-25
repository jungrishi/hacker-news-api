import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Story from './component/Story';
import ListStory from './component/ListStory';
import './styles/listing.css';
import NotFound from './component/NotFound';



function App() {
  return (
    <div className="App">
      <>
      {/* <h1>Header</h1> */}
      <Router>
        <h1><a><Link
                    to={{
                    pathname: `/`}}>Hacker News        
                </Link>  
            </a>    
          </h1>
        
         {/* <ListStory/> */}
          <Route exact path="/stories/:storyId" component={Story} />
          <Route exact path="/" component={ListStory} />
          <Route component={NotFound} />
        </Router>
      </>
    </div>
  );
}
export default App;
