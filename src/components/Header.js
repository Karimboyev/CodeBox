import React,{Component} from 'react';
import brand from '../assets/img/headerBrand.svg';
import { Container,Button } from 'reactstrap';
import '../assets/sass/header.scss';
import '../assets/sass/media.scss';
import dropdownIcon from '../assets/img/dropdownIcon.png';
import search from '../assets/img/search.png';
import bell from '../assets/img/bell.png';
import userImg from '../assets/img/user.png';
import menuUser from '../assets/img/uchTaNuqta.png';

import headerMenu from '../assets/img/menu.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Header extends Component{
    constructor(){
        super();
        this.state={
            authorization:false,
            dropdown:false,
            dropdownList:"O'zbek tili",
            collapseButton:false,
            nav:false,
            user:{
                img:userImg,
                name:'Muhammad',
                surame:'Jumayev',
                password:'',
                phone:'',
                tarif:'',
                date:'',
            }
        }
    }

    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll);

        let element = this.props.userInfo;
        if(element!=null){
            this.setState({user:{img:this.props.userInfo.img? this.props.userInfo.img:userImg, name:this.props.userInfo.name,surname:this.props.userInfo.surname}});
            document.getElementById('dropdownLanguageBox').style.display='none';
            document.getElementById('RegisterButton').style.display='none';
            document.getElementById('headerUserPanel').style.display='flex';
            document.getElementsByClassName('headerRow')[0].style.padding='11.5px 0';
        }
        
    }

    componentWillUnmount(){
        window.removeEventListener("scroll",this.handleScroll)
    }

    handleScroll= () => {
        if (window.pageYOffset > 100) {
            if(!this.state.nav){
              this.setState({ nav: true });
            }
        }else{
            if(this.state.nav){
              this.setState({ nav: false });
            }
        }
      }

    collapseButton=()=>{
        if(this.state.collapseButton){
            this.setState({collapseButton:false});
            document.getElementById('headerRightItems').style.display='none';
            document.getElementById('headerList').style.display='none';
        } else {
            this.setState({collapseButton:true});
            document.getElementById('headerRightItems').style.display='block';
            document.getElementById('headerList').style.display='block';
        } 
    }

    dropDownClick=()=>{
        if(this.state.dropdown){
            document.getElementById('dropDownList').style.display='none';
            this.setState({dropdown:false})
        } else {
            document.getElementById('dropDownList').style.display='inline-block';
            this.setState({dropdown:true})
        }
    }

    changeLanguage=(e)=>{
        let lang=document.getElementsByClassName('languages');
        let list=document.getElementById('dropDownList');
        if(e=='en'){
            this.setState({dropdownList:'English'})
            for(let i=0;i<lang.length;i++){
                lang[i].classList.remove('languagesActive');
            }
            lang[0].classList.add('languagesActive');
        }
        if(e=='uz'){
            this.setState({dropdownList:"O'zbek tili"})
            for(let i=0;i<lang.length;i++){
                lang[i].classList.remove('languagesActive');
            }
            lang[1].classList.add('languagesActive');
        }
        if(e=='ru'){
            this.setState({dropdownList:'Русский'})
            for(let i=0;i<lang.length;i++){
                lang[i].classList.remove('languagesActive');
            }
            lang[2].classList.add('languagesActive');
        }
        this.setState({dropdown:false});
        list.style.display='none';
        
    }
    registerButton=()=>{
        document.getElementById('linkRegister').click();
    }

    render(){
        return(
            <header className={`${this.state.nav && 'NavFixed'}`}>
                <Router>
                    <Container>
                        <div className='headerRow'>
                        <img src={brand} alt=""/>
                        <div className='headerList' id='headerList'>
                            <div className='cols'>
                            <Link to='/loyhaHaqida'>Loyha haqida</Link>
                            <Link to='/dasturlashTillari'>Dasturlash tillari</Link>
                            <Link to='/narxlar'>Narxlar</Link>
                            </div>
                        </div>
                        <div className='headerRightItems' id='headerRightItems'>
                            <div className='dropdown' id='dropdownLanguageBox'>
                                <p id='dropDown' onClick={this.dropDownClick}>{this.state.dropdownList} <img src={dropdownIcon} alt=""/></p>
                                <div id="dropDownList">
                                    <p className='languages' onClick={()=>this.changeLanguage('en')}>Inglizcha</p>
                                    <p className='languages languagesActive' onClick={()=>this.changeLanguage('uz')}>O'zbek tili</p>
                                    <p className='languages' onClick={()=>this.changeLanguage('ru')}>Ruscha</p>
                                </div>
                            </div>
                            <Button id='RegisterButton' onClick={this.registerButton}>Ro’yxatdan o’tish</Button>
                            <Link id='linkRegister' to='/codebox/logon'></Link>
                            <div id='headerUserPanel'>
                                <div id='searchBox'><img src={search} alt=""/></div>
                                <div id='bellBox'><img src={bell} alt=""/></div>
                                <div id='userInfo'>
                                    <img id='userImg' src={this.state.user.img} alt=""/>
                                    <div className='userInfo'>
                                        <p>{this.state.user.name} {this.state.user.surname}<br/>
                                        <span>Tarif:{this.state.user.tarif} OY | {this.state.user.date}</span></p>
                                    </div>
                                    <img id='menuHeaderUser' src={menuUser} alt=""/>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='collapseButton' id='collapseButton' onClick={this.collapseButton}>
                            <img src={headerMenu} alt="" />
                        </div>
                    </Container>
                </Router>
            </header>
        )
    }
}
export default Header;