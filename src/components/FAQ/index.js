import React, {useState} from 'react'
import {Data} from './Data';
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus} from 'react-icons/fi'
import banner from '../../images/background2.png';
import {Container} from '../../globalstyles';


export const FAQContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    flex-direction:column;
`;
export const RockBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:2000px;

`;
export const FAQContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    color: #c059be;

    ${Container};
`;
export const FAQTitle = styled.h2`
    font-size: clamp(5rem, 5vw, 5rem);

    font-weight: bold;
    text-align: center;
    padding: 2rem 2rem;
    color: #c059be;
    `;
const AccordionContainer = styled.div`
    position: absolute;
    box-shadow: 2px 10px 35px 1px rgba(153,153,153,0.3);
    border-radius: 50px;
    background-color: #fff;
    border: 5px solid #c059be;
    margin-bottom: 500px;

`;
const Wrap = styled.div`
    background: #272727l
    color: #fff;
    display: flex;
    opacity: 0.9;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    

    text-align: center;
    h1{
        padding: 2rem;
        font-size: 1.5rem;
    }
    span{
        margin-right: 1.5rem;
        
    }

`;
const Dropdown = styled.div`
    background: #1c1c1c;
    color: #c059be;
    width: 100%;
    
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #c059be;

        p {
        font-size: 1rem;

    }
    :last-child{
        border-bottom: 1px solid #c059be;
        border-bottom-left-radius: 44px;
        border-bottom-right-radius:44px;
    }
`;

const Accordion = styled.div`
    &:not(:last-child) {
        border-bottom: 2px solid #c059be;

    }
 
`;
const FAQ = () => {
    const [clicked,setClicked] = useState(false)
    const toggle = index => {
        if(clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }
    return (
        <IconContext.Provider value = {{ color: '#c059be', size: '25px'}}>
            <FAQContent id="faq" >
                
                <FAQTitle> FAQ </FAQTitle>

                <FAQContainer  >
                    <AccordionContainer >
                        {Data.map ( (item,index) => {
                            return ( 
                                <Accordion>
                                    <Wrap onClick={() => toggle(index)} key={index} >
                                        <h1> {item.question} </h1>
                                        <span>{clicked=== index ? <FiMinus/> : <FiPlus/>} </span>
                                    </Wrap>
                                    {clicked === index ? (
                                        <Dropdown>
                                            <p>{item.answer} </p>
                                        </Dropdown>

                                    ):null }
                                </Accordion>

                            );
                        })}
                    </AccordionContainer>
           


                </FAQContainer>

            </FAQContent>

            
        </IconContext.Provider>
        
    )
}

export default FAQ
