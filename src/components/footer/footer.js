import React,{Component} from 'react';

export default class Footer extends Component{

    render(){
        return (
            <div className="footer-style">
                    <div className="mt-1">
                        <div className="text-center copyright">
                             <span className="py-1 t-600">
                                 Copyright © 2020 | All Rights Reserved. 
                                 Powered by <a href="http://gito.me" target="_blank"  className="t600">Gito.Me</a>
                    </span>
                      </div>
                </div>
            </div>
        )
    }
}