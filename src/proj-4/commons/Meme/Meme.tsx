import classes from './Meme.module.scss';
import memesData from '../../data/memesData';
import { useState } from 'react';

export const Meme = (): JSX.Element => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: memesData.data.memes[0].url,
  });

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memesArray[randomIndex].url,
    }));
  }

  function setTopMemeText(e: React.ChangeEvent<HTMLInputElement>) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      topText: e.target.value,
    }));
  }

  function setBottomMemeText(e: React.ChangeEvent<HTMLInputElement>) {
    setMeme((prevMeme) => ({
      ...prevMeme,
      bottomText: e.target.value,
    }));
  }

  function createMeme() {
    const { topText, bottomText } = meme;
    getMemeImage();
    console.log(`
      topText: ${topText},
      bottomText: ${bottomText}
    `);
  }

  return (
    <main className={classes.main}>
      <div className={classes.memeForm}>
        <input
          type="text"
          placeholder="Top text"
          className={classes.memeForm__input}
          value={meme.topText}
          onChange={setTopMemeText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className={classes.memeForm__input}
          value={meme.bottomText}
          onChange={setBottomMemeText}
        />
        <button className={classes.memeForm__button} onClick={createMeme}>
          Create meme
        </button>
      </div>
      <div className={classes.memeImage__container}>
        <img src={meme.randomImage} alt="meme" className={classes.memeImage} />
      </div>
    </main>
  );
};
