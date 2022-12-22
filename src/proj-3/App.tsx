import React from 'react';
import classes from './App.module.scss';
import Header from './commons/Header';
import ArticlePreview from './commons/ArticlePreview';
import { articles } from './config';

function App() {
  const renderArticlePreviews = () =>
    articles.map((article, index) => {
      return (
        <React.Fragment key={article.googleMapsUrl}>
          <ArticlePreview {...article} />
          {index === articles.length - 1 ? null : <hr className={classes.hr} />}
        </React.Fragment>
      );
    });

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.articlesContainer}>{renderArticlePreviews()}</div>
    </div>
  );
}

export default App;
