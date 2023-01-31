import classes from './Meme.module.scss';
import memesData from '../../data/memesData';
import { useState } from 'react';

export const Meme = (): JSX.Element => {
  const [memeImage, setMemeImage] = useState(memesData.data.memes[0].url);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomIndex].url);
  }

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
        <button className={classes.memeForm__button} onClick={getMemeImage}>
          Create meme
        </button>
      </div>
      <div className={classes.memeImage__container}>
        <img src={memeImage} alt="meme" className={classes.memeImage} />
      </div>
    </main>
  );
};
