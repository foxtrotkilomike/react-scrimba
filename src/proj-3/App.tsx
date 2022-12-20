import classes from './App.module.scss';
import Header from './commons/Header';
import ArticlePreview from './commons/ArticlePreview';
import { articles } from './config';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.articlesContainer}>
        <ArticlePreview {...articles[0]} />
      </div>
    </div>
  );
}

export default App;
