import classes from './Meme.module.scss';

export const Meme = (props: MemeProps): JSX.Element => {
  return (
    <main className={classes.main}>
      <div className={classes.memeForm}>
        <input
          type="text"
          placeholder="1"
          className={classes.memeForm__input}
          value="1"
          onChange={() => {}}
        />
        <input
          type="text"
          placeholder="2"
          className={classes.memeForm__input}
          value="1"
          onChange={() => {}}
        />
        <button className={classes.memeForm__button} onClick={() => {}}>
          Create meme
        </button>
      </div>
    </main>
  );
};

type MemeProps = Record<string, string>;
