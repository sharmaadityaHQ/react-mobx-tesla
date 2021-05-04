import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    /*justify-content: center;*/
    height: 100vh;
    width: 100vw;
    background: linear-gradient(180deg, #353A40 0%, #16171B 100%);
    border-radius: 60px;
    overflow: hidden;
`;

export const Distance = styled.div`
    position: relative;
    top: 33.8vh;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 250;
    font-size: 9.79vw;
    line-height: 216px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FDFDFD;
`;

export const Unit = styled.div`
    position: absolute;
    top: 3vh;
    right: -30px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25vw;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
`;

export const AcStatus = styled.div`
    position: relative;
    top: 51vh;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #7F8489;
`