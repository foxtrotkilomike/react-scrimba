import classes from './App.module.scss';
import Header from './commons/Header';
import Hero from './commons/Hero';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
