import React, { Component } from 'react'
import Axios from 'axios'
import { Button} from 'react-bootstrap';

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
                <div className="sidebar-style ">
                    
                       <h4 className="heading" >Introduction</h4>
                            <div className="int">
                                                            {/* <Button variant="outline-primary" >Authentication - Summary</Button>{'Authentication - Summary '}
                                                            <Button variant="outline-primary">Include by query string</Button>{' '}
                                                            <Button variant="outline-primary"> Allowed HTTPs requests</Button>{' '}
                                                            <Button variant="outline-primary">Description Of Usual Server Responses</Button>{' #4'} */}

                                     <p class="mt-3"><a className="intro"  href="#1">Authentication - Summary</a></p> 
                                    <p class="mt-1"><a className="intro" href="#2"> Include by query string </a></p> 
                                    <p class="mt-1"><a className="intro" href="#3"> Allowed HTTPs requests</a> </p> 
                                    <p class="mt-1"><a className="intro" href="#4">Description Of Usual Server Responses</a></p> 
                                    
                    {sidebarData.length > 0 ? 
                        Object.keys(sidebarData[0]).map((key) => 
                        <div className="side-data">
                            <div className="key-style">
                            <h5>{key}</h5>
                            </div>
                            {sidebarData[0][key].map((sbData, i)=> 
                                <button key={sbData.id} className="sb-btn" type="button" onClick={()=>this.sideBarClicked(sbData.id)}>
                                    {sbData.title}
                                </button>
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