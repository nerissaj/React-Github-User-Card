import React from 'react'

export default function FollowersCard(props) {
    return (
        <div className="followers">
            {props.followers && props.followers.map(follower => (<div key={follower.id}>

                <h1>{follower.login}</h1>
                <p>{follower.url}</p></div>
            ))}
        </div>
    )

}
