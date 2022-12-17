import KatieZafares from '../assets/airbnb/zafares.png';
import Wedding from '../assets/airbnb/wedding.png';
import MountainBike from '../assets/airbnb/mountain-bike.png';
import { CardProps } from './commons/Card';

export const courseCards: CardProps[] = [
  {
    image: KatieZafares,
    imageAlt: 'Katie Zafares',
    rating: '5.0',
    feedbackCount: 6,
    country: 'USA',
    caption: 'Life lessons with Katie Zaferes',
    startingPrice: 136,
    hasOpenSpots: false,
  },
  {
    image: Wedding,
    imageAlt: 'A bride',
    rating: '5.0',
    feedbackCount: 30,
    country: 'USA',
    caption: 'Learn wedding photography',
    startingPrice: 125,
    isOnline: true,
  },
  {
    image: MountainBike,
    imageAlt: 'A mountain bike',
    rating: '4.8',
    feedbackCount: 2,
    country: 'USA',
    caption: 'Group mountain biking',
    startingPrice: 50,
  },
];

export enum BADGE_TEXT {
  OPEN_SPOTS = 'SOLD OUT',
  ONLINE = 'ONLINE',
}
