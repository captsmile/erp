import React, {Component} from "react";
import SockJsClient from 'react-stomp';
import { Button } from 'semantic-ui-react'

class Chat extends Component {

    state = {
        message: ""
    }

    sendMessage = (msg) => {
        this.clientRef.sendMessage("/all", "ff");
    }


    render() {

        return (
            <div>
                <Button color='blue' onClick={this.sendMessage}>send</Button>
                <SockJsClient url='http://localhost:8080/handler' topics={["/topic/all"]}
                              onMessage={(msg) => {
                                  console.log(msg.colorString);
                                  this.setState({message: this.state.message + msg.colorString + " "});
                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
                {this.state.message}
            </div>
        );
    }
}

export default Chat;