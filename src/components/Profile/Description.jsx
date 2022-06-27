import { Profileimage } from './Profileimage';
import styles from './Profile.module.css';

export const Description = ({ avatar, username, tag, location }) => {
  return (
    <div className={styles.description}>
      <Profileimage avatar={avatar} />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};
