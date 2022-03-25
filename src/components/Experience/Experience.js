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
          <Nav.Link eventKey="first">Satcom IT LTD</Nav.Link>
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
        <SectionText>Working as a Full Stack Developer, integrating, Designing and Writing API with Angular, SCSS, TypeScript, .NET Web API, Golang(GORM), SQL Server, Oracle, PostgreSQL.
        </SectionText>
          {/* <Sonnet /> */}
        </Tab.Pane>
      <Tab.Pane eventKey="second">
        <ListTitle>Full Stack Engineer <p style={{fontSize: "10px", color: "rgba(255,255,255,0.5)"}}>October 2021 - Present | Part Time(Remote)</p></ListTitle>
        <SectionText>Work as a Full Stack Developer, integrating, Designing, and developing, and Improving existing software using  .NET Web API and Angular, Typescript, HTML, SCSS, Oracle, SQL Server. 
        </SectionText>
          {/* <Sonnet /> */}
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <ListTitle>Software Developer(Frontend) <p style={{fontSize: "10px", color: "rgba(255,255,255,0.5)"}}>December 2020 - June 2021</p></ListTitle>
        <SectionText>- Working in a 5 member team, Responsible for converting ideas to web Application with HTML, CSS, 	Bootstrap, Javascript. React Js</SectionText>
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
