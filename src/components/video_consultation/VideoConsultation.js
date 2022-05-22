import React, { Component } from 'react';

class VideoConsultation extends Component {
    render() {
        return (
            <div className='container mt-5'>
                

            <div className='text-center'>
            <h3>Video Consultation from the Best doctors </h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            
            <div className=" d-flex justify-content-center">
                <div className='row'>
              
         
                <div className="col-md-6 mt-5">
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>

                    <button className='common-btn px-3 my-2'>Read More</button>
                </div>
                <div className="col-md-6">
                    <img className='' src="/images/videoimage.PNG" alt="" />
                </div>
               
            </div>
           </div>
     
            
           
        
        </div>
        );
    }
}

export default VideoConsultation;