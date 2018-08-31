import React, { Component } from 'react';
import './App.css';
import PageContainer from '../containers/PageContainer';
import UserContainer from '../containers/UserContainer';
import { Repeater } from './Repeater';
import { Toggle } from './Toggle';
import { Animated } from './Animated';
import { Animated2 } from './Animated2';
import './Canvas.css';

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
        <h1>Render props</h1>
        <Repeater
          items={[1, 2, 3, 4]}
          startRender={() => <h1>Start</h1>}
          endRender={() => <p>End</p>}
        >
          {(item, index) => <span key={index}>-{item}-</span>}
        </Repeater>

        <Toggle>
          {({ isOn, toggle, on, off }) =>
            isOn ? (
              <button onClick={off}>+</button>
            ) : (
              <button onClick={on}>-</button>
            )
          }
        </Toggle>

        <h1>Nested example</h1>
        <div className="canvas">
          <Animated start={0} end={2 * Math.PI} duration={30000}>
            {x => (
              <Animated start={0} end={2 * Math.PI} duration={30000}>
                {y => (
                  <Toggle>
                    {({ isOn, toggle, on, off }) =>
                      isOn ? (
                        <button
                          className="figure"
                          onClick={off}
                          style={{
                            left: Math.sin(x) * 100 + 400,
                            top: Math.cos(y) * 100 + 300
                          }}
                        >
                          +
                        </button>
                      ) : (
                        <button
                          className="figure"
                          onClick={on}
                          style={{
                            left: Math.sin(x) * 100 + 400,
                            top: Math.cos(y) * 100 + 300
                          }}
                        >
                          -
                        </button>
                      )
                    }
                  </Toggle>
                )}
              </Animated>
            )}
          </Animated>
        </div>
        <h3>Nested with instance methods</h3>
        <div className="canvas">
          <Animated start={0} end={2 * Math.PI} duration={3000}>
            {this.xRender}
          </Animated>
        </div>

        <h1>Nested with additional props</h1>
        <div className="canvas">
          <Animated2 start={0} end={2 * Math.PI} duration={3000}>
            {this.xRender2}
          </Animated2>
        </div>
      </div>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
  xRender = x => {
    this.x = x;
    return (
      <React.Fragment>
        <Animated start={0} end={2 * Math.PI} duration={3000}>
          {this.yRender}
        </Animated>
      </React.Fragment>
    );
  };
  yRender = y => {
    const x = this.x;
    return (
      <div
        className="figure circle"
        style={{
          left: Math.sin(x) * 100 + 400,
          top: Math.cos(y) * 100 + 300
        }}
      />
    );
  };
  xRender2 = x => {
    return (
      <Animated2 start={0} end={2 * Math.PI} duration={3000} x={x}>
        {this.yRender2}
      </Animated2>
    );
  };

  yRender2 = (y, { x }) => (
    <div
      className="figure circle"
      style={{
        left: Math.sin(x) * 100 + 400,
        top: Math.cos(y) * 100 + 300
      }}
    />
  );
}

export default App;
