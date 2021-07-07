import React from 'react';

function UserCard(props){
    return(  
      <div>
        <h2>{props.user.login}</h2>
        <p>{props.user.location}</p>
        <p>{props.user.url}</p>
        <div>
        {props.followers.map(follower => (<div key={follower.id}>{follower.login}</div>
        ))}
      </div>
    </div>
    );
}
   



export default UserCard;