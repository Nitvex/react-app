import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: 422
    };
  }
  asyncFn = () => {
    return Promise.resolve(37);
  }
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFn()
    });
  }
  render() {
    return <h2>Hello React, {this.state.answer}!</h2>;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));