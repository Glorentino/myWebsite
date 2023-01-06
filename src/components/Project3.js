import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project3 from '../images/project3.png' 

import './custom.css'
const Project3 = () => {
    return (
        <>
          <Card style={{ width: 'auto', boxShadow:'0px 0px 8px 5px #000000' }}>
            <Card.Body>
              <img className='projectIMG' src={project3} alt='project3'/>

            </Card.Body>
            <div className='introButtons'>
              <div className='resumeButton'>
                <Button>Live View</Button> 
              </div>
              <div className='contactButton'>
                <Button href=''>GitHub</Button>
              </div>
            </div>
          </Card>
      </>
    )
}
export default Project3;