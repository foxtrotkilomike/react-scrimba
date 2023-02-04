import classes from './Meme.module.scss';
import memesData from '../../data/memesData';
import { useState, useEffect } from 'react';

export const Meme = (): JSX.Element => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: memesData.data.memes[0].url,
  });
  const [allMemes, setAllMemes] = useState<{ url: string }[]>([]);

  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[randomIndex].url,
    }));
  }

  function handleMemeForm(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function createMeme(e: React.SyntheticEvent) {
    e.preventDefault();
    getMemeImage();
  }

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then(({ data }) => setAllMemes(data.memes));
  }, []);

  return (
    <main className={classes.main}>
      <form className={classes.memeForm} onSubmit={createMeme}>
        <input
          type="text"
          placeholder="Top text"
          className={classes.memeForm__input}
          name="topText"
          value={meme.topText}
          onChange={handleMemeForm}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className={classes.memeForm__input}
          name="bottomText"
          value={meme.bottomText}
          onChange={handleMemeForm}
        />
        <button className={classes.memeForm__button}>Create meme</button>
      </form>
      <div className={classes.memeImage__container}>
        <img src={meme.randomImage} alt="meme" className={classes.memeImage} />
        <p className={`${classes.memeText} ${classes.memeText_top}`}>
          {meme.topText}
        </p>
        <p className={`${classes.memeText} ${classes.memeText_bottom}`}>
          {meme.bottomText}
        </p>
      </div>
    </main>
  );
};
