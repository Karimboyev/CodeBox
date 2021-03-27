import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from '../components/Header';
import IndexSection1 from '../components/IndexSection1';
import IndexSection2 from '../components/IndexSection2';
import IndexSection3 from '../components/IndexSection3';
import IndexSection4 from '../components/IndexSection4';
import IndexSection5 from '../components/IndexSection5';
import IndexSection6 from '../components/IndexSection6';
import Footer from '../components/Footer';
class Home extends Component{
  render(){
    return(
      <div>
        <Header changePath={this.props.changePath} />
        <IndexSection1 />
        <IndexSection2 />
        <IndexSection3 />
        <IndexSection4 />
        <IndexSection5 />
        {/* <IndexSection6 /> */}
        <Footer />
      </div>
    )
  }
}
export default Home;
