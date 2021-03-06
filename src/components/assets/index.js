import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MainBody from '../assets/Mainbody'

class Dump extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: null
        }
    }

    sideBarClicked = (id) => {
        console.log(id,'indexxxxxxxxxxxxxxxxxxxxx')
        this.setState({
            id: id
        })
    }

    render(){
        return( 
            <div className="side-main">
                <div className="main">
                <Sidebar sidebarClicked={this.sideBarClicked} />
                <MainBody id={this.state.id} />
                
            </div>
            </div>
        )
    }
}

export default Dump;