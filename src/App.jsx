
import React, { Component } from 'react'
import './App.css'
import NewsCard from './components/NewsCard/NewsCard'
import HeaderComp from './components/HeaderComp/HeaderComp'
import FooterComp from './components/FooterComp/FooterComp'


class App extends Component {
  constructor() {
    super()
    this.state = {
      newsArray: []
    }

  }


  componentDidMount() {


    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=50')
      .then((response) => response.json())
      .then(data => this.setState(
        () => {
          return { newsArray: data }
        }
      ))
  }


  render() {
    return (
      <div className="App">
        <HeaderComp />
        <NewsCard news={this.state.newsArray} />
        <FooterComp />
      </div>
    )
  }
}

export default App
