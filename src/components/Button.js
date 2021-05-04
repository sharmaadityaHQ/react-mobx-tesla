import React from 'react'
import styled from 'styled-components'

const LockButton = styled.button`
position: absolute;
width: 128px;
height: 128px;
left: 312px;
top: 1012px;

transform: rotate(-180deg);
border-radius: 76px;
background: #006adf;
box-shadow:  10px 10px 19px #00448f,
             -10px -10px 19px #0090ff;
`
const Button = () => {
    return (
        <LockButton />
    )
}

export default Button