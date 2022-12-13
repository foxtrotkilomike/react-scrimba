import Info from './commons/Info';
import TextSection from './commons/TextSection';
import { sections } from './config/data';

function App() {
  const renderSections = () =>
    sections.map((section) => <TextSection {...section} key={section.title} />);

  return (
    <div>
      <Info />
      {renderSections()}
    </div>
  );
}

export default App;
