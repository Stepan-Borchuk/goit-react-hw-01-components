import { Profile } from './Profile/Profile';
import data from './Statistics/data.json';
import transactions from './Transactions/transactions.json';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/FriendsList';
import { TransactionHistory } from './Transactions/TransactionHistory';
// import { Friends } from "./Friends/Friends";

export const App = () => {
  return (
    <body>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Friends/> */}
      <FriendsList />
      <TransactionHistory items={transactions} />;
    </body>
  );
};
