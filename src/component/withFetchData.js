import React, { Component } from 'react';

import Loading from './Loading';
import { BASEURL } from '../utils/global';
import Header from './Header';


export default (App, url) => {
  return class Post extends Component {
    constructor(props) {
      super(props);
      this.state = {
        stories: [],
        ids: [],
        isLoaded: false,
        currentPage: 0,
        totalPage: 5
      }
    }

    componentDidMount() {
      console.log({
        BASEURL,
        url
      })
      fetch(BASEURL + url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            ids: data
          })
          data = data.slice(this.state.currentPage * 15, (this.state.currentPage + 1) * 15);
          this.fetchStory(data)
        })
    }

    componentDidUpdate(prevPros, prevState) {
      if (this.state.currentPage != prevState.currentPage) {
        let data = this.state.ids.slice(this.state.currentPage * 15, (this.state.currentPage + 1) * 15);
        this.fetchStory(data)
      }
    }


    handlePage = (type) => {
      console.log(this.state.currentPage);
      if (type == 'Next') {
        if (this.state.currentPage < this.state.totalPage) {
          this.setState({
            currentPage: this.state.currentPage + 1
          })
        }
      } else {
        if (this.state.currentPage > 0) {
          this.setState({
            currentPage: this.state.currentPage - 1
          })
        }
      }
    }

    fetchStory(storiesId, i) {
      this.setState({
        isLoaded: !this.state.isLoaded
      })
      let actions = storiesId.map(id => fetch(BASEURL + `item/${id}.json`)
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
      return (<div>
        <Header handlePage={
          this.handlePage
        }
          currentPage={
            this.state.currentPage
          }
          totalPage={
            this.state.totalPage
          }
        />
        <ul className="listing" > {
          this.state.isLoaded === false ?
            < Loading i='1' />
            :
            <App
              currentPage={this.state.currentPage}
              passState={
                this.state.stories
              } {...this.props} />
        }
        </ul>
      </div>
      )
    }
  }
}
