import React, { Component } from 'react'
import getUrl from '../utils/BaseUrl';

class Story extends Component {
    constructor(props) {
        super(props);
        this.state ={
            commentID : this.props.location.state.data,
        }
    }

    componentDidMount() {
       const {kids} = this.props.location.state.data; 
       fetch(getUrl(`item/${kids}.json`) )
    }

    render() {
        const {kids} = this.props.location.state.data; 
        console.log(kids)
        return (
            <div className="pageWrapper">
                <Headers />
            </div>
        )
    }
}

export default Story;
