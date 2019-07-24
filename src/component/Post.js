import React, { Component } from 'react';
import ListStory from './ListStory';
import getUrl from '../utils/BaseUrl';
import Loading from './Loading';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
            isLoaded: false,
            i: 30
        }
    }

    componentDidMount() {
        console.log('com')
        fetch(getUrl('topstories.json'))
        .then(response => response.json())
        .then(data => this.fetchStory(data))
    }

    fetchStory(storiesId, i){
        let actions = storiesId.slice(0, 10).map(this.fetchSingleStory);
        let result = Promise.all(actions);
        result.then(res => {
            this.setState({
                stories: res,
                isLoaded: true,
                i: this.state.i
            })
            console.log('img')
        })
    }

    fetchSingleStory(id) {
        return new Promise(res => {
            fetch(getUrl(`/item/${id}.json`))
            .then(data => {
                let eachData = data;
                eachData = eachData.json();
                res(eachData)
            })
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.isLoaded === false
                                                    ?<Loading />
                                                    :<ListStory 
                                                    passState = {this.state.stories}/>}
                </ul>
            </div>
        )
    }
}

export default Post;
