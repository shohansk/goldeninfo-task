import React, { Component } from 'react';

class WhyChoose extends Component {
    render() {
        return (
            <div className='container'>
               <div className='text-center'>
                <h3>Why Choose TM?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
               </div>
               <div className=' d-flex mt-5'>
                   <div className="col-ml-3 text-center">
                        <img height={70} src="/images/start.PNG" alt="" />
                        <h4>Easy to Use</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                   </div>
                   <div className="col-ml-3 text-center">
                        <img height={70} src="/images/clock.PNG" alt="" />
                        <h4>24 / 7 Service</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                   </div>
                   <div className="col-ml-3 text-center">
                        <img height={70} src="/images/edoc.PNG" alt="" />
                        <h4>Expert Doctors</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                   </div>
                   <div className="col-ml-3 text-center">
                        <img height={70} src="/images/trust.PNG" alt="" />
                        <h4>Trusted</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                   </div>
                  

               </div>
              
               
            </div>
        );
    }
}

export default WhyChoose;