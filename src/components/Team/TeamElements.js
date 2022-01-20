import styled from 'styled-components';
import {BiCheck, BiDetail, BiDish} from 'react-icons/bi';
import {Container} from '../../globalstyles';
import banner from '../../images/background2.png';

export const WorksContent = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

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

export const WorksContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 20rem 1rem;
color: #333333;

${Container};
`;

export const WorksTitle = styled.h2`
font-size: clamp(5rem, 5vw, 5rem);
font-weight: bold;
color: #c059be;
`;

export const WorksCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2rem;

@media only screen and (max-width:900px){
    flex-direction: column;
}
`;

export const WorksCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 21rem;
height: 21rem;
background-color: #aaa;
box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
border-radius: 90px;
transition: all .5s ease;
margin: 3rem;

opacity: 0.8;

&:not(:last-child) {
    margin-right: 5rem;
    @media only screen and (min-width: 1500px){
        margin-right: 10rem;
    }
    @media only screen and (min-width: 1300px){
        margin-right: 4rem;
    }
    @media only screen and (max-width:900px){
        margin-bottom: 3rem;
        margin-right: 1rem;
    }
    @media only screen and (max-width: 800px){
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
}

&:hover {
    box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #c059be;
    color: #fff;
    
}
`;

export const WorksIconContainer = styled.div`
width: 9rem;
height: 9rem;
transition: all .3s ease-out;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;

`;
export const WolfIcon = styled.img`
    width: 100%;
    height: 100%;
`;

export const WorksCardTitle = styled.h3`
font-size: 2.5rem;
font-weight: bold;
padding-top: .5rem;

`;

export const WorksCardText = styled.p`
font-size: 1.5rem;
padding-bottom: 1rem;


`;


export const LogoContainer  = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0rem;
    margin-top: 0rem;
`;

export const TwitterIcon = styled.img`
    width: 29px;
    height: 28px;
    cursor: pointer;

`;

export const DiscordIcon = styled.img`
    width: 29px;
    margin-left: 2rem;
    height: 31px;
    cursor: pointer;

`;

