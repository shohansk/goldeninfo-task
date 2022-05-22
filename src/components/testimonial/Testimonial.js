import React, { Component } from 'react';

class Testimonial extends Component {
    render() {
        return (
            <div className='container'>
                 <div className='text-center mt-5'>
                <h3>What Are The Patients Saying About us</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
               </div>
               <div className="row mt-5 ">
                   <div className="col-md-5">
                       <img className='rounded'  src="/images/man-g22f63f5a3_1280 2.PNG" alt="" />
                   </div>
                   <div className="col-md-7 p-5 rounded border">
                       <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled.</span>
                       <h6 className='mt-3'>Foisal Morshed</h6>
                       <span>Student, CSE, University of Royal</span>
                   </div>
               </div>
            </div>
        );
    }
}

export default Testimonial;