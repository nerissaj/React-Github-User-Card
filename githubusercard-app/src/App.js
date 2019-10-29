import React from 'react';
import UsersCard from './UsersCard';
import axios from 'axios';
import FollowersCard from './FollowersCard';

import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      followers: []
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/nerissaj")
      .then(response => {
        //console.log(response.data);
        this.setState({
          user: response.data
        });
      })
      .catch(err => console.log(err))
  }
  componentDidUpdate = () => {

    axios
      .get(`https://api.github.com/users/nerissaj/followers`)
      .then(response => {
        //console.log("response");
        this.setState({ followers: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {/* <Search  changeUserName={this.changeUserName} /> */}
        <UsersCard user={this.state.user} />
        <FollowersCard followers={this.state.followers} />
      </div>
    );
  }
}


export default App;
// componentDidUpdate(prevProps, prevState) {
  //   if (prevState.user != - this.state.user) {
  //     if (this.state.user === 'nerissaj') {
  //       axios
  //         .get("https://api.github.com/users/")
  //         .then(response => {
  //           this.setState({
  //             user: response.data,
  //             followers: []
  //           })
  //         })
  //         .catch(err => console.log(err));
  //     }
  //   }
  //   if (prevProps.someValue !== this.props.someValue) {
  //   }
  // }
  // handleChanges = event => {
  //   this.setState({ user: event.target.value });
  // }