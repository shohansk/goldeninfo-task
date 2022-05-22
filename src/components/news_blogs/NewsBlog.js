import React, { Component, useState } from 'react';
import {Button,Card} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';

const NewsBlog = () => {

    

  const info = [
    {
        id:1,
        date: "November 5, 2021",
        title:"Cild care for Winter Season",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        dName:"Dr. Saifur Rahman",
        image: "/images/Computer-Science-Engineering1.PNG"
    },
    {
        id:2,
        date: "November 5, 2021",
        title:"Telemedicine Service",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        dName:"Dr. Saifur Rahman",
        image: "/images/Computer-Science-Engineering.PNG"
    },
    {
        id:3,
        date: "November 5, 2021",
        title:"Pregnancy Complications",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        dName:"Dr. Saifur Rahman",
        image: "/images/Computer-Science-Engineering0.PNG"
    },
    {
        id:4,
        date: "November 5, 2021",
        title:"Backpain Treatment",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        dName:"Dr. Saifur Rahman",
      
        image: "/images/aboutus.PNG"
    }]



    return (
         


 <div className='container' id="blog">
 <div className='text-center mt-5'>
 <h3>News & Blogs</h3>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
</div>
 <Stack direction="horizontal" gap={5}>
   {info.map(item=> <div className="col-md-3">
        <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={item.image} />
             <Card.Body>
             <p className='text-primary' >{item.date}</p>
                 <Card.Title>{item.title}</Card.Title>
                 <Card.Text>
                {item.description}
                 </Card.Text>
                 <div className='d-flex justify-content-around align-items-center'>                               
                      <span>{item.dName}</span>
                      <button className='common-btn px-3 my-2'>Read More</button>
                 </div>
             </Card.Body>
         </Card>
        </div>)}

</Stack>


 <div className='text-center mt-5'>
  <img height={50} src="/images/newsg.PNG" alt="" />
  <img height={50} src="/images/newsles.PNG" alt="" />
</div>

<hr/>
</div>
    );
};

export default NewsBlog;