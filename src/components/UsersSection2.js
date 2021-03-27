import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import '../assets/sass/userSection2.scss';
import buttonArrow from '../assets/img/buttonArrow.png';
class UsersSection2 extends Component{
    constructor(){
        super();
    }

    addCourse=()=>{
        document.getElementsByClassName('modalAddCourse')[0].style.display='block';
    }
    closeModal=()=>{
        document.getElementsByClassName('modalAddCourse')[0].style.display='none';
    }

    componentDidMount(){
        window.onclick = function(event) {
            let modal=document.getElementsByClassName('modalAddCourse')[0];
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    }

    render(){
        return(
            <div>
                <Container>
                    <div className='usersSection2'>
                        <h1>Xozirda sizda kurslar mavjud emas</h1>
                        <div className='userCourses'>
                            <div className='col'>
                                <div className='card' onClick={this.addCourse}>
                                    <span>+ Kurs yaratish</span>
                                </div>
                            </div>
                        </div>
                    </div>        
                </Container>
                
                <div className='modalAddCourse'>
                    <Container>
                    <div className="row">
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
                    <span class="close" onClick={this.closeModal}>&times;</span>
                </div>
                
                    </Container>
                </div>
            </div>
                
            

        )
    }
}
export default UsersSection2;