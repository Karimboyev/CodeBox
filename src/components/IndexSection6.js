import React,{Component} from 'react';
import '../assets/sass/indexSection6.scss';
import leftButtonIcon from '../assets/img/leftButton.png';
import rightButtonIcon from '../assets/img/rightButton.png';
import sliderImg from '../assets/img/sliderImg.svg';
import { Container } from 'reactstrap';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class IndexSection6 extends Component{
    constructor(){
        super();
        this.state={
            index:1,
            animationsActive:'',
            animationsBack:'',
            animationsNext:'',
        }
    }

    showSlider=(n)=>{
        let sliders=document.getElementsByClassName('slider');
        for(let i=0;i<sliders.length;i++){
            sliders[i].style.display='none';
        }
        if(n>0 && n<=sliders.length){
            for(let k=0;k<sliders.length;k++){
                sliders[k].classList.remove('backSlider','nextSlider','active','activeAnimatonRight','activeAnimationLeft','backAnimationRight','backAnimationLeft','nextAnimationRight','nextAnimationLeft');
            }
            if(this.state.index>1 && this.state.index<sliders.length){
                sliders[this.state.index-1].classList.add('active',this.state.animationsActive);
                sliders[this.state.index-2].classList.add('backSlider',this.state.animationsBack);
                sliders[this.state.index].classList.add('nextSlider',this.state.animationsNext);
            } else if(this.state.index==sliders.length){
                sliders[this.state.index-1].classList.add('active', this.state.animationsActive);
                sliders[this.state.index-2].classList.add('backSlider',this.state.animationsBack);
                sliders[0].classList.add('nextSlider',this.state.animationsNext);
            } else if(this.state.index==1) {
                sliders[this.state.index-1].classList.add('active', this.state.animationsActive);
                sliders[sliders.length-1].classList.add('backSlider',this.state.animationsBack);
                sliders[this.state.index].classList.add('nextSlider',this.state.animationsNext);
            }
        } 
    }
    countSlider=(n)=>{
        if(n==1){
            this.setState({animationsActive:'activeAnimatonRight'});
            this.setState({animationsBack:'backAnimationRight'});
            this.setState({animationsNext:'nextAnimationRight'});
        }  else{
            this.setState({animationsActive:'activeAnimationLeft'});
            this.setState({animationsBack:'backAnimationLeft'});
            this.setState({animationsNext:'nextAnimationLeft'})
        }
        if(this.state.index==3 && n==1){
            this.setState({index:1});
            console.log('index=3 ',this.state.index)
        } else if(this.state.index==1 && n==-1){
            this.setState({index:3});
        } else {
            this.setState({index:n+this.state.index})
        }
    }
    componentDidUpdate(){
        this.showSlider(this.state.index);
    }
    render(){
        
        return(
            <Container>
                <div className='sliderBox' data-aos="fade-up" data-aos-duration="1000">
                    <div className='slider active'>
                        <div className='sliderCard'>
                            <img src={sliderImg} alt=""/>
                            <div className='sliderText'>
                                <h5>Muhiddin Jumayev<br/><span>Coder</span></h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur magni quaerat ducimus vel voluptatum rerum fugit, molestiae nam, laborum quisquam velit soluta aperiam quidem eos architecto ut nemo reiciendis.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='slider nextSlider'>2</div>
                    <div className='slider backSlider'>3</div>
                    <a id='leftButton' onClick={()=>this.countSlider(-1)}><img src={leftButtonIcon} alt="" /></a>
                    <a id='rightButton' onClick={()=>this.countSlider(1)}><img src={rightButtonIcon} alt="" /></a>
                </div>
            </Container>
        )
    }
}
export default IndexSection6;