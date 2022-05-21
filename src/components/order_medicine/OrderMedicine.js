import React, { Component } from 'react';

class OrderMedicine extends Component {
    render() {
        return (
            <div className="container">
                 <div className='text-center'>
                <h3>Order Medicine Online from Popular Pharmacy Nearby</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
               </div>
                <div className="row">
                    <div className="col-md-4">

                        <h6>Shahbag Medicine Corner</h6>
                        <div className='d-flex aline-item-center justify-content-center'>
                        <img className='mt-2' height={40} src="/images/loctionicon.PNG" alt="" />
                        <p className='ml-2'>Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh</p>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <h6>Shahbag Medicine Corner</h6>
                        <div className='d-flex aline-item-center justify-content-center'>
                        <img className='mt-2' height={40} src="/images/loctionicon.PNG" alt="" />
                        <p className='ml-2'>Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh</p>
                        </div>
                        </div>
                        <div className="col-md-4">

                        <h6>Shahbag Medicine Corner</h6>
                        <div className='d-flex aline-item-center justify-content-center'>
                        <img className='mt-2' height={40} src="/images/loctionicon.PNG" alt="" />
                        <p className='ml-2'>Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh</p>
                        </div>
                        </div>
                   
                </div>
                <div className="text-center">
                <button className='btn btn-primary '>View All</button>
                </div>

            </div>
        );
    }
}

export default OrderMedicine;