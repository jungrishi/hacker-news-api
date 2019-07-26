import React, { Component } from 'react';

import Loading from './Loading';
import { BASEURL } from '../utils/global';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            kids: undefined,
            isLoaded: false,
        }
        this.isMount = true;
    }

    componentDidMount() {
        this.isMount = true;
        this.fetchComment(this.props.id)
    }

    componentWillUnmount() {
        this.isMount = false;
    }

    fetchComment(id) {
        fetch((BASEURL + `item/${id}.json`))
            .then(res => res.json())
            .then(data => {
                let kids;
                if (data && this.isMount) {
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
                    :
                    <>
                        <h3>{this.state.data.by}</h3>
                        <div className="text"
                            dangerouslySetInnerHTML={{ __html: this.state.data.text }}>
                        </div>
                        <div className="child">
                            {this.isMount && this.state.kids && this.state.kids.length > 0 &&
                                (this.state.kids.map((kid, index) => (
                                    <div key={index} className="descendant-comment">
                                        <Comment id={kid} />
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