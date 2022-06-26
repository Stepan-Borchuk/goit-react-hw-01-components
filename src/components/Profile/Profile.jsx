import { Description } from "./Description"
import PropTypes from 'prop-types';
import { Stats } from "./Stats"
import styles from './Profile.module.css';



export const Profile = ({ avatar, username, tag, location, stats }) => (

        <div className={styles.profile}>
        <Description
            avatar={avatar}
            username={username}
            tag={tag}
            location={location} />,
        <Stats
            stats={stats} />
        </div>
)
    
Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

