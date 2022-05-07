import { useState } from 'react';
import User from './components/User';
import userService from './services/randomUser';

const App = () => {
  const [user, setUser] = useState();

  const generateUser = () => {
    userService.getSingleUser().then((user) => {
      setUser(user);
      // console.log(user);
    });
  };

  return (
    <>
      {user ? (
        <User user={user} />
      ) : (
        <p>Click the button to get a new random user!</p>
      )}
      <button onClick={generateUser}>Click me!</button>
    </>
  );
};

export default App;
