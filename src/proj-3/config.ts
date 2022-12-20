import StPetersburgPhoto from '../assets/travel/st_petersburg.png';
import { ArticlePreviewProps } from './commons/ArticlePreview';

export const articles: ArticlePreviewProps[] = [
  {
    title: 'St. Petersburg',
    location: 'Russia',
    googleMapsUrl: 'https://goo.gl/maps/aMjgvCrQn3a2C3TE7',
    startDate: new Date('12/12/22'),
    endDate: new Date('18/12/22'),
    description:
      'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
    imageUrl: StPetersburgPhoto,
  },
];
