import React from 'react';
import axios from 'axios';
import './App.css';

import UserList from './components/UserList';

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/bseverino')
      .then(res => {
        this.setState({
          users: [...this.state.users, res.data]
        });
      })
      .catch(err => console.log('Error: ', err));

    axios
      .get('https://api.github.com/users/bseverino/followers')
      .then(res => {
        console.log(res);
        res.data.map(user => {
          axios
            .get(user.url)
            .then(res => {
              console.log(res);
              this.setState({
                users: [...this.state.users, res.data]
              });
            })
            .catch(err => console.log('Error: ', err));
        });
      })
      .catch(err => console.log('Error: ', err));
  };

  render() {
    console.log(this.state.users);

    return (
      <div className="App">
        <UserList users={this.state.users} />
      </div>
    );
  };
};

export default App;
