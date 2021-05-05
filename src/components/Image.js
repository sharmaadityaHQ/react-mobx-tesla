import styled from 'styled-components'
import CarIllustration from '../assets/images/cybertruck.png'

const Image = styled.div`
    position: absolute;
    width: 400px;
    height: 268px;
    left: 25px;
    top: 300px;
    justify-content: center;
    background: url(${CarIllustration});
`

export default Image