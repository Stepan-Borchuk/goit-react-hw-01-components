import { Description } from "./Description"
import PropTypes from 'prop-types';
import { Stats } from "./Stats"



export const Profile = ({ avatar, username, tag, location, stats }) => (

        <div>
        <Description
            avatar={avatar}
            username={username}
            tag={tag}
            location={location} />
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

