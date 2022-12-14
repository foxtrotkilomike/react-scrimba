import { TextSectionProps } from '../commons/TextSection';
import twitterIcon from '../../assets/icons/twitter.svg';
import fbIcon from '../../assets/icons/facebook.svg';
import instIcon from '../../assets/icons/inst.svg';
import ghIcon from '../../assets/icons/gh.svg';

const sections: TextSectionProps[] = [
  {
    title: 'About',
    text: 'This is a text about me',
  },
  {
    title: 'Interests',
    text: 'These are my interests',
  },
];

const footerIcons = [
  {
    src: twitterIcon,
    alt: 'Twitter',
  },
  {
    src: fbIcon,
    alt: 'Facebook',
  },
  {
    src: instIcon,
    alt: 'Instagram',
  },
  {
    src: ghIcon,
    alt: 'GitHub',
  },
];

export { sections, footerIcons };
