import React, {Component} from "react";
import {Button, Checkbox, Form, Grid} from "semantic-ui-react";

const options = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
]

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='First Name'/>
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder='Last Name'/>
                        </Form.Field>
                        <Form.Select fluid label='Gender' options={options} placeholder='Gender'/>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions'/>
                        </Form.Field>
                        <Button onClick={this.loginButton} type='login'>Login</Button>
                        <Button onClick={this.logoutButton()} type='logout'>Logout</Button>
                        {/*{console.log(this.state.isAuthenticated)}*/}
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }

    loginButton() {
        this.props.onAuth()
    }

    logoutButton() {

    }
}

export default Login;