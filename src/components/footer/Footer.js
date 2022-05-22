import React from 'react';
import './footer.css';
import Stack from 'react-bootstrap/Stack';

const Footer = () => {
  
    return (
        <div className='footer-bg'>
            <div className='container ' id="con">
        <img className='p-1' height={35} src="/images/docicon.PNG" alt="" />
           <img  className='p-1' height={35} src="/images/TM.PNG" alt="" />
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
       <div>

       </div>
       <h6>Contact Us</h6>
       <div className='row'>
            
           <div className="col-md-4">
           <h6> <img src="/images/location.PNG" alt="" /> House-20, Road-27, Block-A, Banani, Dhaka.</h6>
           <h6> <img src="/images/phn.PNG" alt="" /> +8801234567890, +88058269458</h6>
           <h6> <img src="/images/mail.PNG" alt="" /> tmbd@mail.com</h6>
           <h6> <img src="/images/site.PNG" alt="" />tmbd.com</h6>
           </div>
           <div className="col-md-2">
               <p>Social Links</p>
                 <Stack direction="horizontal" gap={2}>
                    <img src="/images/fb.PNG" alt="" />
                    <img src="/images/youtube.PNG" alt="" />
                    <img src="/images/mask.PNG" alt="" />
                    <img src="/images/insta.PNG" alt="" />
                    <img src="/images/link.PNG" alt="" />

                </Stack>

           </div>
           <div className="col-md-3">
               <h5>Download Our App</h5>
           </div>
           <div className="col-md-3">
           <Stack direction="horizontal" gap={3}>
                         <a  href=''><img  width={100} height={35} className='mt-2 mr-5 rounded' src="/images/playstore.PNG"alt="" /></a>
                        <a href=""><img  width={100} height={35}  className='mt-2 rounded ' src="/images/applestore.PNG"alt="" /></a>
                   

                </Stack>
           </div>
           
           
       </div>

       <h6 className='text-center text-primary'><span className='p-1'>&#169;</span> Copyright TM 2021. All rights reserved. Created by Golden Infotech.</h6>
       
   </div>
        </div>
    );
};

export default Footer;