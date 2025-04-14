import React from 'react';
import './App.css';

import { Input, Message } from './components';
import { Scaledrone, MemberGenerator } from './services';
import membergenerator from './services/membergenerator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentMemberId: null,
    };

    const config = {
      member: MemberGenerator.get(),
      onInit: this.onInit,
      onMessageReceived: this.onMessageReceived,
    };
    console.log(config.member);
    this.drone = new Scaledrone(config);
  }

  onInit = (currentMemberId) => {
    this.setState({ currentMemberId });
  };
  onMessageReceived = (newMessage) => {
    const { messages } = this.state;
    this.setState({
      messages: [...messages, newMessage],
    });
  };
  render() {
    const { messages, currentMemberId } = this.state;
    return (
      <div className="app">
        <div className="header">
          <h1>My Chat App</h1>
        </div>
        <ul className="message-list">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              currentMemberId={currentMemberId}
            />
          ))}
        </ul>
        <Input onSendMessage={this.drone.sendMessage} />
      </div>
    );
  }
}

export default App;
