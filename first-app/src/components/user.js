import PropTypes from "prop-types";

function User({ name, surname, isLogged, age, friends, adress }) {
  return (
    <>
      <h1>
        {isLogged ? `Selam ${name} ${surname}, ${age}` : `Giriş yapınız.`}
      </h1>
      {/* {friends.map((friend) => {
        const x = friend.id+2;
        return (
          <div key={friend.id}>
            {friend.id}- {friend.name}
          </div>
        );
      })} */}
      Adress: {adress.title} {adress.zip}
      <br />
      <br />
      {friends &&
        friends.map((friend) => (
          <div key={friend.id}>
            {friend.id}- {friend.name}
          </div>
        ))}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  friends: PropTypes.array,
  adress: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User.defaultProps = {
  age: "-",
};

export default User;
