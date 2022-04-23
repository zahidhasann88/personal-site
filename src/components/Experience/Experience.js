import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ListTitle } from '../Technologies/TechnologiesStyles';
const Experience = () => (
  <Section id="experience">
    <SectionTitle>Experiene</SectionTitle>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="outline-info" className="flex-column">
      <Nav.Item>
          <Nav.Link eventKey="first">Satcom IT Limited</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">PQS Japan</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Karmasangsthan Limited</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
      <Tab.Pane eventKey="first">
        <ListTitle>Full Stack Engineer <p style={{fontSize: "10px", color: "rgba(255,255,255,0.5)"}}>March  2022 - Present</p></ListTitle>
        <SectionText>Here I join as a Full Stack Developer. Developed an ERP system using Angular that produces various reports based on our client's transaction. I also developed another Result Processing System using Angular and .NET that processes thousands of student's result each year.
        </SectionText>
          {/* <Sonnet /> */}
        </Tab.Pane>
      <Tab.Pane eventKey="second">
        <ListTitle>Full Stack Engineer <p style={{fontSize: "10px", color: "rgba(255,255,255,0.5)"}}>October 2021 - Present | Part Time(Remote)</p></ListTitle>
        <SectionText>Here I work in an ERP System Improving existing software for an e-commerce platform, writing API in .NET(Dapper) and Integrating into Javascript, Jquery, Angular Js, generating pdf documents with Itextsharp API. and here I also build a Static Web Application for a Chemical Company(Birat Limited) With Angular 12, Typescript, HTML, CSS, Bootstrap. 
        </SectionText>
          {/* <Sonnet /> */}
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <ListTitle>Software Developer(Frontend) <p style={{fontSize: "10px", color: "rgba(255,255,255,0.5)"}}>December 2020 - June 2021</p></ListTitle>
        <SectionText>Working in a 5-member team in a job portal system designing UI and fetching data with API Call, Responsible for converting ideas to web applications with Javascript, React, React Hooks, HTML, CSS, Bootstrap.</SectionText>
          {/* <Sonnet /> */}
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    <SectionDivider/>
  </Section>
);

export default Experience;
