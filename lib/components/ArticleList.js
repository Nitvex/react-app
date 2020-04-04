import React from 'react';
import Article from './Article';

const ArticleList = props => (
  <div>
    {Object.values(props.articles).map(article => {
      return <Article key={article.id} article={article} store={props.store} />;
    })}
  </div>
);

export default ArticleList;