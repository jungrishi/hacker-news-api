import React, { Component } from 'react';
import Loading from './Loading';
import {BASEURL} from '../utils/global';


export default (App, url) =>  {
 return class Post extends Component {
        constructor(props) {
        super(props);
        this.state = {
            stories: [],
            isLoaded: false,
            i: 0
        }
    }

    componentDidMount() {
        fetch(BASEURL + url)
        .then(response => response.json())
        .then(data => {
            data = data.slice(0, 10);
            this.fetchStory(data)})   
    }

    fetchStory(storiesId, i){
        let actions = storiesId.map(id=>fetch(BASEURL + `item/${id}.json`)
        .then(data => data.json()));
        let result = Promise.all(actions);
        result.then(res => {
            this.setState({
                stories: res,
                isLoaded: true,
                i: this.state.i
            })
        })
    }


    render() {
        return (
            <div>
                <ul className="listing">
                    {this.state.isLoaded === false
                                                    ?<Loading i='1' />
                                                    :<App 
                                                    passState = {this.state.stories} {...this.props}/>}
                </ul>
            </div>
        )
    }
}
}

