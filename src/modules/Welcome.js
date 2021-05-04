import React from 'react'

import Image from '../components/Image'
import { WelcomeWrapper, Distance, Unit, AcStatus } from '../assets/styles/Welcome'
import Card from '../components/Card'
import Button from '../components/Button'

const Welcome = () => {
    return (
        <>
            <WelcomeWrapper>
                <Card companyName='Tesla' carName='CyberTruck' />
                <Distance>297<Unit>km</Unit></Distance>
                <Image />
                <AcStatus>A/C is turned on</AcStatus>
                {/* <Button /> */}
            </WelcomeWrapper>
        </>
    );
}

export default Welcome;

