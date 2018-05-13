import React, {Component} from 'react';

class App extends Component {

    state ={
        message: ""
    }

    render() {

        return (
            <div className="App">
                <div>DASHBOARD</div>
                <input type="text"/>
                <button onClick={this.sendMsg}>submit</button>
                {this.state.message}
            </div>
        );
    }

    sendMsg = (e) => {
        e.preventDefault();
        console.log(11);
        this.setState({message: this.state.message + "1"})
    }
}

export default App;
