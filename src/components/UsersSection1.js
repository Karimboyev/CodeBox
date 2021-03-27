import React, { Component } from 'react';
import { Container } from 'reactstrap';
import "../assets/sass/userSection1.scss";
import doneTask from '../assets/img/doneTask.png'
class UserSection1 extends Component{
    constructor(){
        super();
        this.state={
            doneTask:{
                today:0,
                all:0,
            },
            doneChapter:{
                today:0,
                all:0,
            },
            doneLanguage:{
                today:0,
                all:0,
            },
        }
    }

    render(){
        return(
            <Container>
                <div className='userTaskBox'>
                    <div>
                        <p>Bajarilgan topshiriqlar</p>
                        <h5>{this.state.doneTask.all}</h5>
                        <p><img src={doneTask} alt=""/> Bugun: {this.state.doneTask.today} ta</p>
                    </div>
                    <div>
                        <p>Bajarilgan topshiriqlar</p>
                        <h5>{this.state.doneTask.all}</h5>
                        <p><img src={doneTask} alt=""/> Bugun: {this.state.doneTask.today} ta</p>
                    </div>
                    <div>
                        <p>Bajarilgan topshiriqlar</p>
                        <h5>{this.state.doneTask.all}</h5>
                        <p><img src={doneTask} alt=""/> Bugun: {this.state.doneTask.today} ta</p>
                    </div>
                </div>
            </Container>
        )
    }
}
export default UserSection1;