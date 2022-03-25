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
        I am Zahid Hasan a Fullstack Developer based in Dhaka Bangladesh. I likes to code things from scratch, and enjoys bringing ideas to life in the browser. Currently, I am working at Satcom IT Limited where I contribute to High-quality applications by making Components with Angular, Rxjs, and Typescript and Developing API in .NET, Golang, SQL Server, Oracle, PostgreSQL, etc.
        </SectionText>
        <span><a href="https://docs.google.com/document/d/1EUaY6Jirsp5FETr7U8rivRXHQC8iCUaDkmD900Lg8lA/edit?usp=sharing"><Button>Resume</Button></a></span>
      </LeftSection>
    </Section>
  </>
);

export default Hero;