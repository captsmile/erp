import React, {Component} from 'react';
import {Button, Grid, Input} from "semantic-ui-react";

class Dashboard extends Component {

    state = {
        message: "",
        value: ""
    }

    handleInputChange(e) {
        console.log(e.target.value)
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value)
        this.setState({message: [...this.state.message, this.state.value]})
    }

    handleKeyUp(e) {
        //if (e.keyCode == 13) this.handleSubmit
    }

    render() {

        return (
            <Grid centered columns={2}>
                <Grid.Column>
                    <Input onChange={this.handleInputChange.bind(this)} style={{flex:1}} type='text' placeholder='Search...' action>
                        <input/>
                        <Button onClick={this.handleSubmit} type='submit'>Search</Button>
                    </Input>
                    {this.state.message}
                </Grid.Column>
            </Grid>
            /*<form onKeyUp={this.handleKeyUp}>
                <div className="ui two column centered grid">
                    <div className="column">
                        <div>DASHBOARD</div>
                        <div className="ui action input">
                            <input onChange={this.handleInputChange.bind(this)} type="text" placeholder="Input..."/>
                            <button onClick={this.handleSubmit} className="ui button">submit</button>
                        </div>
                        {this.state.message}</div>
                </div>
            </form>
*/
        );
    }
}

export default Dashboard;

/*

this.state.arrayvar.push(newelement);
this.setState({arrayvar:this.state.arrayvar});

this.setState(prevState => ({
    arrayvar: [...prevState.arrayvar, newelement]
}))


this.setState({arrayvar:[...this.state.arrayvar, newelement]});*/
