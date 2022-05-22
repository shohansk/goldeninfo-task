import React, { Component } from 'react';

class ThreeSteps extends Component {
    render() {
        return (
            <div className="mt-5">
                 <div className='text-center'>
                <h3>Only Three Easy Steps to Follow</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
               </div>
               <div className="row">
                   <div className="col-md-6">
                       <img src="/images/threesteps.PNG" alt="" />
                   </div>
                   <div className="col-md-6 mt-5">
                       <div>
                           <h5>Search the Doctor for Appointment</h5>
                           <span>Search your doctor by specialty or doctor name. Choose the right doctor for you by viewing their profile, rating & experience.</span>
                       </div>
                       <div>
                           <h5>Get Doctor Consultation through Video Callingt</h5>
                           <span>Once you pay the required doctor fee, you will be joined to the queue. Doctor will make a secured video call to do the consultation.</span>
                       </div>
                       <div>
                           <h5>Get Your Prescription</h5>
                           <span>Once the video consultation is complete, the doctor will upload the prescription. You can download the prescription immediately or later.</span>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ThreeSteps;