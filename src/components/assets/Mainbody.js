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
        console.log(props,'@propsssss');
        return{
            id: props.id
        }        
    }
  
    componentDidUpdate(prev, nex){
        //console.log(this.state.id, 'id');
        // if(this.state.id !== null){
        //     if(document.querySelector(`#mbData${this.state.id}`)){
        //         console.log(document.querySelector(`#mbData${this.state.id}`).getBoundingClientRect(), 'click');
                
        //         document.querySelector(`#mbData${this.state.id}`).scrollIntoView()
        //         window.scrollBy(0, -70); 
        //     }
        // }
    }   

   
    render() {
        const {mainbodyData} = this.state;
        console.log(mainbodyData,'@mdataaa')
        return (
            <div>
                 {/* <div className ="col-sm-12"> */}
                <div className="Main-body col-sm-8" >
                    <div className ="">
                        { mainbodyData.length > 0 ?
                            Object.keys(mainbodyData[0]).map((key) => {
                                return(
                                    <div> 
                                    {Object.keys(mainbodyData[0][key]).map((mbData) => {
                                        console.log(mainbodyData[0][key][mbData].id,this.state.id,'@weeee')
                                        // console.log(mbData,'@45698')
                                        if(mainbodyData[0][key][mbData].id==this.state.id){
                                            return(
                                                <div className="data"  style={{paddingTop: '5px'}} >
                                            <h1>{mainbodyData[0][key][mbData].module}</h1>
                                            <div className="Mod">
                                                    <div className="title">
                                                        <h3 className="List">{mainbodyData[0][key][mbData].title}</h3 >
                                                    </div>  
                                                                            
                                                    <p><b>DESCRIPTION :</b>{mainbodyData[0][key][mbData].details&& mainbodyData[0][key][mbData].details.description!==null?mainbodyData[0][key][mbData].details.description:null}</p>
                                                    <p><b>METHOD :</b>{mainbodyData[0][key][mbData].details&&mainbodyData[0][key][mbData].details.method!==null?mainbodyData[0][key][mbData].details.method:null}</p>
                                                    <p><b>URL :</b>{mainbodyData[0][key][mbData].details&&mainbodyData[0][key][mbData].details.url!==null?mainbodyData[0][key][mbData].details.url:null}</p><br></br>
                                            </div>
                                                {
                                                Object.keys(mainbodyData[0][key][mbData].details).map((value,j ) =>{
                                                        {/*console.log(mbData.details[key],"32")*/}
                                                        return(
                                                    <div className="method">
                                                    
                                                        {value == 'Method Parameters'? 
                                                        <section className="Method-parameters">
                                                            <h5 id="apidoc-method">Method Parameter</h5>
                                                            <table className="api-doc api-doc-query-parameters-parameters api-doc-users">
                                                                
                                                                {/* {key} */}
                                                                
                                                                <tbody>
                                                                    {mainbodyData[0][key][mbData].details[value].map((paramDet, l)=>{
                                                                        // console.log(paramDet,"56")
                                                                        return(
                                                                        <>
                                                                            <tr>
                                                                                <th className="api-index-title" scope="column">Parameter </th>
                                                                                <th className="api-index-title" scope="column">Type </th>
                                                                                <th className="api-index-title" scope="column">Description </th>
                                                                        
                                                                                
                                                                                
                                                                            </tr>
                                                                            <tr className="api-index-item"> 
                                                                                {/* <th>Description : </th> */}
                                                                                <td scope="row" className="parameter api-index-item-title">{paramDet.Parameter}</td>
                                                                                <td scope="row" className="parameter api-index-item-title">{paramDet.type}</td>
                                                                                <td scope="row" className="parameter api-index-item-title">{paramDet.description}</td>
                                                                            </tr>
                                                                            
                                                                        </>
                                                                        
                                                                        )
                                                                    }
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
                                                                                            {mainbodyData[0][key][mbData].details[value].map((paramDet, l)=>
                                                                                            <>
                                                                                            <tr>
                                                                                            <th className="api-index-title" scope="column">Parameter </th>
                                                                                            <th className="api-index-title" scope="column">Type </th>
                                                                                            <th className="api-index-title" scope="column">Description </th>
                                                                                                        
                                                                                            </tr>
                                                                                            
                                                                                        <tr className="api-index-item">
                                                                                        <td scope="row" className="parameter api-index-item-title">{paramDet.Parameter}</td>
                                                                                        <td scope="row" className="parameter api-index-item-title">{paramDet.type}</td>
                                                                                        <td scope="row" className="parameter api-index-item-title">{paramDet.description}</td>
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
                                                                                {mainbodyData[0][key][mbData].details[value].map((paramDet, l)=>
                                                                                <>
                                                                                <>
                                                                                <tr>
                                                                                <th className="api-index-title" scope="column">Parameter </th>
                                                                                <th className="api-index-title" scope="column">Type </th>
                                                                                <th className="api-index-title" scope="column">Description </th>
                                                                                        
                                                                                    </tr>
                                                                                    <tr className="api-index-item">
                                                                                    
                                                                                    <td scope="row" className="parameter api-index-item-title">{paramDet.Parameter}</td>
                                                                                <td scope="row" className="parameter api-index-item-title">{paramDet.type}</td>
                                                                                <td scope="row" className="parameter api-index-item-title">{paramDet.description}</td>
                                                                                    </tr>
                                                                                    
                                                                                    
                                                                                </>
                                                                                </>
                                                                            )}
                                                                        </tbody>
                                                                    </table>
                                                                    </section>
                                                                    :null}
                                                                    
                                                                </div> 
                                                                
                                                                {key == 'Response Result'?
                                                                <div className="scrollbar">
                                                                <div className="col-md-4 p-3  border box float-right">
                                                                    <h5>Response Result:</h5>
                                                                    {mainbodyData[0][key][mbData].details[value]}
                                                                </div>
                                                                </div>
                                                                :null} 
                                                                
                                                    </div>
                                                    
                                                    )
                                                })
                                                
                                            }
                                        
                                        </div>
                                            )
                                        }
                                    })}
                                    </div>
                                )
                                }
                                )
                            
                        :null}
                    </div>
                 </div>
            </div>
        
        
            
            
         
        )
    }
}

export default Mainbody;


  