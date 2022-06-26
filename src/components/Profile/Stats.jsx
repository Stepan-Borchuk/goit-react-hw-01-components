export const Stats = ({stats}) => {
    return (
        <ul>
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{stats.views}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
            </li>
        </ul>
          
    )
    
}