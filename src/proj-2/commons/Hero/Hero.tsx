import classes from './Hero.module.scss';

export const Hero = (): JSX.Element => {
  return (
    <section className={classes.hero}>
      <img
        src="../../../../src/assets/airbnb/airbnb_photo_grid.png"
        alt=""
        className={classes.photo_grid}
      />
      <div className={classes.info}>
        <h1 className={classes.heading}>Online Experiences</h1>
        <p className={classes.caption}>
          Join unique interactive activities led by one-of-a-kind hosts - all
          without leaving home.
        </p>
      </div>
    </section>
  );
};
