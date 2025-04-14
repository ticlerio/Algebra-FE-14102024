import React from 'react';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: null,
    };
  }
  handlebuttonClick(br) {
    this.setState({ number: br });
  }
  render() {
    const { number } = this.state;

    return (
      <div className="App">
        <h1>Hello conditional rendering!</h1>
        <button onClick={() => this.handlebuttonClick(1)}>1</button>
        <button onClick={() => this.handlebuttonClick(2)}>2</button>
        <button onClick={() => this.handlebuttonClick(3)}>3</button>
        <ConditionalRendering broj={number} />
      </div>
    );
  }
}

export default App;
