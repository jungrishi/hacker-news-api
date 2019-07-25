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
                    :<li className="text"><div
                            dangerouslySetInnerHTML={{ __html: this.state.data.text }}>
                        </div>
                        {this.state.kids && this.state.kids.length > 0 &&
                            (this.state.kids.map((kid, index) => (
                              <Comment key={index} id={kid} />)
                        ))}
                    </li>        
                }
            </div>
        )
    }
}

export default Comment;