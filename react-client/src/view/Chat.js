import React, {Component} from "react";
import SockJsClient from 'react-stomp';
import {Button, Comment, Grid, Icon, Input} from 'semantic-ui-react'

class Chat extends Component {

    state = {
        message: [],
        value: ""
    }

    sendMessage = (msg) => {
        console.log(112)
        this.clientRef.sendMessage("/all", "ff");
    }


    handleInputChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({message: [...this.state.message, this.state.value], value: ""})
    }


    render() {
        return (
            <div>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Input fluid onChange={this.handleInputChange.bind(this)} type='text' placeholder='Input...'
                               value={this.state.value} action>
                            <input/>
                            <Button onClick={() => {
                                console.log(11),
                                this.sendMessage, this.handleSubmit
                            }} type='submit'>Submit</Button>
                        </Input>
                        <Comment.Group>

                            {this.state.message.map((item) =>
                                <Comment key={item}>
                                    <Comment.Avatar as='a'
                                                    src='https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg'/>
                                    <Comment.Content>
                                        <Comment.Author>Tom Lukic</Comment.Author>
                                        <Comment.Text>
                                            {item}
                                        </Comment.Text>
                                        <Comment.Actions>
                                            <Comment.Action>Reply</Comment.Action>
                                            <Comment.Action>Save</Comment.Action>
                                            <Comment.Action>Hide</Comment.Action>
                                            <Comment.Action>
                                                <Icon name='expand'/>
                                                Full-screen
                                            </Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            )}
                        </Comment.Group>

                    </Grid.Column>
                </Grid>

                <SockJsClient url='http://192.168.1.103:8080/handler' topics={["/topic/all"]}
                              onMessage={(msg) => {
                                  this.setState({
                                      message: [...this.state.message, msg.colorString]
                                  });
                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
            </div>
        );
    }
}

export default Chat;