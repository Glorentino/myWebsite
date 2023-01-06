import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './custom.css'
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const ProjectsTab = () => {
    const [key, setKey] = useState('home');
    return (
        <>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Contuso">
      <Project1 />
      </Tab>
      <Tab eventKey="profile" title="Email2SMS">
      <Project2 />
      </Tab>
      <Tab eventKey="contact" title="Resume Parser" >
      <Project3 />
      </Tab>
    </Tabs>
      </>
    )
}
export default ProjectsTab;