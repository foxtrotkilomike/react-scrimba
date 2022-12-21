import classes from './ArticlePreview.module.scss';
import postProcessDataFormat from '../../postProcessDataFormat';

export const ArticlePreview = (props: ArticlePreviewProps): JSX.Element => {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props;

  const startDateString = formatDateString(startDate);
  const endDateString = formatDateString(endDate);

  return (
    <article className={classes.articlePreview}>
      <div className={classes.articlePreview__container}>
        <div className={classes.container__img}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={classes.container__info}>
          <div className={classes.header}>
            <p className={classes.location}>
              {locationIcon}
              <span className={classes.location__name}>{location}</span>
              <a className={classes.location__link} href={googleMapsUrl}>
                View on Google Maps
              </a>
            </p>
          </div>
          <h2 className={classes.heading}>{title}</h2>
          <p className={classes.dates}>
            {startDateString} - {endDateString}
          </p>
          <p className={classes.description}>{description}</p>
        </div>
      </div>
    </article>
  );
};

export type ArticlePreviewProps = {
  title: string;
  location: string;
  googleMapsUrl: string;
  startDate: Date;
  endDate: Date;
  description: string;
  imageUrl: string;
};

const formatDateString = (date: Date) => {
  return postProcessDataFormat(
    date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  );
};

const locationIcon = (
  <svg
    width="7"
    height="10"
    viewBox="0 0 7 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes.location__icon}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002M3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0"
      fill="#F55A5A"
    />
  </svg>
);
