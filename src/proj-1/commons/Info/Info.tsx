import classes from './Info.module.scss';
import PhilPhoto from '../../../assets/phil.jpg';

export const Info = (): JSX.Element => {
  return (
    <section className={classes.info}>
      <div className={classes.info__image_container}>
        <img className={classes.info__image} src={PhilPhoto} alt="author" />
      </div>
      <div className={classes.info__details}>
        <h1 className={classes.name}>Philipp Khromov</h1>
        <p className={classes.occupation}>Frontend Developer</p>
        <a
          className={classes.contact_link}
          href="https://www.github.com/foxtrotkilomike"
          target="_blank"
          rel="noreferrer"
        >
          github.com/foxtrotkilomike
        </a>
        <div className={classes.buttons_container}>
          <button className={`${classes.button} ${classes.button__email}`}>
            Email
          </button>
          <button className={`${classes.button} ${classes.button__linkedin}`}>
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
};
