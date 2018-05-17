import React, {Component} from 'react';
import {Button, Comment, Grid, Icon, Input} from "semantic-ui-react";

class Dashboard extends Component {

    state = {
        message: [],
        value: ""
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
            <Grid centered columns={2}>
                <Grid.Column>
                    <Input fluid onChange={this.handleInputChange.bind(this)} type='text' placeholder='Input...'
                           value={this.state.value} action>
                        <input/>
                        <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
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
        );
    }
}

export default Dashboard;