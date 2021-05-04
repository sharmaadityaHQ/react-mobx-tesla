import styled from 'styled-components'
import CarIllustration from '../assets/images/cybertruck.png'

const Image = styled.img`
    position: absolute;
    width: 905px;
    height: 300px;
    right: -500px;
    top: 340px;
    background: url(${CarIllustration});
`

export default Image