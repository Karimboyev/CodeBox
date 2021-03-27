import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { Button, Container, Row } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

class Register extends Component {
    constructor(){
        super();
        this.state={
            path:"",
        }
    }
    handleValidSubmit=(event, values, errors)=> {
      let id=this.props.users.length;
      let k=true;
      let n=JSON.parse(localStorage.getItem(localStorage.key(0)))? JSON.parse(localStorage.getItem(localStorage.key(0))).length:1;
      let c=JSON.parse(localStorage.getItem(localStorage.key(0)))? JSON.parse(localStorage.getItem(localStorage.key(0))):[{email:''}];
      let key=localStorage.key(0);
      for(let i=0;i<n;i++){
        if(values.email==c[i].email){
          k=false;
        }
      }    
      if(k){
        if (values.password===values.rePassword) {
          this.props.addUser(values)
          this.setState({path:'/'+values.name+'/'+id+'/Cabinet'})

         document.getElementById("changePage").click();
      }else{
          alert("parollar bir xil emas!")
      }
      } else alert("bu email ro'yhatdan o'tgan!")
      
    
        
      }
    
  render() {
    return (
      <div>
       <Container>
       <AvForm
          onValidSubmit={this.handleValidSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}
        >
          <AvField
            type="text"
            label="Ismingiz"
            name="name"
            onChange={this.props.changeName}
            placeholder="Ism"
            validate={{
              required: { value: true, errorMessage: "Ism yozilishi shart!" },
            }}
          />
          <AvField
            type="text"
            label="Familiya"
            name="surname"
            placeholder="Familiya"
            validate={{
              required: {
                value: true,
                errorMessage: "Familiya yozilishi shart!",
              },
            }}
          />
          <AvField
            type="email"
            label="email"
            name="email"
            placeholder="email"
            validate={{
              required: { value: true, errorMessage: "email yozilishi shart!" },
            }}
          />
          <AvField
            type="password"
            label="password"
            name="password"
            placeholder="password"
            validate={{
              required: { value: true, errorMessage: "password yozilishi shart!" },
            }}
          />
          <AvField
            type="password"
            label="re password"
            name="rePassword"
            placeholder="re password"
            validate={{
              required: { value: true, errorMessage: "re password yozilishi shart!" },
            }}
          />

          <Button color="primary">Submit</Button>
        </AvForm>
        <Link to={this.state.path} id="changePage" style={{visibility:"hidden"}}></Link>
   </Container>    
          </div>
    );
  }
}

export default Register;
