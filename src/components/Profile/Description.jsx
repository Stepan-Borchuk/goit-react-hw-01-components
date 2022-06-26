import { Profileimage } from "./Profileimage"

export const Description = ({ avatar, username, tag, location}) => {
    return ( 
        <div>
            <Profileimage
                avatar={avatar} />
            <p class="name">{username}</p>
            <p class="tag">@{tag}</p>
            <p class="location">{location}</p>
        </div>

    )
    
}