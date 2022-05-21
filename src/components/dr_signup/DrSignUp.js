import React, { Component } from 'react';

class DrSignUp extends Component {
    render() {
        return (
            <div className=' mt-5'>
                

            <div className='text-center'>
            <h3>Are You a Qualified & Expert Doctor?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
            </div>
            
            <div className="container d-flex justify-content-center">
                <div className='row'>
              
         
                <div className="col-md-6 ">
                    <h4>Be a Part of TM</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <button className='btn btn-primary'>Sign Up Now</button>
                </div>
                <div className="col-md-6">
                    <img className='' src="/images/doctorsignup.PNG" alt="" />
                </div>
               
            </div>
           </div>
     
            
           
        
        </div>
        );
    }
}

export default DrSignUp;