import React from 'react';

function UserCard(props){
    console.log(props);
    return(
        <>
        {props.users.map(user =>(
            <div key={users.id} className="users">
                <img src={avatar_url}
            </div>
        ))}
    )
}
    state =
    users= []
    
};
componentDidMount = () => {
    fetchUsers().then(json => {
        this.setState({users: json.features});
    });
};
onFilter(event){
    searchUsers(event).then(json =>{
        this.setState({users: json.features});
    });
};
export default UserCard;