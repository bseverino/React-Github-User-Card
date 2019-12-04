import React from 'react';
import axios from 'axios';
import './App.css';

import SearchForm from './components/SearchForm';
import UserList from './components/UserList';

class App extends React.Component {
  state = {
    users: [],
    currentUser: 'bseverino',
    searchTerm: ''
  };

  handleSearch = e => {
    this.setState({
      searchTerm: e.target.value
    })
  };

  changeUser = e => {
    e.preventDefault();
    this.setState({
      currentUser: this.state.searchTerm,
      searchTerm: ''
    })
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        this.setState({
          users: [res.data]
        });
      })
      .catch(err => console.log('Error: ', err));

    axios
      .get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then(res => {
        res.data.map(user => {
          axios
            .get(user.url)
            .then(res => {
              this.setState({
                users: [...this.state.users, res.data]
              });
            })
            .catch(err => console.log('Error: ', err));
        });
      })
      .catch(err => console.log('Error: ', err));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser !== this.state.currentUser) {
      axios
      .get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        this.setState({
          users: [res.data]
        });
      })
      .catch(err => {
        console.log('Error: ', err);
        alert('User does not exist!');
      });

    axios
      .get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then(res => {
        res.data.map(user => {
          axios
            .get(user.url)
            .then(res => {
              this.setState({
                users: [...this.state.users, res.data]
              });
            })
            .catch(err => console.log('Error: ', err));
        });
      })
      .catch(err => console.log('Error: ', err));
    };
  };

  render() {
    console.log(this.state.currentUser);
    return (
      <div className="App">
        <h1>GitHub User Cards</h1>
        <SearchForm searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} changeUser={this.changeUser} />
        <UserList users={this.state.users} />
      </div>
    );
  };
};

export default App;
