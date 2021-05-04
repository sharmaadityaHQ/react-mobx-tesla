import React from 'react'
import styled from 'styled-components'
import CarIllustration from './assets/images/cybertruck.png'

const WelcomeWrapper = styled.div`
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

const Heading = styled.div`
    position: absolute;
    width: 83px;
    height: 28px;
    left: 206px;
    top: 168px;

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

    color: #7F8489;
`

const Cyber = styled.div`
    position: absolute;
    width: 300px;
    height: 60px;
    left: 98px;
    top: 196px;

    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 60px;

    /* identical to box height */
    text-align: center;
    letter-spacing: 0.02em;

    color: #FDFDFD;

    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
`

const Distance = styled.div`
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


const DistanceUnit = styled.div`
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


const Lockbtn = styled.div`
position: absolute;
width: 169px;
height: 162px;
left: 162px;
top: 884px;
`

const Lockbtnbg = styled.div`
    /* btn bg */

    position: absolute;
    width: 128px;
    height: 128px;
    left: 312px;
    top: 1012px;

    transform: rotate(-180deg);
`


const Rectangle79 = styled.div`
    /* Rectangle 79 */

    position: absolute;
    width: 126px;
    height: 126px;
    left: 311px;
    top: 1011px;

    background: linear-gradient(318.21deg, #11A8FD 14.05%, #0081C9 85.29%);
    box-shadow: 10px 15px 40px #000000, -10px -15px 40px #2F393D;
    border-radius: 100px;
    transform: rotate(-180deg);
`


const Rectangle81 = styled.div`
/* Rectangle 81 */

position: absolute;
width: 128px;
height: 128px;
left: 312px;
top: 1012px;

background: linear-gradient(320.66deg, #11A8FD 14.75%, #0081C9 84.81%);
filter: blur(1px);
border-radius: 100px;
transform: rotate(-180deg);
`


const Rectangle82 = styled.div`
/* Rectangle 82 */

position: absolute;
width: 120px;
height: 120px;
left: 308px;
top: 1008px;

background: linear-gradient(320.66deg, #005EA3 14.75%, #11A8FD 84.81%);
border: 1px solid #058DD9;
box-sizing: border-box;
border-radius: 100px;
transform: rotate(-180deg);
`


const Rectangle83 = styled.div`
    /* Rectangle 83 */

    position: absolute;
    width: 120px;
    height: 120px;
    left: 308px;
    top: 1008px;

    background: linear-gradient(320.66deg, #005EA3 14.75%, #11A8FD 84.81%);
    filter: blur(1px);
    border-radius: 100px;
    transform: rotate(-180deg);
`

const LockIcon = styled.div`
    /* icon */

    position: absolute;
    width: 24px;
    height: 26.67px;
    left: 236px;
    top: 935px;

    filter: drop-shadow(0px 0px 10px rgba(99, 207, 255, 0.5)), drop-shadow(0px 0px 25px rgba(38, 171, 247, 0.2));
`


const Vector1 = styled.div`
    position: absolute;
    left: 48.75%;
    right: 48.55%;
    top: 86.73%;
    bottom: 12.15%;

    border: 3px solid #FFFFFF;
`

const Vector2 = styled.div`
position: absolute;
left: 47.68%;
right: 47.47%;
top: 87.85%;
bottom: 10.79%;

border: 3px solid #FFFFFF;
`

/* Ellipse 45 */
const Ellipse = styled.div`
    position: absolute;
    width: 4px;
    height: 4px;
    left: 246px;
    top: 952px;

    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(99, 207, 255, 0.5), 0px 0px 25px rgba(38, 171, 247, 0.2);

`



const LockText = styled.div`
position: absolute;
width: 169px;
height: 18px;
left: 162px;
top: 1028px;

font-family: Lato;
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 22px;
text-align: center;

color: #E6E6E6;
`

const AcStatus = styled.div`
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





const Car = styled.div`
    position: absolute;
    width: 494px;
    height: 1074px;
    left: 1px;
    top: 4px;
`

const MainCar = styled.div`
    position: absolute;
    width: 494px;
    height: 1074px;
    left: 1px;
    top: 4px;
`

const Rectangle294 = styled.div`

/* Rectangle 294 */

position: absolute;
width: 494px;
height: 1074px;
left: 1px;
top: 4px;

background: url(image.png);
border-radius: 60px;
`

/* Rectangle 295 */
const Rectangle295 = styled.div`

position: absolute;
width: 485px;
height: 34px;
left: 47px;
top: 700px;

background: linear-gradient(270.02deg, rgba(13, 11, 13, 0.75) 3.33%, rgba(13, 11, 13, 0.75) 83.69%, rgba(13, 11, 13, 0.375) 99.77%);
filter: blur(20px);
border-radius: 100px;
`

/* Rectangle 296 */
const Rectangle296 = styled.div`
position: absolute;
width: 392px;
height: 28px;
left: 140px;
top: 706px;

background: #030303;
filter: blur(20px);
border-radius: 100px;
`

/* cybertruck-mod-black2 1 */
const Cybertruck = styled.div`
position: absolute;
width: 905px;
height: 300px;
left: 50px;
top: 440px;

background: url(${CarIllustration});
`

/* light2 */
const Light2 = styled.div`
position: absolute;
width: 52.5px;
height: 24px;
left: 52.5px;
top: 542px;

background: #41BBFF;
box-shadow: 0px 0px 15px #41BBFF, inset 0px 0px 20px #41BBFF;
filter: blur(40px);
`

/* light1 */
const Light1 = styled.div`
position: absolute;
width: 29.5px;
height: 16px;
left: 52.5px;
top: 550.5px;

background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(65, 187, 255, 0.5), 0px 0px 70px #41BBFF;
filter: blur(4px);
`

const Welcome = () => {
    return ( 
        <>
            <WelcomeWrapper>
                <Heading>Tesla</Heading>
                <Cyber>Cybertruck</Cyber>
                <Distance>297<DistanceUnit>km</DistanceUnit></Distance>
                <Car>
                    <Light1 />
                    <Light2 />
                    <MainCar>
                        <Cybertruck />
                        <Rectangle296 />
                        <Rectangle295 />
                        <Rectangle294 />
                    </MainCar>
                </Car>
                <AcStatus>A/C is turned on</AcStatus>
                <Lockbtn>
                    <LockText>Tap to open the car</LockText>
                    <LockIcon>
                        <Ellipse />
                        <Vector1 />
                        <Vector2 />
                    </LockIcon>
                    <Lockbtnbg>
                        <Rectangle83 />
                        <Rectangle82 />
                        <Rectangle81 />
                        <Rectangle79 />
                    </Lockbtnbg>
                </Lockbtn>
            </WelcomeWrapper>
        </>
     );
}
 
export default Welcome;

