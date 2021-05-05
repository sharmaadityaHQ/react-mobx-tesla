import React from 'react'
import styled from 'styled-components'

const CompanyName = styled.div`
    margin-top: 90px;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    color: #7F8489;
`

const Carname = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 38px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FDFDFD;
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
`


const Card = (props) => {
    return (
        <>
            <CompanyName>{props.companyName}</CompanyName>
            <Carname>{props.carName}</Carname>
        </>
    )
}

export default Card