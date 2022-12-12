import classes from './Info.module.scss';
import PhilPhoto from '../../../assets/phil.jpg';

export const Info = (): JSX.Element => {
  return (
    <section className={classes.info}>
      <div className={classes.info__image_container}>
        <img className={classes.info__image} src={PhilPhoto} alt="author" />
      </div>
      <h1>Philipp Khromov</h1>
      <p>Frontend Developer</p>
      <p>github.com/foxtrotkilomike</p>
      <div className={classes.buttons_container}>
        <button className={`${classes.button} ${classes.button_email}`}>
          Email
        </button>
        <button className={`${classes.button} ${classes.button_linkedin}`}>
          LinkedIn
        </button>
      </div>
    </section>
  );
};
