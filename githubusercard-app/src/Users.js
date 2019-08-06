import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/nerissaj')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render(){
      return(
         <div>
              {this.state.users.map(user => (

              <div key={user.id}>{user.login}} </div>
              ))}
</div>
  
export default Users;

