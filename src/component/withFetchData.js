import React, { Component } from 'react';

import Loading from './Loading';
import { BASEURL, LIMIT } from '../utils/global';
import Header from './Header';
import CancalPromise from './CancalPromise';

export default (App, url) => {
  return class Post extends Component {
    constructor(props) {
      super(props);
      this.state = {
        stories: [],
        ids: [],
        isLoaded: false,
        currentPage: 0,
        totalPage: 5,
        isMounted: true,
        error: null
      }

      this.pendingPromise = [];
    }

    componentDidMount() {
      // this.setState({
      //   isMounted: true
      // })
      fetch((BASEURL + url))
        .then(response => response.json())
        .then(data => {
          this.setState({
            ids: data
          })
          data = data.slice(this.state.currentPage * LIMIT, (this.state.currentPage + 1) * LIMIT);
          this.fetchStory(data)
        })
    }

    componentDidUpdate(prevPros, prevState) {
      if (this.props.match.params && prevPros.match.params && this.state.isMounted && this.props.match.params.page != prevPros.match.params.page) {
        let data = this.state.ids.slice(this.state.currentPage * LIMIT, (this.state.currentPage + 1) * LIMIT);
        this.fetchStory(data)
      }
    }

    componentWillUnmount() {
      // this.setState({
      //   isMounted: false
      // })
      this.pendingPromise.map(p => p.ca)
    }


    handlePage = (type) => {
      console.log(this.state.currentPage);
      console.log(this.props.history);

      if (type == 'Next') {
        if (this.state.currentPage < this.state.totalPage) {
          let currentPage = this.state.currentPage + 1;
          this.props.history.push(`/${currentPage}`);
          this.setState({
            currentPage: currentPage
          })
        }
      } else {
        if (this.state.currentPage > 0) {
          let currentPage = this.state.currentPage - 1;
          this.props.history.push(`/${currentPage}`);
          this.setState({
            currentPage: currentPage
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
        if (this.state.isMounted) {
          this.setState({
            stories: res,
            isLoaded: true,
            i: this.state.i
          })
        }
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
