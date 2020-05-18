import React, { Component } from 'react'
// import data from './dump.json'
import Axios from 'axios'
import { Table } from 'react-bootstrap';
import '../assets/main.css';

class Mainbody extends Component {
    constructor(props){ 
        super(props)
        this.state={
            id: null,   
            mainbodyData:[]
        }
        this.idRefs = {};
    }

    componentDidMount(){
        Axios.get('http://api-docs.gitodemos.com/api/docs/list.php?details=1') 
        .then((result)=>{
            this.setState({mainbodyData:result.data})
        })

        window.scroll(0,0);
    }

    static getDerivedStateFromProps(props){
        //console.log(props);
        return{
            id: props.id
        }        
    }
  
    componentDidUpdate(prev, nex){
        //console.log(this.state.id, 'id');
        if(this.state.id !== null){
            if(document.querySelector(`#mbData${this.state.id}`)){
                console.log(document.querySelector(`#mbData${this.state.id}`).getBoundingClientRect(), 'click');
                
                document.querySelector(`#mbData${this.state.id}`).scrollIntoView()
                window.scrollBy(0, -70); 
            }
        }
    }   

   
    render() {
        const {mainbodyData} = this.state;
        return (
            <div>
                <div className="Main-body" >
                   <div className ="Content">
                        { mainbodyData.length > 0 ?
                        Object.keys(mainbodyData[0]).map((key) => 
                            <div>
                                <h3>{}</h3>
                                {mainbodyData[0][key].map((mbData, i)=>
                                    <div className="data"  style={{paddingTop: '5px'}} id={`mbData${mbData.id}`} ref={el => (this.idRefs[mbData.id] = el)}>
                                        <h1>{mbData.module}</h1>
                                        <div className="Mod">
                                            <div className="title">
                                                <p>{mbData.title}</p>
                                                </div>                                             
                                                <p><b>DESCRIPTION :</b>{mbData.details.description}</p>
                                                <p><b>METHOD :</b>{mbData.details.method}</p>
                                                <p><b>URL :</b>{mbData.details.url}</p><br></br>
                                         </div>
                                            {
                                            Object.keys(mbData.details).map((key) => 
                                                <div className="method">
                                                
                                                    {key == 'Method Parameters'? 
                                                    
                                                        <Table   striped bordered hover variant="light" >
                                                            
                                                            <thead>
                                                                <tr>{key}</tr>
                                                            </thead>
                                                            <tbody>
                                                                {mbData.details[key].map((paramDet, l)=>
                                                                    <>
                                                                        <tr>
                                                                            <td>Parameter :</td>
                                                                            <td>{paramDet.Parameter}</td>
                                                                        </tr>
                                                                        <tr> 
                                                                            <td>Description : </td>
                                                                            <td>{paramDet.description}</td>
                                                                        </tr>
                                                                        <tr> 
                                                                            <td>Type :</td> 
                                                                            <td>{paramDet.type}</td>
                                                                        </tr>
                                                                    </>
                                                                )}
                                                            </tbody>
                                                        </Table>
                                                    :null}

                                              {/* </div> */}
                                                    
                                                        <div className="query">                         
                                                                    {key == 'Query Parameters'?
                                                                        <Table striped bordered hover variant="light">
                                                                            <thead> 
                                                                                <tr>{key}</tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                        {mbData.details[key].map((paramDet, l)=>
                                                                                        <>
                                                                                            <tr>
                                                                                                    <td >Parameter : </td>
                                                                                                    <td>{paramDet.Parameter}</td>
                                                                                            </tr>
                                                                                        
                                                                                        <tr>
                                                                                            <td>Desc : </td>
                                                                                            <td>{paramDet.description}</td>
                                                                                        </tr>

                                                                                        <tr>
                                                                                            <td>Type :</td>
                                                                                            <td>{paramDet.type}</td>
                                                                                        </tr>
                                                                                        </>
                                                                                    )}
                                                                            </tbody>
                                                                     </Table>
                                                                :null}
                                                        </div>
                                                    
                                                    
                                                            <div>
                                                                
                                                                {key == 'Request Parameters'?
                                                                <Table  striped bordered hover variant="light">
                                                                 <thead> 
                                                                     <tr>{key}</tr>
                                                                </thead>
                                                                        <tbody>
                                                                        {mbData.details[key].map((paramDet, l)=>
                                                                            <>
                                                                            <>
                                                                            <tr>
                                                                                <td>Parameter :</td>
                                                                                    <td>{paramDet.Parameter}</td>
                                                                                 </tr>
                                                                                 <tr>
                                                                                <td>Desc : </td>
                                                                                <td>{paramDet.description}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                <td>Type :</td>
                                                                                 <td>{paramDet.type}</td>
                                                                                 </tr>
                                                                            </>
                                                                            </>
                                                                        )}
                                                                        </tbody>
                                                                    </Table>
                                                                :null}
                                                                
                                                            </div>
                                                </div>
                                            )
                                        }
                                        {/* {console.log(mbData.details, '123')} */}
                                    </div>
                                    
                                )}
                           </div> 
                        )
                     :null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Mainbody;


  