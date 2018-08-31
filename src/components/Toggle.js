import * as React from 'react';

// Component with state
export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: this.props.defaultOpened || false
    };
  }

  render() {
    return this.props.children({
      isOn: this.state.opened,
      isOff: !this.state.opened,
      on: this.on,
      off: this.off,
      toggle: this.toggle
    });
  }

  on = () => {
    this.setState({ opened: true });
  };

  off = () => {
    this.setState({ opened: false });
  };
  toggle = () => {
    this.setState(({ opened }) => ({ opened: !opened }));
  };
}
