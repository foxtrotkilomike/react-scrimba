import classes from './App.module.scss';
import Header from './commons/Header';
import ArticlePreview from './commons/ArticlePreview';
import { articles } from './config';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <ArticlePreview {...articles[0]} />
    </div>
  );
}

export default App;
