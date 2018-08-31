import * as React from 'react';

export class Animated2 extends React.Component {
  state = {
    value: -1
  };

  render() {
    return this.props.children(this.state.value, this.props);
  }
  componentDidMount() {
    this.step = (this.props.end - this.props.start) / this.props.duration;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate = t => {
    if (!this.startedAt) {
      this.startedAt = t;
    }
    const elipsed = t - this.startedAt;
    const value = this.props.start + this.step * elipsed;
    console.log(value);
    if (value <= this.props.end) {
      this.setState({
        value
      });
      requestAnimationFrame(this.animate);
    }
  };
}
