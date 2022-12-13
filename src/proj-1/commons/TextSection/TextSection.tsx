import classes from './TextSection.module.scss';

export const TextSection = ({ title, text }: TextSectionProps): JSX.Element => {
  const sectionText =
    typeof text === 'string' ? (
      <p>{text}</p>
    ) : (
      text.map((paragraph, index) => <p key={index}>{paragraph}</p>)
    );

  return (
    <section className={classes.section}>
      <h2>{title}</h2>
      {sectionText}
    </section>
  );
};

export type TextSectionProps = {
  title: string;
  text: string | string[];
};
