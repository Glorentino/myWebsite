import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './custom.css';
import Hobby1 from '../components/Hobby1';
import Hobby2 from '../components/Hobby2';
import Hobby3 from '../components/Hobby3';
const Hobbies = () => {
  const [key, setKey] = useState('home');
    return (
      <>
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        >
          <Tab eventKey="home" title="Traveling">
            <Hobby1/>
          </Tab>
          <Tab eventKey="profile" title="Anime">
            <Hobby2 />
          </Tab>
          <Tab eventKey="contact" title="Soccer" >
            <Hobby3/>
          </Tab>
        </Tabs>
      </>
    )
}
export default Hobbies;