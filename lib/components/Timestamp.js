import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.Component {
    static timeDisplay = timestamp => timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    shouldComponentUpdate(nextProps) {
      return this.timeDisplay(this.props.timestamp) !== this.timeDisplay(nextProps.timestamp);
    }
    render() {
      return (
        <div>{this.props.timestamp}</div>
      );
    }
}

function extraProps(store, originalProps) {
  return {
    timestamp: Timestamp.timeDisplay(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(Timestamp);