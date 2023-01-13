import classes from './Header.module.scss';
import headerIcon from '../../../assets/memes/troll.webp';

export const Header = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <img className={classes.headerIcon} src={headerIcon} alt="" />
      <h2 className={classes.headingMain}>Meme Generator</h2>
      <h4 className={classes.projectName}>React Scrimba - Project 4</h4>
    </header>
  );
};
