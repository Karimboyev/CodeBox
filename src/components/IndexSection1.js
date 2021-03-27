import React,{Component} from 'react';
import { Container,Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
import '../assets/sass/indexSection1.scss';
import videoImg from '../assets/img/videoImg.svg';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class IndexSection1 extends Component{
    constructor(){
        super();
        this.state={
            path:'',
            email:'',
            password:'',
        }
    }
    changePhone=(e)=>{
        this.setState({email:e.target.value});
    }

    changePassword=(e)=>{
        this.setState({password:e.target.value});
    }
    submit=(values)=>{
        values=this.state;
        let a=true;
        let n=JSON.parse(localStorage.getItem(localStorage.key(0)))? JSON.parse(localStorage.getItem(localStorage.key(0))).length:1;
        let c=JSON.parse(localStorage.getItem(localStorage.key(0)))? JSON.parse(localStorage.getItem(localStorage.key(0))):[{email:''}];
        let key=localStorage.key(0);
          for(let i=0; i<n;i++){
              if(values.email==JSON.parse(localStorage.getItem(key))[i].email){
                  if(values.password==JSON.parse(localStorage.getItem(key))[i].password){
                      this.setState({path:'/'+JSON.parse(localStorage.getItem(key))[i].name+'/'+i+'/Cabinet'})
                      document.getElementById('changePage').click();
                      a=false; break;
                  }
              } 
          }
          if(a) alert("email yoki parolingiz xato!")
    }

    render(){
        return(
            <Container>
                <div className="sectionForm" data-aos="fade-up" data-aos-duration="1000">
                    <h1>Agar bajarishdan qo’rqsangiz<br/>
                    buni albatta bajarib ko’ring</h1>
                    <form action="#">
                        <label id="telLabel" htmlFor="telphone" />
                        <input id="telInput" name='telphone' type="email" onChange={this.changePhone} />
                        <hr/>
                        <input id="passwordInput" name='password' type="password" onChange={this.changePassword} />
                        <label id="passwordLabel" htmlFor="password" />
                        <div id='buttonRow'>
                        <Button id="sectionKirish" onClick={this.submit}>Kirish</Button>
                        <label className='checkboxLabel'>
                            <input id="checkbox" type="checkbox"/>
                            <span className='sliderCheckbox'></span>
                        </label>
                        <p>Meni eslab qol</p>
                        </div>
                        
                        
                    </form>
                    <Link to={this.state.path} id="changePage" style={{visibility:"hidden"}}></Link>
                    <img src={videoImg} alt=""/>
                </div>
            </Container>
            
        )
    }
}
export default IndexSection1;