import React from 'react';
import Users from './Users';

import './App.css';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      users:[]
    };
  }
fetchUsers =() =>{
  fetch('https://api.github.com/users/nerissaj/followers')
  .then(response =>{
    return response.json();
  })
  .then(users => console.log(users))
  .catch(err=>{
    console.log(err)
  });
}
  // componentDidMount(){
  //   this.setState({Users:data});
  // }
  // componentDidUpdate(prevProps){
  //   if (this.props.userID !==prevProps.userID)
  //   this.fetchData(this.props.userID);
  // }
  // if (prevState.users !==this.state.users)
  render(){
    this.fetchUsers();
  return (
   
    <div className="App">
      <Users />
    </div>
  );
}
}
export default App;
