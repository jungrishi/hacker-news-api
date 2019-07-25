import React, { Component } from 'react';
import Comment from './Comment';
import '../styles/listing.css';

class Story extends Component {
    constructor(props) {
        super(props);
        this.state ={
            commentID : this.props.location.state.data.kids,
        }
    }

    render() {
        return (
            <div className="pageWrapper">
                <h2>{this.props.location.state.data.title}</h2>
                <ul>
                <li className="comments">
                    {this.state.commentID && this.state.commentID.length > 0 && (   
                            this.state.commentID.map((kid, index) => (
                            <Comment key={index} id={kid} />
                        )
                    ))}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Story;
