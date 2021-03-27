import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserSection1 from '../components/UsersSection1';
import UsersSection2 from '../components/UsersSection2';
import UsersSection3 from '../components/UsersSection3';
class Users extends Component{
  constructor(){
    super();
    this.state={
      user:{
          name:"",
          surname:"",
          email:"",
          password:"",
       }
    }
  }

  componentDidMount(){
    let elements=this.props.users;
    if (elements.length>0) {
     this.setState({user:elements})
    }
  }

  render(){
    return(
      <div>
        <Header userInfo={this.props.users}/>
        <UserSection1 />
        <UsersSection2 />
        <UsersSection3 />
        <Footer />
      </div>
    )
  }
}
export default Users;
