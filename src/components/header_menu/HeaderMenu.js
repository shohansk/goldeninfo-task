import React, { Component } from 'react';
import { Stack } from 'react-bootstrap';
import './header.css';

class HeaderMenu extends Component {
    render() {
        return (
           <div className=' top-banner'>
               <div className=" d-flex justify-content-center">
           

                 <div className=" d-flex justify-content-center">
                <div className='row'>
              
         
                <div className="col-md-6 mt-5">
                <h3>Protect and Take <br/>Care of Your Health</h3>
                    <p>Download Our App and feel free to take <br/>
                    your Health Advice from a Specialist.</p>
                  
                
                   <button className='common-btn px-3 my-2'>Search For a Service</button>
               
                    <Stack direction="horizontal" gap={3}>
                         <a  href=''><img  width={100} height={35} className='mt-2 mr-5 rounded' src="/images/playstore.PNG"alt="" /></a>
                        <a href=""><img  width={100} height={35}  className='mt-2 rounded ' src="/images/applestore.PNG"alt="" /></a>
                   

                    </Stack>
                </div>
                <div className="col-md-6">
                <img className='w-full'  src="/images/top-header.PNG" alt="" />
                </div>
               
        
           </div>
         
            </div>
           </div>
           </div>
        );
    }
}

export default HeaderMenu;