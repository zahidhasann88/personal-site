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
          <Nav.Link eventKey="first">Karmasangsthan Limited</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Befoward Japan</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <ListTitle>Software Developer(Frontend)</ListTitle>
        <SectionText>- Working in a 5 member team, Responsible for converting ideas to web Application with HTML, CSS, 	Bootstrap, Javascript. React Js</SectionText>
          {/* <Sonnet /> */}
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <ListTitle>Frontend Developer</ListTitle>
        <SectionText>- Work as a Frontend Developer, designing, Intergation and developing user interfaces using angular.
        <br/>
        -Adapting interface for modern internet applications using the latest front-end technologies.
        <br/>
        -Writing Typescript, SCSS, and HTML.
        <br/>
        -Making complex technical and design decisions for Angular projects.
        </SectionText>
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
