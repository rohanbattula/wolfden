import React from 'react'
import {RoadmapContainer, RoadmapContent,RockBg, RoadmapTitle, WolfIcon, ImageTextWrapper} from './RoadmapElements'
import banner from '../../images/background2.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import wolf1 from '../../images/rodeo.png'
import SchoolIcon from '../../images/twitter.png'
import StarIcon from '../../images/twitter.png'

const Roadmap = () => {
    return (

        <RoadmapContainer id="roadmap">
            <RoadmapTitle> Roadmap </RoadmapTitle>

            <VerticalTimeline>

                <ImageTextWrapper>
                    <VerticalTimelineElement contentStyle={{ opacity:'0.7', color: '#000', borderRadius: '25px'}} iconStyle={{ background: '#c059be', color: '#c059be' }}>

                        <h3 className="vertical-timeline-element-title">Phase 1</h3>
                        <br></br>
                        <h4 className="vertical-timeline-element-subtitle">Gathering of the Wolves</h4>
                        <p>
                        Deep in the forest many wolves will gather, this is where members will meet in the discord. Different games and giveaways will be hosted for wolves to get their spot on the whitelist. Different collaborations will be held with other nft projects on social medias for more whitelist opportunities.
                        </p>
                        <br/>
                        <h4 className="vertical-timeline-element-subtitle">Presale</h4>
                        
                        <p>
                        A small group of wolves will be allocated whitelist positions to guarantee a spot in the wolf den. This small mint period, exclusive
    to people with whitelist roles, will be held 6 hours ahead of public sale.
                        </p>
                        <br></br>
                        <h4 className="vertical-timeline-element-subtitle">Public Sale</h4>
                        
                        <p >
                        The remaining wolves will have their chance to join the whitelisted wolves in the den during the public sale period. This sale will be available for the general public.
                        </p>

                    </VerticalTimelineElement>

                </ImageTextWrapper>
                
                <VerticalTimelineElement contentStyle={{ opacity:'0.7', color: '#000', borderRadius: '25px'}} iconStyle={{ background: '#c059be', color: '#c059be' }}>
                    <h3 className="vertical-timeline-element-title">Phase 2</h3>
                    <br></br>
                    <h4 className="vertical-timeline-element-subtitle"> Verification</h4>
                    <p>
We will create Grape verification channels for wolves to gather in their den, including exclusive alpha chats, community activities, and giveaways.
                    </p>
                    <br></br>
                    <h4 className="vertical-timeline-element-subtitle"> Rarity Tools</h4>
                    <p>
                    Following verification, Wolf Den holders will have their own designated discord channel where they can view the rarity of their minted nft.       </p>
                    <br></br>
                    <h4 className="vertical-timeline-element-subtitle"> Secondary Marketplaces</h4>
                    <p>
                    Then, wolves will be listed on Magic Eden, Alpha Art, SolanaArt where wolves can go lone wolf and leave the pack so another wolf can join the den.    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement contentStyle={{ opacity:'0.7', color: '#000', borderRadius: '25px'}} iconStyle={{ background: '#c059be', color: '#c059be' }}>
                    <h3 className="vertical-timeline-element-title">Phase 3</h3>
                    <br/>
                    <h4 className="vertical-timeline-element-subtitle">Hunting for $PREY</h4>
                    <p>
                    It’s 1 year following the nuclear war, and the wolves are enduring a famine. The wolves are ready to hunt for prey. They must stake their wolf and keep it unlisted so they can stay in the pack. They will set out for $PREY and they may or may not retrieve their $PREY each hunt. Some wolves may even stumble into radiation during this fallout causing some odd things to happen…
                    </p>
                    <br/>
                    <h4 className="vertical-timeline-element-subtitle">DAO</h4>
                    <p>
                    50% of the secondary royalties will be allocated to the DenDAO which will contribute to the utility token, metaverse integration, nft blue chip fractionalization and more! We are giving back to the community so we can keep building on this project.

                    </p>
                    <br/>
                    <h4 className="vertical-timeline-element-subtitle">Breeding</h4>
                    <p>
                    During this fallout, the wolves must rebuild their civilization so they can soon set out for the metaverse. Holders with two genesis wolves as well as XX $PREY will be appointed the opportunity to breed pups. 

                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement contentStyle={{ opacity:'0.7', color: '#000', borderRadius: '25px'}} iconStyle={{ background: '#c059be', color: '#c059be' }}>
                    <h3 className="vertical-timeline-element-title">Phase 4</h3>
                    <br></br>
                    <h4 className="vertical-timeline-element-subtitle">Voxel Creation</h4>
                    <p>
                        3D Voxels to soon be used in the metaverse will be claimable for all holders who carry a genesis voxel and a rocket to take them to their new 
home.
                    </p>
                    <br></br>
                    <h4 className="vertical-timeline-element-subtitle">Metaverse Integration</h4>
                    <p>
                        Following the release, DenDAO will collectively make a Sandbox land purchase, and develop some fun games for holders to have an enjoyable experience in the metaverse using their VX NFT creating an immersive experience.

                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement contentStyle={{ opacity:'0.7', color: '#000', borderRadius: '25px'}} iconStyle={{ background: '#c059be', color: '#c059be' }}>
                    <h3 className="vertical-timeline-element-title"> Future for the Wolfpack</h3>
                    <p>
                    Our team is always working hard behind the scenes to bring many 
more features to the wolf den metaverse. This project is far from done
and we have much more to come.

                    </p>
                </VerticalTimelineElement>


                </VerticalTimeline>
        </RoadmapContainer>
        

        
                
            )
        }

export default Roadmap
