const User = ({ user }) => {
  const [title, pronoun] =
    user.gender === 'female' ? ['Miss', 'her'] : ['Mister', 'him'];

  return (
    <div className='user'>
      <img src={user.picture.large} alt='img' />
      <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <div>{`${title} of age ${user.dob.age} from ${user.location.country}`}</div>
      <div>
        {`Contact ${pronoun} now!`}
        <ul>
          <li>{user.email}</li>
          <li>{user.cell}</li>
        </ul>
      </div>
    </div>
  );
};

export default User;
