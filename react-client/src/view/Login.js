import React, {Component} from "react";
import {Button, Checkbox, Divider, Form, Grid, Segment} from "semantic-ui-react";

const options = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'f1', text: 'Female', value: 'female'},
    {key: 'f2', text: 'Female', value: 'female'},
    {key: 'f3', text: 'Female', value: 'female'},
]

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', email: '', submittedName: '', submittedEmail: ''}
    }

    render() {
        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Form onSubmit={this.handleSubmit}>
                        <Segment padded>
                            <Form.Input name="name" label='First Name' placeholder='First Name' type='text'
                                        value={this.state.name} onChange={this.handleChange}/>
                            <Form.Input name="email" label='Last Name' placeholder='Last Name' type='text'
                                        value={this.state.email} onChange={this.handleChange}/>
                            <Form.Select fluid label='Gender' options={options} placeholder='Gender'/>
                            <Form.Input name="password" label='Enter Password' type='password'/>
                            <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions'/>
                            </Form.Field>

                            <Button primary fluid onClick={() => {
                                this.props.updateData(!this.props.isAuthenticated)
                            }}>Test Login</Button>
                            <Divider horizontal>Or</Divider>
                            <Button primary fluid content='Submit' type='serverLogin'>Server Login</Button>
                            <Divider horizontal>Or</Divider>
                            <Button secondary fluid type='logout'>Sign Up Now</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }

    handleChange = (e, {name, value}) => this.setState({[name]: value})

    handleSubmit = () => {
        const {firstName, lastName} = this.state

        this.setState({submittedName: firstName, submittedEmail: lastName})
        console.log(this.state)
    }
}

export default Login;