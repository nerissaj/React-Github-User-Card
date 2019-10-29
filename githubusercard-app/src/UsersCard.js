import React from 'react';


function UserCard(props) {
  return (
    <div className="user">
      <img src={props.user.avatar_url} alt="github pic" />

      <h2>{props.user.login}</h2>
      <p>{props.user.location}</p>
      <p>followers:{props.user.followers}</p>
      <p>following:{props.user.following}</p>

    </div>
  );
}




export default UserCard;