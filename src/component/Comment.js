import React, { Component } from 'react';
import Loading from './Loading';
import {BASEURL} from '../utils/global';
import '../styles/listing.css';
import '../styles/responsive.css';

// import Label from './Label'; 

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            kids: undefined,
            isLoaded: false,
            depth: 3
        }
    this.i =0;    
    }

    componentDidMount() {
        this.fetchComment(this.props.id)
   }

    fetchComment(id) {
        fetch(BASEURL + `item/${id}.json`)
        .then(res => res.json())
        .then(data => {
            let kids;
            if(data) {
                kids = data.kids || [];
                this.setState({
                    data: data,
                    kids: kids,
                    isLoaded: !this.isLoaded,
                })   
            }
        })   
    }
    render() {
        return (
            <div className="hello">
                {!this.state.isLoaded ? <Loading />
                    :<>                    
                    <h3>{this.state.data.by}</h3>
                    <div className="text"
                            dangerouslySetInnerHTML={{ __html: this.state.data.text }}>
                        </div>
                        <div className="child">
                        {this.state.kids && this.state.kids.length > 0 &&   
                            (this.state.kids.map((kid, index) => (
                                <div key={index} className="descendant-comment">
                              <Comment  id={kid} />
                              </div>
                              )
                        ))
                        }
                        </div>
                      
                    </>     
                    }
            </div>
        )
    }
}

export default Comment;