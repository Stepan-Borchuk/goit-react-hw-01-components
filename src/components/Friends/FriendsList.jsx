import { Friendlist } from './FriendList';
import styles from './FriendList.module.css';

export const FriendsList = ({friends}) => {
  return (
    <ul className={styles.friendList}>
      <Friendlist friends={friends} />
    </ul>
  );
};
