import { Profile } from "./Profile/Profile";
import data from './Statistics/data.json'
// import friends from './Friends/friends.json'
// import transaction from './Transactions/transactions.json'
import user from './Profile/user.json';
import { Statistics } from "./Statistics/Statistics";




export const App = () => {
  return (
    <body>
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      stats={user.stats} />

      <Statistics
        title = "Upload stats"
        stats={data} />
    </body>
   
  
    


  
  )
};


