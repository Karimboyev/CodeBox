import React,{Component} from 'react';
import {Container} from 'reactstrap';
import '../assets/sass/footer.scss';
import Brand from '../assets/img/footer.svg';
import Facebook from '../assets/img/facebook.png';
import Instagram from '../assets/img/instagram.png';
import Telegram from '../assets/img/telegram.png';
import Youtube from '../assets/img/youtube.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Footer extends Component{
    render(){
        return(
            <Router>
                <div className='footer'>
                <Container>
                    <div className='row'>
                        <div className='mediaCol'>
                            <img src={Brand} alt=""/>
                            <Link to='/loyhaHaqida'>Loyha haqida</Link>
                            <Link to='/dasturlashTillari'>Dasturlash tillari</Link>
                            <Link to='/narxlar'>Narxlar</Link>
                            <Link to='/bizhaqimizda'>Biz harimizda</Link>
                        </div>
                        <div className='footerIcon'>
                            <img src={Facebook} alt=""/>
                            <img src={Instagram} alt=""/>
                            <img src={Telegram} alt=""/>
                            <img src={Youtube} alt=""/>
                        </div>
                        <p>© “Personal Development Process” MCHJ</p>
                    </div>
                </Container>
            </div>
            </Router>
            
        )
    }
}
export default Footer;