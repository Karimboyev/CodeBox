import React ,{Component} from 'react';
import { Container,Button } from 'reactstrap';
import '../assets/sass/indexSection3.scss';
import buttonArrow from '../assets/img/buttonArrow.png';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class IndexSection3 extends Component{
    render(){
        return(
            <Container>
                <h1 data-aos="fade-up" data-aos-duration="1000">O’zingiz uchun dunyoda mashxur <br/> dasturlash tillaridan birini <br/> tanlang</h1>
                <div className="row" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col">
                        <div className="cardSection3">
                            <header>
                                <h1>JAVA</h1>
                                <p>128 ta <span>topshiriq</span> | 38 ta <span>bo'lim</span></p>
                            </header>
                            <main>
                                <p>Java - silno tipirovannyy obyektno orientirovann yysag yazyk programmirovaniya, razrabotannyy kompaniey Sun Microsystems. V nastoyashchee vremya proekt matlenejit OpenSource i rasprof ranya yaetsya po litsenzii GPL. V OpenJDK vnosyat vklad krupnye kompanii, sochi kak - Oracle, RedHat, IBM, Google</p>
                            </main>
                            <footer>
                                    <Button>Kursni boshlash <img src={buttonArrow} alt=""/></Button>
                            </footer>
                        </div>
                    </div>

                    <div className="col">
                        <div className="cardSection3">
                            <header>
                                <h1>PYTHON</h1>
                                <p>122 ta <span>topshiriq</span> | 13 ta <span>bo'lim</span></p>
                            </header>
                            <main>
                                <p>Python - vysokourovnevyy yazyk programirova niya obshchego naznacheniya, orientirovannyy na povyshenie proizvoditelnosti razrabotchika i chitaemosti koda. Syntaxxd Python minimalis tichen. V toni vremya standartnaya biblioteka vklyuchaet bolshoy ob'yom poleznyx fonksiyont</p>
                            </main>
                            <footer>
                                    <Button>Kursni boshlash <img src={buttonArrow} alt=""/></Button>
                            </footer>
                        </div>
                    </div>

                    <div className="col">
                        <div className="cardSection3">
                            <header>
                                <h1>GO</h1>
                                <p>128 ta <span>topshiriq</span> | 38 ta <span>bo'lim</span></p>
                            </header>
                            <main>
                                <p>Go - kompilyumemyy multilogo yazyk program movaniya, razrabotannyy vnutri kompanii Google. Razrabotka Go nachalas v sentabr 2007 goda, ego neposredstvennym projektirovaniem zanima lis Robert Grizmer, Rob Pikk i Ken Thompson, zanimavshiesya do etogo proektom razrabotki </p>
                            </main>
                            <footer>
                                    <Button>Kursni boshlash <img src={buttonArrow} alt=""/></Button>
                            </footer>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}
export default IndexSection3;