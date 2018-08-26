import React, { Component } from 'react';
import './App.css';
import PageContainer from '../containers/PageContainer';
import UserContainer from '../containers/UserContainer';

class App extends Component {
  render() {
    console.log('rerendered');
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фотографий</h1>
        </header>

        <div className="row">
          <div className="user-info">
            <UserContainer />
          </div>
        </div>
        {this.props.pageError ? (
          <p>{this.props.pageError}</p>
        ) : (
          <div className="ib page">
            <PageContainer />
          </div>
        )}
      </div>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
}

export default App;
