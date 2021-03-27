import React , {Component} from 'react';
import { Container } from 'reactstrap';
import Java from '../assets/img/Java.png';
import secondImg from '../assets/img/secondImg.png';
import thirdImg from '../assets/img/thirdImg.png';
import '../assets/sass/indexSection2.scss';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class IndexSection2 extends Component{
    render(){
        return(
            <Container>
                <h1 id='section2H1' data-aos="fade-up" data-aos-duration="1000">Dasturlashni amaliy <br/>
                tarzda CodeBox bilan o'rganing.</h1>
                <div className='section2Grid'>
                    <img id='firstImg' src={Java} alt=""  data-aos="fade-up" data-aos-duration="1000"/>
                    <div id='firstText' data-aos="fade-up" data-aos-duration="1000">
                        <h2>01. Dasturlash tilini tanlang.</h2>
                        <p>Hozirgi kunda eng ommabop dasturlash tillarini <br/> CodeBoxga kiritdik va buni doimiy tarzda <br/> yangilab boramiz.</p>
                    </div>
                    <img id='secondImg' src={secondImg} alt="" data-aos="fade-up" data-aos-duration="1000"/>
                    <div id='secondText' data-aos="fade-up" data-aos-duration="1000">
                        <h2>02. Topshiriqlarni bajarish <br/> orqali o'rganing.</h2>
                        <p>Dasturlash algoritmlari, suhbat uchun <br/> topshiriqlari va murakkab topshiriqlarni bajaring.</p>
                    </div>
                    <img id='thirdImg' src={thirdImg} alt="" data-aos="fade-up" data-aos-duration="1000"/>
                    <div id="thirdText" data-aos="fade-up" data-aos-duration="1000">
                        <h2>03. Yakunlangan dasturlash <br/> tiliga tegishli oid fraymvork <br/> o'rganing.</h2>
                        <p>Web, Mobile, Desktop va boshqa yo'nalishlarda <br/>dasturlash tili imkoniyatlaridan kelib chiqib <br/> fraymvork o'rganing.</p>
                    </div>
                </div>
            </Container>
        )
    }
}
export default IndexSection2;   