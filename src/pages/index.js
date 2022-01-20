import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Team from '../components/Team'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'
import banner from '../images/background2.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AOS from 'aos';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import GlobalStyles from '../globalstyles.js';
const Home = () => {
    const [isOpen,setisOpen] = useState(false)
    const toggle = () => {
        setisOpen(!isOpen)
    }
    AOS.init();
    return (
        <>  
                <GlobalStyles></GlobalStyles>
                <Navbar toggle={toggle}/>
                <HeroSection /> 
                <About/>
                <Roadmap/>
                <Team/>
                <FAQ/>
                <img src={banner} alt="banner" width='100%' height='200%' z-index='999'/>

        </>
    )
}

export default Home
