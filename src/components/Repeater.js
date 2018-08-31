import * as React from 'react';

// Component w/o state
export class Repeater extends React.Component {
  render() {
    const { items, startRender, endRender } = this.props;
    return [
      startRender(items),
      items.map(this.props.children),
      endRender(items)
    ];
  }
}
