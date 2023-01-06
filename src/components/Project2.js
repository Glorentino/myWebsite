import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import project2 from '../images/project2.png' 
import './custom.css'
const Project2 = () => {
    return (
        <>
          <Card style={{ width: 'auto', boxShadow:'0px 0px 8px 5px #000000' }}>
            <Card.Body>
            <img className='projectIMG' src={project2} alt='project2'/>
 
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