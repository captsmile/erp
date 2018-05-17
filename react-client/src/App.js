import React, {Component} from 'react';
import Header from "./view/Header";
import {withRouter, Route} from 'react-router-dom'
import Login from "./view/Login";
import Home from "./view/Home";
import Chat from "./view/Chat";
import Footer from "./view/Footer";
import PrivateRoute from "./util/PrivateRoute";
import Dashboard from "./view/Dashboard";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            isAuthenticated: false,
            isLoading: false
        }
    }

    updateData = (value) => {
        this.setState({ isAuthenticated: value })
        this.props.history.push("/");
        //console.log(this.state.isAuthenticated)
    }

    render() {
        return (
            <div style={{display: "flex", minHeight: "100vh", flexDirection: "column"}}>
                <Header isAuthenticated={this.state.isAuthenticated} updateData={this.updateData}/>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/auth" render={(props) => <Login updateData={this.updateData} {...props}/>}/>
                <Route exact path="/chat" component={Chat}/>
                <PrivateRoute authenticated={this.state.isAuthenticated} path="/home" component={Home}></PrivateRoute>
                {/*{console.log(this.state.isAuthenticated)}*/}
                {/*<Footer/>*/}
            </div>
        );
    }

}

export default withRouter(App);
