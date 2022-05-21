import logo from './logo.svg';
import './App.css';
import HeaderMenu from './components/header_menu/HeaderMenu';
import AboutUs from './components/about_us/AboutUs';
import VideoConsultation from './components/video_consultation/VideoConsultation';
import WhyChoose from './components/why_choose/WhyChoose';
import ThreeSteps from './components/three_Steps/ThreeSteps';
import OrderMedicine from './components/order_medicine/OrderMedicine';
import Faq from './components/faq/Faq';
import Services from './components/services/Services';
import DrSignUp from './components/dr_signup/DrSignUp';
import NewsBlog from './components/news_blogs/NewsBlog';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';
import Doctors from './components/doctors/Doctors';
import TopHeader from './components/top_header/TopHeader';

function App() {
  return (
    <>
     <TopHeader></TopHeader>
     <HeaderMenu></HeaderMenu>
     <AboutUs></AboutUs>
     <VideoConsultation></VideoConsultation>
     <WhyChoose></WhyChoose>
     <ThreeSteps></ThreeSteps>
     <OrderMedicine></OrderMedicine>
     <Services></Services>
     <Doctors></Doctors>
     <DrSignUp></DrSignUp>
     <Faq></Faq>
     <Testimonial></Testimonial>
     <NewsBlog></NewsBlog>
     <Footer></Footer>
    

    </>
  );
}

export default App;
