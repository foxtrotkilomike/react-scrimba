import classes from './App.module.scss';
import Header from './commons/Header';
import Hero from './commons/Hero';
import { courseCards } from './config';
import Card from './commons/Card';

function App() {
  const renderCourseCards = () => {
    const cards = courseCards.map((courseData) => {
      const { imageAlt } = courseData;

      return <Card key={imageAlt} {...courseData} />;
    });

    return <div className={classes.cardsContainer}>{cards}</div>;
  };
  return (
    <div className={classes.app}>
      <Header />
      <Hero />
      {renderCourseCards()}
    </div>
  );
}

export default App;
