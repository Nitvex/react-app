import React from 'react';
import dataApi from '../dataApi';
import {data} from '../testData.json';
import ArticleList from './ArticleList';

const api = new dataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  render() {
    return <ArticleList articles={this.state.articles} authors={this.state.authors} />;
  }
}
  
export default App;