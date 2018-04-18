import React from 'react';
import './InputMessage.css';


export default class InputMessage extends React.Component {
    constructor(props){
        super(props);
    }

    removeMessage(id){
        this.props.removeMessage(id);
    }

    render(){
        return (
            <div className = "messageWalls">
                <textarea className="txt-area-message"  rows = "4" cols = "50" maxLength = "200" type="text" value={this.props.message.text}  />
               
                <button className="removeMessage" onClick = {(e)=> this.removeMessage(this.props.id)}>remove</button>
            </div>
        )
    }
}