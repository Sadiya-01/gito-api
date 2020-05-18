import React, { Component } from 'react'
import Axios from 'axios'
import { Button, Navbar, Nav} from 'react-bootstrap';

class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            // id: 0,
            // users:null
            sidebarData:[]
        }
    }

    componentDidMount(){
        Axios.get('http://api-docs.gitodemos.com/api/docs/list.php')
        .then((result)=>{
            this.setState({sidebarData:result.data})
            //console.log(result.data[0])
        })
    }
    

    sideBarClicked = (id) => {
        this.props.sidebarClicked(id)
    }


    render(){
        
        const {sidebarData} = this.state;
        sidebarData.length > 0 &&
        Object.keys(sidebarData[0]).map((key)=>  
        console.log(sidebarData[0][key],'yes')
        )
        
        return (
        <div>
            <div className="sidebar ">
                <div className="logo">
              <Navbar bg="white" border="black" expand="lg" >
                         <Navbar.Collapse className="justify-content-center">
                         <Nav>
                            <img src={require('../images/logo1.png')} className="logo-image" alt=" Gito.me"  />
                         </Nav>
                         </Navbar.Collapse>
                       
                </Navbar>
            </div>
            
                <div className="sidebar-style ">
                       <h4 className="heading" >Introduction</h4>
                            <div className="int">

                                    <p class="mt-1"><a className="intro" href="#1">Authentication - Summary</a></p> 
                                    <p class="mt-1"><a className="intro" href="#2"> Include by query string </a></p> 
                                    <p class="mt-1"><a className="intro" href="#3"> Allowed HTTPs requests</a> </p> 
                                    <p class="mt-1"><a className="intro" href="#4"> Description Of Usual Server   Responses</a></p> 
                                    
                    {sidebarData.length > 0 ? 
                        Object.keys(sidebarData[0]).map((key) => 
                        <div className="side-data">
                            <div className="key-style">
                            <h5>{key}</h5>
                            </div>
                            {sidebarData[0][key].map((sbData, i)=> 
                                <p key={sbData.id} className="sb-btn" type="button" onClick={()=>this.sideBarClicked(sbData.id)}>
                                    {sbData.title}
                                </p>
                            )}
                            </div>
                          )
                             :null}
                         </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Sidebar; 
