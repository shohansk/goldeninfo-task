import React, { Component } from 'react';
import { FaGreaterThan } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-3">

                        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        
                    </div>
                    <div className="col-md-3">
                        <p><img src="/images/Vector11.PNG" alt="" />
                            <img src="/images/Vector11.PNG" alt="" />
                            <span className='mx-3'> Doctor</span></p>
                        <p> <img src="/images/Vector11.PNG" alt="" />
                            <img src="/images/Vector11.PNG" alt="" />
                            <span className='mx-3'>Services</span></p>
                        <p><img src="/images/Vector11.PNG" alt="" />
                            <img src="/images/Vector11.PNG" alt="" />
                            <span className='mx-3'>Pharmacy Owner</span></p>
                    </div>
                    <div className="col-md-3">
                        <p><img src="/images/Vector11.PNG" alt="" />
                            <img src="/images/Vector11.PNG" alt="" />
                            <span className='mx-3'>About Us</span></p>
                        <p><img src="/images/Vector11.PNG" alt="" />
                            <img src="/images/Vector11.PNG" alt="" />
                            <span className='mx-3'>Blog</span></p>
                        <p><img src="/images/Vector11.PNG" alt="" />
                            <img src="/images/Vector11.PNG" alt="" />
                            <span className='mx-3'>Contact Us</span></p>
                        <h6>Download Our App</h6>
                    </div>
                    <div className="col-md-3">
                        <p><img src="/images/Vector11.PNG" alt="" />
                            <img src="/images/Vector11.PNG" alt="" />
                            <span className='mx-3'> Terms & Conditions</span>
                           </p>
                        <p><img src="/images/Vector11.PNG" alt="" />
                            <img src="/images/Vector11.PNG" alt="" />
                            <span className='mx-3'>Privacy Policy</span></p>
                        <p><img src="/images/Vector11.PNG" alt="" />
                            <img src="/images/Vector11.PNG" alt="" />
                            <span className='mx-3'>FAQ</span></p>
                    </div>
                </div>

                <footer>@ Copyright TM 2021. All rights reserved. Created by Golden Infotech.</footer>
                
            </div>
        );
    }
}

export default Footer;