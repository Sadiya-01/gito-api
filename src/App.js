
import './components/intoduction/style1.css'
import './components/Header/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Dump from './components/assets/index';
import Header from './components/Header/Header';
import Footer from './components/footer';
import Authentication from './components/intoduction/home';
 class App extends Component {
  render() {
    return (
      <div>
            <Header/>
            <Authentication/>
            <Dump/>
            <Footer/>
      </div>
    )
  }
}
export default App;

