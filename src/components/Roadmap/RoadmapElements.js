import styled from 'styled-components'
import banner from '../../images/background2.png';

export const RoadmapContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    flex-direction: column;
`
export const WolfIcon = styled.img`
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 40%;
    margin-left: 670px;
    margin-top: -900px;
`;
export const RoadmapTitle = styled.h2`
font-size: clamp(7rem, 7vw, 7rem);
font-weight: bold;
color: #c059be;
`;

export const ImageTextWrapper = styled.div`

    `;
export const RockBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;

`;
export const RoadmapContent = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-image: url(${banner});

`;
