import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './custom.css'
const Project2 = () => {
    return (
        <>
          <Card style={{ width: 'auto', boxShadow:'0px 0px 8px 5px #000000' }}>
            <Card.Body>
              <h2>
                Application which translates English emails to Spanish 
                and automatically sends to a person via SMS
              </h2>
 
            </Card.Body>
            <div className='introButtons'>
              <div className='resumeButton'>
                <Button >Live View</Button>  
              </div>
              <div className='contactButton'>
                <Button href='https://github.com/Glorentino/email_to_sms_translator'>GitHub</Button>
              </div>
            </div>
          </Card>
      </>
    )
}
export default Project2;