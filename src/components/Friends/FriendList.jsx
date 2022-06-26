import PropTypes from 'prop-types';

import friends from './friends.json';

export const Friendlist = () => {
    return (
   
        friends.map(friends => 
               <li class="item">
                <span class="status">{friends.isOnline}</span>
                <img class="avatar" src={friends.avatar} alt="User avatar" width="48" />
                <p class="name">{ friends.name}</p>
                </li>
        )
    )
} 

Friendlist.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};
