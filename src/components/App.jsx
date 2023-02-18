// data imports
import user from 'infoStorage/user.json';
import { Profile } from 'components/Profile/Profile';

import data from 'infoStorage/data.json';
import { Statistics } from 'components/Statistics/Statistics';

// on the page

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginBottom: '30px',
      }}
    >
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
