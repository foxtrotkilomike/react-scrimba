import classes from './App.module.scss';
import Info from './commons/Info';
import TextSection from './commons/TextSection';
import { sections } from './config/data';
import Footer from './commons/Footer';

function App() {
  const renderSections = () =>
    sections.map((section) => <TextSection {...section} key={section.title} />);

  return (
    <div className={classes.card}>
      <Info />
      {renderSections()}
      <Footer />
    </div>
  );
}

export default App;
