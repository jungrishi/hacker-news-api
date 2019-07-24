import React, { Component } from 'react'
import getUrl from '../utils/BaseUrl';

class Story extends Component {
    constructor(props) {
        super(props);
        this.state ={
            commentID : this.props.location.state.data.kids,
            comment: '',
            isLoaded: false
        }
    }

    componentDidMount() {
             this.fetchComment(this.state.commentID)
        }

    fetchComment(parentId) {
        parentId.map(id => {
            fetch(getUrl(`item/${id}.json`))
            .then(res => res.json())
            .then(data => {
                this.setState({
                    comment: data.text,
                    commentID: data.kids,
                    isLoaded: true
                })   
            })
            // if (this.state.commentID.length > 0) {
            //     this.fetchComment()
            // }
            
            })   
        
    }
    
    fetchStory(Id, i){
        
    }    

    render() {
        console.log(this.state.commentID)
        return (
            <div>
                {
                this.state.comment    /* <ul>
                    {this.state.isLoaded === false
                                                    ?<Loading />
                                                    :<Comment 
                                                    commentState = {this.state.comment} />}
                </ul> */}
            </div>
        )
    }
}

export default Story;
