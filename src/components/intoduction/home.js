import React, { Component } from 'react'

export default class Authentication extends Component {
   
    render() {
        return (
            <div className="Main-body">
             <div className="Content ">
                         <h3 className="ml-3 mt-4 text-center">GITOAI</h3>
                                <p className="pt-3" > Gito provides a smart integrated platform that can host all aggregated business models (Retailer, Marketplace, Market Exchange).</p>
                                <p>  Gito brings to life a concept that essentially powers all e-commerce models employed globally into a single hosted platform. Our e-commerce platform provides group commerce capabilities in each of 3 business models utilized within the industry (retail, marketplace, market exchange) that can be used at the discretion of any online seller anywhere!
                         </p>

                                 <div className="Authentication"  id="1">
                                        <br></br>
                                        <h3 className= "text-center">INTRODUCTION</h3>
                                </div>
                                     <div>
                                          <h4>Authentication - Summary</h4>
                         
                                            <p>Gito's Partners (API Developers) will be provided with a client_id and a client_secret as part of their registration with Gito.</p>
                                            <p className="summary">Each API call will be associated to a particular store.As such, each API call will begin with ../V1/ .The partner will have to send the client_id and a client_secret for using in each API call. </p>
                                                <br></br>
                                              <h4>IMPORTANT NOTE:</h4>
                                               <p className="note">
                                                    client_id and client_secret are associated with Gito's Partners (API Developers) only.
                                                    The client_id and client_sec ret provided to partners can be used to access data of ALL stores that have granted the partner access.
                                                    There are no separate client_id or client_secret associated with the stores.
                                                    The REST response are in JSON format.
                                             </p>
                                                     <br></br>
                                                        <div className="string" id="2">
                                                            <br></br>
                                                             <h4>Include by query string</h4>
                                                
                                                                    <br></br>   <p>An API client can pass list of includes using array or csv string format.</p>
                                                                <ul>
                                                                    <li>e.g. /authors?include[]=books:limit(2|0)&include[]=comments:sort(id|asc)</li>
                                                                    <li>/authors?include=books:limit(2|0),comments:sort(id|asc)</li>
                                                                    <li>For sub-resource inclusion, client can use dot(.) notation.</li>
                                                                    <li>e.g. /books?include=author,publisher.somethingelse</li>
                                                                </ul>
                                                            </div>
                                                            <br></br>
                                                            {/* <br></br> */}
                                                          <div class="http" id="3">
                                                                <h4>Allowed HTTPs requests</h4>
                                                                <p>Method</p>
                                                                <p>GET Get resource</p>
                                                                <p>POST To create resource</p>
                                                                <p>PUt  Update resource</p>
                                                        </div>
                                                    <div class="disc" id="4">
                                                                <br></br>
                                                                <br></br>
                                                                    <h4>Description Of Usual Server Responses</h4>
                                                              <p>
                                                                    200 OK - the request was successful (some API calls may return 201 instead). <br></br>
                                                                    201 Created - the request was successful and a resource was created.<br></br>
                                                                    204 No Content - the request was successful but there is no representation to return (i.e. the response is empty).<br></br>
                                                                    400 Bad Request - the request could not be understood or was missing required parameters.<br></br>
                                                                    401 Unauthorized - authentication failed or user doesn't have permissions for requested operation.<br></br>
                                                                    403 Forbidden - access denied.<br></br>
                                                                    404 Not Found - resource was not found.<br></br>
                                                                    405 Method Not Allowed - requested method is not supported for resource.<br></br>
                                                             </p>
                                                    </div>
                                             </div>
                                        </div>
                                   </div>
                              
                        
        )
    }
}
