import styles from './Profile.module.css';

export const Profileimage = ({ avatar }) => {
  return <img src={avatar} alt="User avatar" className={styles.avatar} />;
};
