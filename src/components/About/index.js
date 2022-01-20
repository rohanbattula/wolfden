import React from 'react'
import wolf from '../../images/wolves.gif';
import banner from '../../images/background2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {AboutContainer, AboutInfo,RockBg, AboutH1, AboutWolf, AboutP, AboutContents} from './AboutElements';
const About = () => {
    return (
        <AboutContainer id="about">

            <AboutContents data-aos="fade-right"     data-aos-duration="1500" data-aos-easing="ease" data-aos-delay="50" >
               <AboutWolf src={wolf}/>
               <AboutInfo>
                <AboutH1 >
                    About The Wolfpack
                </AboutH1>
                <AboutP >
                    It is 2069 on the deserted planet of Earth, and the wolfpack is enduring a famine. 
                    Urgently hunting for prey, they have turned to the metaverse and no one is safe. 
                    Each wolf is randomly generated with over 50+ unique traits, to gather in the den.
                </AboutP>

                </AboutInfo>
            </AboutContents>
            
        </AboutContainer>
    )
}

export default About
