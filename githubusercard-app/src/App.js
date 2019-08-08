import React from 'react';
import UsersCard from './UsersCard';
import Search from './Users';

import './App.css';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      userName: "nerissaj",
      user:{},
      followers:[]
    };
  }

changeUserName = (userName) => {
this.setState({userName});
}
fetchUser = () => {
  fetch(`https://api.github.com/users/${this.state.userName}`)
  .then(response => response.json())
  .then(data => this.setState({user:data}));

} 
        fetchFollowers =() => {
          fetch(`https://api.github.com/users/${this.state.userName}/followers`)
          .then(res => res.json())
          .then(data => this.setState({followers:data}));
      }
      componentDidMount(){
        console.log("First Render (mounting)");
        this.fetchUser();
        this.fetchFollowers();
    }
    componentDidUpdate(prevProps, prevState){
      console.log(this.state);
      if(prevState.userName !== this.state.userName){
        this.fetchUser();
        this.fetchFollowers();

      }
    }
  
  render(){
    return(
      <div className="App">
        <Search  changeUserName={this.changeUserName} />
        <UsersCard user={this.state.user} followers={this.state.followers} />
      </div>
    );}
}
 
 
export default App;
