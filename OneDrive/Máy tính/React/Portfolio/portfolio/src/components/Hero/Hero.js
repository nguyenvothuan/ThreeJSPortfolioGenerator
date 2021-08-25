import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome, friends.<br/> 
        Thank you for hiring me!
      </SectionTitle>
      <SectionText>
        I want to be your Front-End engineer. Hire me
      </SectionText>
      <Button onClick={()=>window.location = '/'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;