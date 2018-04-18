import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';
import InputField from './components/InputField';
import InputMessage from './components/InputMessage';

//import Field from './components/Field.js';
//import Message from './components/Message.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      messages: [
        {id: 0, text: "eka"},
        {id: 1, text: "toka"}
      ],
      nextId: 3
    }

    this.addMessage = this.addMessage.bind(this);
    this.removeMessage= this.removeMessage.bind(this);
  }

  addMessage(messageText){
    let messages = this.state.messages.slice();
    messages.push({id: this.state.nextId, text: messageText});
    this.setState({
      messages: messages,
      nextId: ++this.state.nextId
    })
  }

  removeMessage(id){
    this.setState({
      messages: this.state.messages.filter((message, index) => message.id !== id)
    })
  }

  render() {
    return (
      <div className="App-walls">

          {
            this.state.messages.map((message) => {
              return <InputMessage message={message} key={message.id} id={message.id} removeMessage = {this.removeMessage}/>
            })
          }

        <InputField messageText="" addMessage={this.addMessage}/>

      </div>
    );
  }
}

export default App;
