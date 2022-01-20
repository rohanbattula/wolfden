import styled from 'styled-components'

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
`
export const RockBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;

`;
export const AboutContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    @media only screen and (max-width:1000px) {
        flex-direction: column;
    }
    padding: 7rem 3rem;
`
export const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;‹
    padding: 3rem;
    @media only screen and (min-width:1200px) {
        padding: 3rem 6rem;
    }
    @media only screen and (min-width:1500px) {
        padding: 3rem 9rem;
    }
`
export const AboutWolf = styled.img`
    width: 20rem;
    height: 20rem;
    justify-content: center;
    object-fit: cover;
    background-size: cover;
    background-position: center;
    margin-bottom: 3rem;

`;

export const AboutH1 = styled.h1`
color: #c059be;
    font-size: 44px;
    text-align: center;
    font-weight: bold;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    @media screen and (max-width: 480px){
        font-size: 24px;
    }
`

export const AboutP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    font-weight: light;
    text-align: center;
    max-width: 600px;
    @media screen and (max-width: 768px){
        font-size: 8px;
    }
    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`