import React, { Component } from 'react';
import Comment from './Comment';

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentID: this.props.location.state.data.kids,
    }
  }

  getPageHistory = () => {
    console.log(this.props);
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="pageWrapper" >
        <div className="storyHeader" onClick={this.getPageHistory}>
          <i
            className="fa fa-close"
            onClick={() => this.getPageHistory}
          />
        </div >
        <h2> {this.props.location.state.data.title} </h2>
        <ul>
          <li className="comments" > {
            this.state.commentID && this.state.commentID.length > 0 && (
              this.state.commentID.map((kid, index) => (
                <Comment key={index} id={kid} />
              )))}
          </li>
        </ul>
      </div>
    )
  }
}

export default Story;
