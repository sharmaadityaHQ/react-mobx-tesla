import React from 'react'
import styled from 'styled-components'

const CompanyName = styled.div`
    position: relative;
    text-align: center;
    top: 168px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    color: #7F8489;
`

const Carname = styled.div`
    position: relative;
    font-style: normal;
    top: 196px;
    font-weight: 900;
    font-size: 50px;
    line-height: 60px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FDFDFD;
    text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.25);
`


const Card = (props) => {
    return (
        <div>
            <CompanyName>{props.companyName}</CompanyName>
            <Carname>{props.carName}</Carname>
        </div>
    )
}
    
export default Card