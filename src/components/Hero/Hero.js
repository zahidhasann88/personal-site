import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Zahid Hasan <br />
          I Design Develop & Deploy
        </SectionTitle>
        <SectionText>
        Zahid Hasan is a Fullstack Developer based in Dhaka Bangladesh. he like to code things from scratch, and enjoy bringing ideas to life in the browser. Currently working at <span><a href="">Karmasangsthan</a></span> Software Developer where he contributes to the High quality applications for Retail customers by making Components with React Js and Next js etc.
        </SectionText>
        <span><a href="https://docs.google.com/document/d/1EUaY6Jirsp5FETr7U8rivRXHQC8iCUaDkmD900Lg8lA/edit?usp=sharing"><Button>Resume</Button></a></span>
      </LeftSection>
    </Section>
  </>
);

export default Hero;