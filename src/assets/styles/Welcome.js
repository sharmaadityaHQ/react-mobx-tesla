import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
  display: flex;
  max-width: 494px;
  height: 1074px;
  width: 494px;
  border-radius: 60px;
  border-width: 2px;
  border-style: solid;
  background-image: linear-gradient(
    to left,
    rgba(53, 58, 64, 1) 0%,
    rgba(22, 23, 27, 1) 100%
  );
`;

export const Distance = styled.div`
    position: absolute;
    width: 335px;
    height: 138px;
    left: 80px;
    top: 331px;
    font-family: Gilroy, sans-serif;
    font-style: normal;
    font-weight: 250;
    font-size: 188px;
    line-height: 216px;
    text-align: center;
    letter-spacing: 0.02em;
    
`;


export const DistanceUnit = styled.div`
    position: absolute;
    width: 66px;
    height: 52px;
    left: 386px;
    top: 361px;
    font-family: Gilroy, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
`

export const Car = styled.div`
    position: absolute;
    width: 905px;
    height: 300px;
    left: 50px;
    top: 440px;
`

export const Lock = styled.div`
    position: absolute;
    width: 169px;
    height: 162px;
    left: 162px;
    top: 884px;
`

export const AcStatus = styled.div`
    position: absolute;
    width: 184px;
    height: 28px;
    left: 156px;
    top: 810px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #7F8489;
`
