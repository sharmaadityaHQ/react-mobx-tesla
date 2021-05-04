import styled from 'styled-components'
import CarIllustration from '../assets/images/cybertruck.png'

const Image = styled.div`
    position: absolute;
    width: 400px;
    height: 268px;
    /*right: -500px;*/
    left: 52vw;
    top: 47vh;
    background: url(${CarIllustration});
`

export default Image