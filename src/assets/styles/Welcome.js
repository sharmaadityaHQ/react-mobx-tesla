import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    overflow-x: hidden;
    overflow-y: scroll;
    background: linear-gradient(180deg, #353A40 0%, #16171B 100%);
`;

export const Distance = styled.div`
    display: flex;
    margin-left: 40px;
    margin-top: 35px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 250;
    font-size: 155px;
    line-height: 216px;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.02em;
    color: #FDFDFD;
`;

export const Unit = styled.div`
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
`;

export const AcStatus = styled.div`
    margin-top: 155px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #7F8489;
`