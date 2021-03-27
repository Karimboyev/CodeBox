import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
import Register from './components/Register';
import Home from './pages/Home';
import Users from './pages/Users';
class ChangePage extends Component{
    constructor(){
        super();
        this.state={
            path:'/',
            name:'',
            users:JSON.parse(localStorage.getItem(localStorage.key(0)))!=null?JSON.parse(localStorage.getItem(localStorage.key(0))):[],
        }
    }

    changeName=(e)=>{
        this.setState({name:e.target.value})
    };
    addUser = (user) => {
        let key=localStorage.key(0);
        this.state.users.push(user);
        this.setState({ users: this.state.users });
        localStorage.setItem(key,JSON.stringify(this.state.users));
    };

    changePath=(e)=>{
        this.setState({path:e})
    }

    componentDidUpdate(nextProps, nextState){
        
    }

    render(){
        return(
            <Router>
                <Switch>
                <Route
                    path="/:name/:id/Cabinet"
                    render={({ match }) => <Users name={match.params.name} users={this.state.users[match.params.id]} />}
                />
                    <Route path="/logon">
                        <Register changeName={this.changeName}  addUser={this.addUser} users={this.state.users} />
                    </Route>
                    <Route path="/">
                        <Home changePath={this.changePath} />
                    </Route>
                    
                </Switch>
            </Router>
        )
    }
}
export default ChangePage;