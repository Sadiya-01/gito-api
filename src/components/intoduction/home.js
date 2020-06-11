import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default class Authentication extends Component {
   
    render() {
        return (
            
                 <div class="Head" >
                    <div className="text-right about-header">
                    
                            <a className="sub-main" href="target_blank">About Us</a>       
                            <a className="sub-main" href="https://www.gito.me/contactus">Contact Us</a>                  
                       
                       </div>
            <div className="Main-body">
               
            
                     {/* <div className="col-sm-7"> */}
                     
                     <div className="Content">
                     <div className="">
                         <div className="sub">
                             <h1 className="sub-content">GITOAI</h1>
                         </div>
                                <p className="gito"> Gito provides a smart integrated platform that can host all aggregated business models (Retailer, Marketplace, Market Exchange).</p>
                                <p className="p-gito"> Gito brings to life a concept that essentially powers all e-commerce models employed globally into a single hosted platform. Our e-commerce platform provides 
                                 group commerce capabilities in each of 3 business models utilized within the industry (retail, marketplace, market exchange) that can be used at the discretion of any online 
                                 seller anywhere!
                         </p>
                                
                                 <div className="Authentication"  id="1">
                                        <br></br>
                                        <h2  className="line-style" >INTRODUCTION</h2>
                                </div>
                                     <div>
                                        <div className="summary">
                                                 <h3 className="line-style" >Authentication - Summary</h3>
                                          </div>
                                            <p className="p-a">Gito's Partners (API Developers) will be provided with a client_id and a client_secret as part of their registration with Gito.</p>
                                            <p className="sub-authentication">Each API call will be associated to a particular store.As such, each API call will begin with ../V1/ .The partner will have to send 
                                            the client_id and a client_secret for using in each API call. </p>
                                             
                                                <br></br> 

                                                <div className=" important-note">
                                              <h3 className="line-style">Important Note:</h3>
                                              </div>

                                            <p className="note">
                                                    client_id and client_secret are associated with Gito's Partners (API Developers) only.
                                                    The client_id and client_sec ret provided to partners can be used to access data of ALL stores that have granted the partner access.
                                                    There are no separate client_id or client_secret associated with the stores.
                                                    The REST response are in JSON format.
                                             </p>
                                                     <br></br>
                                                        <div className="string" id="2">
                                                            <br></br>
                                                            <div className="sub-string">
                                                             <h3 className="line-style">Include by query string</h3>
                                                             </div>
                                                                 <br></br>   <p>An API client can pass list of includes using array or csv string format.</p>
                                                                <ul>
                                                                    <li>e.g. /authors?include[]=books:limit(2|0)&include[]=comments:sort(id|asc)</li>
                                                                    <li>/authors?include=books:limit(2|0),comments:sort(id|asc)</li>
                                                                    <li>For sub-resource inclusion, client can use dot(.) notation.</li>
                                                                    <li>e.g. /books?include=author,publisher.something else</li>
                                                                </ul>
                                                         </div>
                                                            <br></br>
                                                            {/* <br></br> */}
                                                          <div class="http" id="3">
                                                              <div className="sub-http">
                                                                <h3 className="line-style">Allowed HTTPs requests</h3>
                                                                </div>
                                                                <ul>
                                                                <li>Method</li>
                                                                <li>GET Get resource</li>
                                                                <li>POST To create resource</li>
                                                                <li>PUT  Update resource</li>
                                                                </ul>
                                                        </div>
                                                              <div class="Response" id="4">
                                                                    <br></br>
                                                                    <br></br>
                                                                    <div className="auto-response">
                                                                 <h3 className="line-style">Description Of Usual Server Responses</h3>
                                                                 </div>
                                                              <p className="sub-response">
                                                                <ul className="subresponse">
                                                                   <li> 200 OK - the request was successful (some API calls may return 201 instead).</li> 
                                                                   <li>201 Created - the request was successful and a resource was created.</li>
                                                                   <li>204 No Content - the request was successful but there is no representation to return(i.e. the response is empty).</li>
                                                                   <li> 400 Bad Request - the request could not be understood or was missing required parameters.</li>
                                                                   <li> 401 Unauthorized - authentication failed or user doesn't have permissions for requested operation.</li>
                                                                   <li>403 Forbidden - access denied.</li>
                                                                   <li>404 Not Found - resource was not found.</li>
                                                                   <li>405 Method Not Allowed - requested method is not supported for resource.</li>
                                                                </ul>
                                                             </p>   
                                                               
                                                    </div>
                                                 </div>
                                             </div>
                                        </div>
                                     </div>
                                 </div>
                                    
                                   
                                
                            
                         
        )
    }
}
