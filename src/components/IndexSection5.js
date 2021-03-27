import React,{Component} from 'react';
import { Container,Button} from 'reactstrap';
import '../assets/sass/indexSection5.scss';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class IndexSection5 extends Component{
    render(){
        return(
            <Container>
                <h1 data-aos="fade-up" data-aos-duration="1000">O’z rejangizni <br/> tanlang</h1>
                <div className="indexSection5">
                    <div className="row" data-aos="fade-up" data-aos-duration="1000">
                        <div className="col">
                            <div className="cardSection5">
                                <header>
                                    <h1 className='coursName'>Simple</h1>
                                    <h1>99.000 UZS</h1>
                                    <h4>Har 1 oyda to’lov</h4>
                                </header>
                                <main>
                                    <p>Bu ta’rif to’plamini aktivlashtirish orqali siz tizimdan 1 oy muddatda to’liqfoydalanishingiz mumkin.  Qaytaaktivlashtirish har 1 oy muddatda amalga oshiriladi.</p>
                                </main>
                                <footer>
                                    <Button>Obuna bo'lish</Button>
                                </footer>
                            </div>
                        </div>

                        <div className="col">
                            <div className="cardSection5">
                                <header>
                                    <h1 className='coursName'>Middle</h1>
                                    <h1>269.000 UZS</h1>
                                    <h4>Har 3 oyda to’lov</h4>
                                </header>
                                <main>
                                    <p>Bu ta’rif to’plamini aktivlashtirish orqali siz tizimdan 3 oy muddatda to’liqfoydalanishingiz mumkin.  Qaytaaktivlashtirish har 3 oy muddatda amalga oshiriladi.</p>
                                </main>
                                <footer>
                                    <Button>Obuna bo'lish</Button>
                                </footer>
                            </div>
                        </div>

                        <div className="col">
                            <div className="cardSection5">
                                <header>
                                    <h1 className='coursName'>Edvanced</h1>
                                    <h1>499.000 UZS</h1>
                                    <h4>Har 6 oyda to’lov</h4>
                                </header>
                                <main>
                                    <p>Bu ta’rif to’plamini aktivlashtirish orqali siz tizimdan 6 oy muddatda to’liq foydalanishingiz mumkin.  Qayta aktivlashtirish har 6 oy muddatda amalga oshiriladi.</p>
                                </main>
                                <footer>
                                    <Button>Obuna bo'lish</Button>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
export default IndexSection5;