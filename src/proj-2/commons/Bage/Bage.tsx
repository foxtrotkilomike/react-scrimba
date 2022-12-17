import classes from './Bage.module.scss';

export const Badge = ({ text }: BadgeProps): JSX.Element => {
  return <div className={classes.badge}>{text}</div>;
};

type BadgeProps = {
  text: string;
};
