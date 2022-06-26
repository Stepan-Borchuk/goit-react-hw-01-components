import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import friends from './friends.json';
import {BsFillCircleFill} from 'react-icons/bs'

export const Friendlist = () => {
    return (
   
        friends.map(friends => 
               <li className={styles.item}>
                <span  className={friends.isOnline ? styles.statusOn : styles.statusOff }><BsFillCircleFill /></span>
                <img className={styles.avatar} src={friends.avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{ friends.name}</p>
                </li>
        )
    )
} 

Friendlist.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};
