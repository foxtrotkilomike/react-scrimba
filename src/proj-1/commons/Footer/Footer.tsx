import classes from './Footer.module.scss';
import { footerIcons } from '../../config/data';

export const Footer = (): JSX.Element => {
  const icons = footerIcons.map(({ src, alt }, index) => (
    <li key={index}>
      <img src={src} alt={alt} className={classes.icon} />
    </li>
  ));

  return (
    <footer className={classes.footer}>
      <ul>{icons}</ul>
    </footer>
  );
};
