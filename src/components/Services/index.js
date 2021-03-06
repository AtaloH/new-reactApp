import React from 'react';
import Icon1 from '../../images/svg1.svg';
import Icon2 from '../../images/at.JPG';
import Icon3 from '../../images/svg6.svg';
import { ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,
ServicesIcon,ServicesH2,ServicesP } from './ServiceElements';
const Services = () => {
    return (
        <>

        <ServicesContainer id="services">
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce Expence</ServicesH2>
                    <ServicesP>help help reduce your fees and increase
                         your overall revenu.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>help help reduce your fees and increase
                         your overall revenu.</ServicesP>
                </ServicesCard>
                <ServicesCard> 
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>premium Benefits</ServicesH2>
                    <ServicesP>help help reduce your fees and increase
                         your overall revenu.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            </ServicesContainer>  
        </>
    )
}

export default Services
