import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div className='container' id="us">
                <div className='App'>
                <h3>About Us</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <div className="container d-flex justify-content-center">
                <div className='row'>
                <div className="col-md-6">
                    <img className='img-fluid' src="/images/usss.PNG" alt="" />
                </div>
         
                <div className="col-md-6 mt-5">
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>

                    <button className='common-btn px-3 my-2'>Read More</button>
                </div>
               
            </div>
           </div>
         
            </div>
        );
    }
}

export default AboutUs;