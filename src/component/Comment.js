import React, { Component } from 'react';
import Loading from './Loading';
import getUrl from '../utils/BaseUrl';
import '../styles/listing.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            kids: undefined,
            isLoaded: false
        }
    }

    componentDidMount() {
        this.fetchComment(this.props.id)
   }

    fetchComment(id) {
        fetch(getUrl(`item/${id}.json`))
        .then(res => res.json())
        .then(data => {
            let kids;
            if(data) {
                kids = data.kids || [];
                this.setState({
                    data: data,
                    kids: kids,
                    isLoaded: !this.isLoaded
                })   
            }
        })   
    }
    render() {
        return (
            <div>
                {!this.state.isLoaded ? <Loading />
                    :<>
                    <h3>{this.state.data.by}</h3>
                        <div className="text"
                            dangerouslySetInnerHTML={{ __html: this.state.data.text }}>
                        </div>
                    <li className="comments">
                        <div className="child">
                        {this.state.kids && this.state.kids.length > 0 &&
                            (this.state.kids.map((kid, index) => (
                              <Comment key={index} id={kid} />)
                        ))}
                        </div>
                    </li>    
                    </>     
                    }
            </div>
        )
    }
}

export default Comment;