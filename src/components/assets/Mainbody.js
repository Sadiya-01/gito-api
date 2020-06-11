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
                   <div className ="col-sm-12">
                        { mainbodyData.length > 0 ?
                        Object.keys(mainbodyData[0]).map((key) => 
                            <div className="row">
                            <div className="col-md-8">
                                <h3>{}</h3>
                                {mainbodyData[0][key].map((mbData, i)=>
                                    <div className="data"  style={{paddingTop: '5px'}} id={`mbData${mbData.id}`} ref={el => (this.idRefs[mbData.id] = el)}>
                                        <h1>{mbData.module}</h1>
                                        <div className="Mod">
                                            <div className="title">
                                                <h3 className="List">{mbData.title}</h3 >
                                                </div>                                             
                                                <p><b>DESCRIPTION :</b>{mbData.details.description}</p>
                                                <p><b>METHOD :</b>{mbData.details.method}</p>
                                                <p><b>URL :</b>{mbData.details.url}</p><br></br>
                                         </div>
                                            {
                                            Object.keys(mbData.details).map((key) => 
                                                <div className="method">
                                                
                                                    {key == 'Method Parameters'? 
                                                    <section className="Method-parameters">
                                                        <h5 id="apidoc-method">Method Parameter</h5>
                                                        <table className="api-doc api-doc-query-parameters-parameters api-doc-users">
                                                            {/* <thead>
                                                            {key}
                                                            </thead> */}
                                                            <tbody>
                                                                {mbData.details[key].map((paramDet, l)=>
                                                                    <>
                                                                        <tr>
                                                                            <th className="api-index-title" scope="column">Parameter </th>
                                                                            <th className="api-index-title" scope="column">Description </th>
                                                                            <th className="api-index-title" scope="column">Type </th>
                                                                            
                                                                        </tr>
                                                                        <tr className="api-index-item"> 
                                                                            {/* <th>Description : </th> */}
                                                                            <td scope="row" className="parameter api-index-item-title">{paramDet.Parameter}</td>
                                                                            <td scope="row" className="parameter api-index-item-title">{paramDet.description}</td>
                                                                            <td scope="row" className="parameter api-index-item-title">{paramDet.type}</td>
                                                                        </tr>
                                                                        
                                                                    </>
                                                                )}
                                                            </tbody>
                                                        </table>
                                                        </section>
                                                    :null}

                                              {/* </div> */}
                                                    
                                                        <div className="query">                         
                                                                    {key == 'Query Parameters'?
                                                                     <section className="Query-parameters">
                                                                     <h5 id="apidoc-method">Query Parameter</h5>
                                                                     <table className="api-doc api-doc-query-parameters-parameters api-doc-users">
                                                                       
                                                                            {/* <thead> 
                                                                                <tr>{key}</tr>
                                                                            </thead> */}
                                                                            <tbody>
                                                                                        {mbData.details[key].map((paramDet, l)=>
                                                                                        <>
                                                                                          <tr>
                                                                                            <th className="api-index-title" scope="column">Parameter </th>
                                                                                            <th className="api-index-title" scope="column">Description </th>
                                                                                            <th className="api-index-title" scope="column">Type </th>
                                                                                                    
                                                                                        </tr>
                                                                                        
                                                                                     <tr className="api-index-item">
                                                                                         <td scope="row" className="parameter api-index-item-title">{paramDet.Parameter}</td>
                                                                                         <td scope="row" className="parameter api-index-item-title">{paramDet.description}</td>
                                                                                         <td scope="row" className="parameter api-index-item-title">{paramDet.type}</td>
                                                                                     </tr>

                                                                                        
                                                                                        </>
                                                                                    )}
                                                                            </tbody>
                                                                        </table>
                                                                     </section>
                                                                :null}
                                                        </div>
                                                    
                                                    
                                                            <div>
                                                                
                                                                {key == 'Request Parameters'?
                                                                <section className="Request-parameters">
                                                                <h5 id="apidoc-method">Request Parameter</h5>
                                                                <table className="api-doc api-doc-query-parameters-parameters api-doc-users">
                                                                 {/* <thead> 
                                                                     <tr>{key}</tr>
                                                                </thead> */}
                                                                        <tbody>
                                                                        {mbData.details[key].map((paramDet, l)=>
                                                                            <>
                                                                            <>
                                                                            <tr>
                                                                                 <th className="api-index-title" scope="column">Parameter </th>
                                                                                 <th className="api-index-title" scope="column">Description </th>
                                                                                 <th className="api-index-title" scope="column">Type </th>
                                                                                    
                                                                                 </tr>
                                                                                 <tr className="api-index-item">
                                                                                
                                                                                    <td scope="row" className="parameter api-index-item-title">{paramDet.Parameter}</td>
                                                                                    <td scope="row" className="parameter api-index-item-title">{paramDet.description}</td>
                                                                                    <td scope="row" className="parameter api-index-item-title">{paramDet.type}</td>
                                                                                </tr>
                                                                                
                                                                                
                                                                            </>
                                                                            </>
                                                                        )}
                                                                         </tbody>
                                                                      </table>
                                                                   </section>
                                                                :null}
                                                                
                                                            </div>
                                                </div>
                                            )
                                        }
                                        {/* {console.log(mbData.details, '123')} */}
                                    </div>
                                    
                                )}
                           </div> 
                           <div className="col-md-4 p-3 border box">
                               <p>Output</p>
                               <pre>
                                    assets
                                    as
                                    assets
                                    as
                               </pre>
                           </div>
                           </div>
                        )
                     :null}
                    </div>
                    
                    </div>
                </div>
                
                    
                    // </div>
        
                
            
            
         
        )
    }
}

export default Mainbody;


  