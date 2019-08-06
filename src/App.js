import React from 'react';
import CardList from './CardList/CardList'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 9,
      title: [],
      urlToImage: [],
      description: [],
      url: [],
    }
  }

  
  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=ac5a319dd1594827817faa8cba97a333")
    .then(response => response.json())
    .then(data => {
      // makes array of objects and discards the crap data
      const articles = data.articles;
      // console.log(articles)
      
      // interate over array to extract key/value pairs
      const title = Object.keys(articles)
        .map(key => articles[key].title)
        // console.log(title)
        this.setState({
          title
        });

      const urlToImage = Object.keys(articles)
        .map(key => articles[key].urlToImage)
        // console.log(urlToImage)
        this.setState({
          urlToImage
        });

      const description = Object.keys(articles)
        .map(key => articles[key].description)
        // console.log(description)
        this.setState({
          description
        });

      const url = Object.keys(articles)
        .map(key => articles[key].url)
        // console.log(url)
        this.setState({
          url
        });
    })
    }


     

  render() {
  
    // this all needs to go and live in Card.js
    return (
      <div>
        
          <CardList
            index={this.state.index}
            title={this.state.title}
            urlToImage={this.state.urlToImage}
            description={this.state.description}
            url={this.state.url}
          />
        
      </div>
    )
  }
}

export default App;
