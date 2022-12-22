import StPetersburgPhoto from '../assets/travel/st_petersburg.png';
import EkaterinburgPhoto from '../assets/travel/ekb.jpg';
import ArkhyzPhoto from '../assets/travel/arhyz.jpg';
import { ArticlePreviewProps } from './commons/ArticlePreview';

export const articles: ArticlePreviewProps[] = [
  {
    title: 'St. Petersburg',
    location: 'Russia',
    googleMapsUrl: 'https://goo.gl/maps/aMjgvCrQn3a2C3TE7',
    startDate: new Date('07/12/22'),
    endDate: new Date('07/19/22'),
    description:
      'Saint Petersburg is famous for its palaces and classical' +
      ' architecture of 19th century, the main examples of which include The' +
      ' Winter Palace on The Palace Square, Peterhof palace and park' +
      ' ensemble and The Admiralty.',
    imageUrl: StPetersburgPhoto,
  },
  {
    title: 'Yeltsin Centre',
    location: 'Ekaterinburg, Russia',
    googleMapsUrl: 'https://goo.gl/maps/aMjgvCrQn3a2C3TE7',
    startDate: new Date('06/27/22'),
    endDate: new Date('06/29/22'),
    description:
      'Yeltsin Centre is a modern public space, which is most famous for the' +
      ' museum of Boris Yeltsin. It exposes a life and career of the first' +
      ' Russian president in a form of several key moments he and his' +
      ' country faced during the 20th century',
    imageUrl: EkaterinburgPhoto,
  },
  {
    title: 'Arkhyz',
    location: 'Karachaevo-Cherkessiya, Russia',
    googleMapsUrl: 'https://goo.gl/maps/aMjgvCrQn3a2C3TE7',
    startDate: new Date('01/20/22'),
    endDate: new Date('01/27/22'),
    description:
      'Arkhyz is famous for its ski resort and mild climate, which lets one' +
      ' enjoy winter in all its beauty. It was exciting time with Igor and I' +
      ' managed to beat my speed record (73.1 km/h',
    imageUrl: ArkhyzPhoto,
  },
];
