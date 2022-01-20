import {
    WorksContainer,
    WorksContent,
    WorksTitle,
    WorksCardContent,
    WorksCard,
    WorksIconContainer,
    WolfIcon,
    RockBg,
    WorksCardTitle,
    WorksCardText,
    LogoContainer,
    TwitterIcon,
    DiscordIcon
} from './TeamElements';
import will from '../../images/will.png';
import bruh from '../../images/bruh.png';
import rodeo from '../../images/rodeo.png';

import twitter from '../../images/twitter.png';
import discord from '../../images/discord.png';
import banner from '../../images/background2.png';
const Team = () => {
    return (
        <div>
            <WorksContent id="team">

                <WorksContainer data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease" data-aos-delay="10">
                    
                    <WorksTitle> Meet The Team</WorksTitle>
                    <WorksCardContent>
                        <WorksCard>
                            <WorksIconContainer>
                                <WolfIcon src={will}  />
                            </WorksIconContainer>
                            <WorksCardTitle>Will</WorksCardTitle>
                            <WorksCardText>
                                Project Lead
                            </WorksCardText>
                            <LogoContainer> 
                                <a href="https://twitter.com/eth_willy">
                                    <TwitterIcon src={twitter} alt="f"/>
                                </a>

                                <a href="https://discordapp.com/users/553788123835006998">
                                    <DiscordIcon src={discord} alt="f"/>
                                </a>
                            </LogoContainer>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WolfIcon src={bruh}  />
                            </WorksIconContainer>
                            <WorksCardTitle>Bruh</WorksCardTitle>
                            <WorksCardText>
                               Marketing Lead
                            </WorksCardText>
                            <LogoContainer> 
                                <a href="https://twitter.com/Bruh6629">
                                    <TwitterIcon src={twitter} alt="f"/>
                                </a>   

                                <a href="https://discordapp.com/users/381299021463158784">
                                    <DiscordIcon src={discord} alt="f"/>
                                </a>
                            </LogoContainer>
                        </WorksCard>
                        <WorksCard>
                            <WorksIconContainer>
                                <WolfIcon src={rodeo}  />
                            </WorksIconContainer>
                            <WorksCardTitle>Rodeo</WorksCardTitle>
                            <WorksCardText>
                               Lead Developer
                            </WorksCardText>
                            <LogoContainer> 
                            

                                <a href="https://twitter.com/rodeoooo_">
                                    <TwitterIcon src={twitter} alt="f"/>
                                </a>
                                <a href="https://discordapp.com/users/209921421827112962">
                                    <DiscordIcon src={discord} alt="f"/>
                                </a>
                            </LogoContainer>
                        </WorksCard>
                    </WorksCardContent>
                </WorksContainer>
            </WorksContent>
            
        </div>
    )
}

export default Team;