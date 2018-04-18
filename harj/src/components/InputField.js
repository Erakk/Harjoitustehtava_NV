import React from 'react';
import './InputField.css';

export default class InputField extends React.Component {
   //lataa heti
    constructor(props) {
        super(props)

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    addMessage(message){
        if (message.length > 0 ){
            this.props.addMessage(message);
            this.setState({value: ''});
        }
    }

    render(){
        return (
            <div>
                <textarea className="txt-area-input" placeholder='Kirjoita tähän...' rows = "4" cols = "50" maxLength = "200" type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="btn btn-primary>" onClick={() => this.addMessage(this.state.value)}>Submit</button>
            </div>
        );
    }
}