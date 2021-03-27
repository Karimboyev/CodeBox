import React,{Component} from 'react';
import { Container,Button } from 'reactstrap';
import roundImg from '../assets/img/roundImg.png';
import '../assets/sass/indexSection4.scss';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class IndexSection4 extends Component{
    render(){
        return(
            <Container>
                <div className='indexSection4' data-aos="fade-up" data-aos-duration="1000">
                    <h1>Tizimdan foydalanuvchilar soni <br/>500+ dan ortiq. Siz ham ular <br/> safiga qo’shiling </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt ut labore et dolore magna <br/> aliqua. Ut diam quam nulla porttitor massa id neque aliquam <br/> vestibulum. Malesuada pellentesque elit eget gravida cum <br/> sociis natoque penatibus et. Vitae semper quis lectus nulla. <br/> Viverra vitae congue eu consequat ac felis donec et. Turpis <br/> egestas integer eget aliquet nibh praesent tristique. At auctor <br/> urna nunc id. Consectetur adipiscing</p>
                    <Button>Qo'shilish</Button>
                    <img src={roundImg} alt=""/>
                </div>
            </Container>
        )
    }
}
export default IndexSection4;