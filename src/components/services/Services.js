import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div className='container mt-5' id="services">
               
                <div className='text-center'>
                <h3>Our Services</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
               </div>

               <div className="row mt-5">
                   <div className="col-md-6">
                       <img src="/images/services.PNG" alt="" />
                   </div>
                   <div className="col-md-6">
                       <div>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                       </div>
                       <div>
                           <button className='common-btn px-3 my-2'>Read More</button>
                       </div>

                       <div className='mt-5'>
                       <p>
                        <img src="/images/Vector11.PNG" alt="" />
                        <img src="/images/Vector11.PNG" alt="" />
                        <span className='mx-3'> Vascular Surgery</span>
                    </p>
                    <p>
                        <img src="/images/Vector11.PNG" alt="" />
                        <img src="/images/Vector11.PNG" alt="" />
                        <span className='mx-3'> Maternal Healthcare</span>
                    </p>
                    <p>
                        <img src="/images/Vector11.PNG" alt="" />
                        <img src="/images/Vector11.PNG" alt="" />
                        <span className='mx-3'> Child Healthcare</span>
                    </p>
                    <p>
                        <img src="/images/Vector11.PNG" alt="" />
                        <img src="/images/Vector11.PNG" alt="" />
                        <span className='mx-3'> Elder Healthcare</span>
                    </p>

                       </div>

                    </div>
               </div>
            </div>
        );
    }
}

export default Services;