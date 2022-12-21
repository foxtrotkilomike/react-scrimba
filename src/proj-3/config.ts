import StPetersburgPhoto from '../assets/travel/st_petersburg.png';
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
];
