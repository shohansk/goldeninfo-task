import React, { Component } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
class Faq extends Component {
    render() {
        return (
            <div className="container mt-5 " id="faq">
                <div className='text-center mt-5'>
                <h3>Order Medicine Online from Popular Pharmacy Nearby</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard</p>
               </div>
               <div className="row d-flex justify-content-center align-items-center">
               <div className="col-md-6 mt-5">
                    <img height={350} src="/images/faq.PNG" alt="" />
                </div>
                <div className="col-md-6 ">
             
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>What is TM?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>What do you treat?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        </Typography>
                        </AccordionDetails>
                    </Accordion> <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>How does it work?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                     <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Who provides consultation on TM?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Are the registered Doctors varified?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                   <div className='d-flex justify-content-end mt-3 p-2'>
                   <button className='common-btn px-3 my-2'>View All FAQ’s</button>
                   </div>
                    
                  
                </div>
               </div>
               
            </div>
        );
    }
}

export default Faq;