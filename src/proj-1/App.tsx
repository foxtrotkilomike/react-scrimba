import Info from './commons/Info';
import TextSection from './commons/TextSection';
import { sections } from './config/data';
import Footer from './commons/Footer';

function App() {
  const renderSections = () =>
    sections.map((section) => <TextSection {...section} key={section.title} />);

  return (
    <div>
      <Info />
      {renderSections()}
      <Footer />
    </div>
  );
}

export default App;
