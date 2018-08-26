591c87f5 (wheercool 2018-08-26 11:59:37 +0300  1) import React, { Component } from 'react';
591c87f5 (wheercool 2018-08-26 11:59:37 +0300  2) import './App.css';
591c87f5 (wheercool 2018-08-26 11:59:37 +0300  3) import PageContainer from '../containers/PageContainer';
591c87f5 (wheercool 2018-08-26 11:59:37 +0300  4) import UserContainer from '../containers/UserContainer';
591c87f5 (wheercool 2018-08-26 11:59:37 +0300  5) 
591c87f5 (wheercool 2018-08-26 11:59:37 +0300  6) class App extends Component {
591c87f5 (wheercool 2018-08-26 11:59:37 +0300  7)   render() {
591c87f5 (wheercool 2018-08-26 11:59:37 +0300  8)     console.log('rerendered');
591c87f5 (wheercool 2018-08-26 11:59:37 +0300  9)     return (
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 10)       <div className="App">
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 11)         <header className="App-header">
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 12)           <h1 className="App-title">Мой топ фотографий</h1>
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 13)         </header>
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 14) 
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 15)         <div className="row">
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 16)           <div className="user-info">
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 17)             <UserContainer />
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 18)           </div>
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 19)         </div>
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 20)         {this.props.pageError ? (
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 21)           <p>{this.props.pageError}</p>
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 22)         ) : (
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 23)           <div className="ib page">
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 24)             <PageContainer />
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 25)           </div>
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 26)         )}
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 27)       </div>
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 28)     );
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 29)   }
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 30) 
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 31)   shouldComponentUpdate() {
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 32)     return false;
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 33)   }
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 34) }
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 35) 
591c87f5 (wheercool 2018-08-26 11:59:37 +0300 36) export default App;
