import './components/Sidebar/sidebar.css'
import './components/intoduction/style1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Dump from './components/assets/index';
import Footer from './components/footer/footer';
import Authentication from './components/intoduction/home';
// import Introduction from './components/intoduction/Introduction';

 class App extends Component {
  render() {
    return (
      <div>
            <Authentication/>
            {/* <Introduction/> */}
            <Dump/>
            <Footer/>
 
      </div>
    )
  }
}
export default App;
