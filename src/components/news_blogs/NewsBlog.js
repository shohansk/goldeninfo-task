import React, { Component } from 'react';
import {Button,Card} from 'react-bootstrap';
//import Stack from 'react-bootstrap/Stack';

class NewsBlog extends Component {
    render() {
        return (
            <div className='container'>
                <div className='text-center mt-5'>
                <h3>News & Blogs</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
               </div>
{/* /*               <Stack direction="horizontal" gap={5}>
                   <div className="col-md-3">
                   <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/Computer-Science-Engineering1.PNG" />
                        <Card.Body>
                        <p className='text-primary' >November 5, 2021</p>
                            <Card.Title>Cild care for Winter Season</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </Card.Text>
                            <div className='d-flex justify-content-around'>                               
                                 <span>Dr. Saifur Rahman</span>
                                 <Button variant="primary">Read More</Button>
                            </div>
                        </Card.Body>
                    </Card>
                   </div>
                   <div className="col-md-3">
                   <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/Computer-Science-Engineering.PNG" />
                        <Card.Body>
                        <p className='text-primary' >November 5, 2021</p>
                            <Card.Title>Telemedicine Service</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </Card.Text>
                            <div className='d-flex justify-content-around'>                               
                                 <span>Dr. Saifur Rahman</span>
                                 <Button variant="primary">Read More</Button>
                            </div>
                        </Card.Body>
                    </Card>
                   </div>
                   <div className="col-md-3">
                   <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/Computer-Science-Engineering0.PNG" />
                        <Card.Body>
                            <p className='text-primary' >November 5, 2021</p>
                            <Card.Title>Pregnancy Complications</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </Card.Text>
                            <div className='d-flex justify-content-around'>                               
                                 <span>Dr. Saifur Rahman</span>
                                 <Button variant="primary">Read More</Button>
                            </div>
                        </Card.Body>
                    </Card>
                   </div>
                   <div className="col-md-3">
                   <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/aboutus.PNG" />
                        <Card.Body>
                        <p className='text-primary' >November 5, 2021</p>
                            <Card.Title>Backpain Treatment</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            </Card.Text>
                            <div className='d-flex justify-content-around'>                               
                                 <span>Dr. Saifur Rahman</span>
                                 <Button variant="primary">Read More</Button>
                            </div>
                           
                        </Card.Body>
                    </Card>
                   </div>
               </Stack>
 */}

                <div className='text-center mt-5'>
                 <img height={50} src="/images/newsg.PNG" alt="" />
                 <img height={50} src="/images/newsles.PNG" alt="" />
               </div>

             <hr/>
            </div>
            


            
        );
    }
}

export default NewsBlog;