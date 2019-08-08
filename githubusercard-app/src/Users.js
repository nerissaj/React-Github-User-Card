 import React from 'react';
 import Button from '@material-ui/core/Button';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state={
      search:"",
    };
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit = event =>{
    event.preventDefault();
    this.props.changeUserName(this.state.search);
    this.setState({search:''});
  }
  render(){
return(
  <form onSubmit={this.handleSubmit}>
    <input type="text" 
    name="search"
    placeholder="search"
    value={this.state.search}
    onChange={this.handleChange} />
    <Button variant="contained" color="primary" type="submit">Search for a user</Button>
  </form>
);
}
}

 export default Search;

