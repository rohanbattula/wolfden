import React from 'react';
import banner from '../../images/newbanner.png';
import {HeroContainer,HeroBg, HeroContent, HeroH1, HeroP} from './HeroElements';
const HeroSection = () => {
    return (
        <HeroContainer id="home">

            <HeroBg> 
                <img src={banner} alt="banner" width='100%' height='100%'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> 
                    1111 wolves roaming the Solana blockchain, hunting for prey.
                </HeroH1>
                <HeroP>
                    February 9th, 2022 Noon EST
                </HeroP>
                <HeroP>
                    1 SOL
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
