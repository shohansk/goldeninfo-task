import React, { Component } from 'react';
// import playstore from '../../../public/images/playstore.PNG'
class HeaderMenu extends Component {
    render() {
        return (
           <div className="container d-flex justify-content-center">
                <div className='row'>
                <div className="col-md-6 mt-5">
                    <h3>Protect and Take <br/>Care of Your Health</h3>
                    <p>Download Our App and feel free to take <br/>
                    your Health Advice from a Specialist.</p>
                    <button className='btn btn-primary'>Search For a Service</button>
                    <div className='d-flex  '>
                        
                        <a  href=''><img  width={100} height={35} className='mt-2 mr-5' src="/images/playstore.PNG"alt="" /></a>
                        <a href=""><img  width={100} height={35}  className='mt-2 ' src="/images/applestore.PNG"alt="" /></a>
                        
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="/images/top-header.PNG" alt="" />
                </div>
         
            </div>
           </div>
        );
    }
}

export default HeaderMenu;