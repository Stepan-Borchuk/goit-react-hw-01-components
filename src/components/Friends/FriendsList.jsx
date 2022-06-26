import { Friendlist } from "./FriendList"
import styles from './FriendList.module.css';

export const FriendsList = () => {
    return (
        <ul className={styles.friendList}>
            <Friendlist/>
        </ul>
    
    )
}
